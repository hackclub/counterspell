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

import faq1 from "../../art/faqbkgr/faq1.png";
import faq2 from "../../art/faqbkgr/faq2.png";
import faq3 from "../../art/faqbkgr/faq3.png";
import faq4 from "../../art/faqbkgr/faq4.png";
import faq5 from "../../art/faqbkgr/faq5.png";
import faq6 from "../../art/faqbkgr/faq6.png";
import faq7 from "../../art/faqbkgr/faq7.png";
import faq8 from "../../art/faqbkgr/faq8.png";

const faqBkgrs = [faq1, faq2, faq3, faq4, faq5, faq6, faq7, faq8];

const faqData = [
  {
    question: "Am I eligible to sign up?",
    answer: `If you're 18 or under, yes, we are so excited to see you! If you're over 18 but
        still in high school, shoot us an email at
        <a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a>.`,
  },
  {
    question: "Does participating cost anything?",
    answer: `It's entirely free! We'll have meals, snacks, and beverages onsite at the hackathon, as well as swag, prizes, and fun mini-events.`,
  },
  {
    question: "What has Hack Club done before?",
    answer: `We have run multiple events around the world. The summer of '21, we 
        <a href="https://www.youtube.com/watch?v=2BID8_pGuqA&ab_channel=HackClub">chartered a train across America</a>
        and ran the world's longest hackathon on land. Last year, we ran an outdoors do-it-yourself <a href="https://www.youtube.com/watch?v=O1s5HqSqKi0&ab_channel=HackClub">camping 
        adventure</a> in Cabot, Vermont.`,
  },
  {
    question: "I'm not good at coding, can I join?",
    answer: `This hackathon is for hackers of all skill levels! We'll have workshops and other events so join us and let's learn together. If you'd like to start exploring some introductory projects, check out <a href="https://workshops.hackclub.com/">Hack Club Workshops</a>.`,
  },
  {
    question: "What can I make at Counterspell?",
    answer: `At Counterspell, we're building video games of all kinds! The theme will be revealed at the start of the hackathon.`,
  },
  {
    question: "What do I need to bring to Counterspell?",
    answer: `Your laptop, charger, and an open mind! If your location is overnight, also bring toiletries, and a sleeping bag.`,
  },
  {
    question: "My parents are worried!",
    answer: `We're here to help! Ask them to reach out to us at
          <a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a>
          and we'll make sure to answer all their questions!`,
  },
  {
    question: "How can I reach out for more questions?",
    answer: `Contact us! Reach out at
          <a href="https://hackclub.com/slack/">#counterspell</a>
          on the Hack Club Slack or email us at
          <a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a>.
          We're always ready to answer all your questions!`,
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
      <div className="p-5 h-full">
        <div className="h-full bg-black/40 p-3 flex flex-col justify-center">
          <p className="mb-2 text-lg uppercase retro">{faqItem.question}</p>
          <p
            className="neuebit text-xl text-justify leading-6"
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
    <div className="p-5 gap-8 inter grid lg:grid-cols-2">
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
