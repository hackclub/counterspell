import React, { useEffect, useState } from "react";

import {
  DndContext,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
} from "@dnd-kit/sortable";
import { CSS as dndCSS } from "@dnd-kit/utilities";
import { confetti } from "@tsparticles/confetti";

const faqBkgrs = [
  "/faqbkgr/faq1.png",
  "/faqbkgr/faq2.png",
  "/faqbkgr/faq3.png",
  "/faqbkgr/faq4.png",
  "/faqbkgr/faq5.png",
  "/faqbkgr/faq6.png",
  "/faqbkgr/faq7.png",
  "/faqbkgr/faq8.png",
];

const faqData = [
  {
    question: "我有資格報名嗎？",
    answer: `如果您未滿 18 歲，當然可以，我們非常期待您的參與！
    如果您已年滿 18 歲但仍在就讀高中，請發送電子郵件至
     <a href="mailto:hongkong@counterspell.hackclub.com">hongkong@counterspell.hackclub.com</a> 與我們聯繫。`,
  },
  {
    question: "參加需要付費嗎？",
    answer: `完全免費！我們將在現場提供餐點、零食和飲料，以及紀念品、獎品和有趣的迷你活動。`,
  },
  {
    question: "Hack Club 以前做過什麼？",
    answer: `我們在世界各地舉辦過多次活動。2021 年夏天，
    我們<a href="https://www.youtube.com/watch?v=2BID8_pGuqA&ab_channel=HackClub">包租了一列火車穿越美國</a>，並舉辦了世界上歷時最長的陸上黑客松。
    去年，我們在佛蒙特州卡博特舉辦了一場戶外自助式<a href="https://www.youtube.com/watch?v=O1s5HqSqKi0&ab_channel=HackClub">露營探險</a>。`,
  },
  {
    question: "我不擅長編程，我可以參加嗎？",
    answer: `這次黑客松面向所有技能水平的黑客！我們將舉辦工作坊和其他活動，讓我們一起學習吧。如果您想開始探索一些入門項目，請查看<a href="https://workshops.hackclub.com/">Hack Club 工作坊</a>。`,
  },
  {
    question: "我可以在 Counterspell 製作什麼？",
    answer: `在 Counterspell，我們將製作各種電子遊戲！主題將在活動開始時揭曉。`,
  },
  {
    question: "我需要帶什麼去 Counterspell？",
    answer: `您的筆記型電腦、充電器和開放的心態！`,
  },
  {
    question: "我的父母很擔心！",
    answer: `我們隨時準備提供協助！請他們通過
     <a href="mailto:hongkong@counterspell.hackclub.com">hongkong@counterspell.hackclub.com</a> 與我們聯繫，
     我們會確保解答他們的所有問題！`,
  },
  {
    question: "我如何提出更多問題？",
    answer: `聯繫我們！請在 Hack Club Slack 上的 <a href="https://hackclub.com/slack/">#counterspell</a> 
    或通過電子郵件 <a href="mailto:hongkong@counterspell.hackclub.com">hongkong@counterspell.hackclub.com</a> 與我們聯繫。
    我們隨時準備回答您的所有問題！`,
  },
];

function FaqCard(props) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: props.id });

  const faqBkgr = props.bkgrs ? faqBkgrs[props.bkgrs[props.id - 1] - 1] : null;

  const style = {
    transform: dndCSS.Transform.toString(transform),
    transition,
    backgroundImage: faqBkgr ? `url(${faqBkgr})` : undefined,
  };

  const faqItem = faqData[props.id - 1];

  return (
    <div
      className="bg-pink max-w-lg lg:w-[445px] lg:h-[280px] bg-cover bg-center"
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
    >
      <div className="h-full p-5">
        <div className="flex flex-col justify-center h-full p-3 bg-black/40">
          <p className="mb-2 text-lg uppercase fusion-pixel">{faqItem.question}</p>
          <p
            className="text-l leading-6 text-justify fusion-pixel"
            dangerouslySetInnerHTML={{ __html: faqItem.answer }}
          ></p>
        </div>
      </div>
    </div>
  );
}

export default function Faq() {
  const numFaq = faqData.length;
  const faqIds = Array.from({ length: numFaq }, (_, i) => i + 1);
  const [faqItems, setFaqItems] = useState(faqIds);
  const [randomFaqBkgrs, setRandomFaqBkgrs] = useState([]);
  const [screenWidth, setScreenWidth] = useState(0);
  const [correctOrder, setCorrectOrder] = useState([]);
  const [prevSolved, setPrevSolved] = useState(false);

  useEffect(() => {
    setScreenWidth(window.innerWidth);
    const randArray = Array.from({ length: numFaq }, (_, i) => i + 1).sort(
      () => Math.random() - 0.5
    );
    setRandomFaqBkgrs(randArray);
    const correct = faqIds.toSorted(
      (a, b) => randArray[a - 1] - randArray[b - 1]
    );
    setCorrectOrder(correct);
  }, []);

  useEffect(() => {
    if (
      !prevSolved &&
      JSON.stringify(faqItems) === JSON.stringify(correctOrder)
    ) {
      confetti({
        particleCount: 300,
        spread: 160,
        origin: { y: 1 },
        startVelocity: 75,
        colors: ["#65FF96", "#43DDFF", "#2A2AFF", "#FF4387"],
      });
      setPrevSolved(true);
    }
  }, [faqItems, correctOrder]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  return (
    <div className="grid gap-8 p-5 inter lg:grid-cols-2">
      {screenWidth > 1024 ? (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
          <SortableContext items={faqItems}>
            {faqItems.map((id) => (
              <FaqCard id={id} key={id} bkgrs={randomFaqBkgrs} />
            ))}
          </SortableContext>
        </DndContext>
      ) : (
        faqItems.map((id) => <FaqCard id={id} key={id} />)
      )}
    </div>
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setFaqItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
}
