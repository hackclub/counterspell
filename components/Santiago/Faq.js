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
    question: "¿Soy eligible para registrarme?",
    answer: `Si tienes 18 o menos, si, estamos muy emocionados de verte! Si tienes mas de 18 pero
        todavia estas en el colegio, envianos un email en
        <a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a>.`,
  },
  {
    question: "¿Cuesta algo participar?",
    answer: `¡Es completamente gratis! Tendremos comidas, snacks y bebestibles en el sitio en la hackathon, igualmente que premios, regalos y divertidos mini-eventos.`,
  },
  {
    question: "¿Que ha hecho antes Hack Club?",
    answer: `Hemos realizado múltiples eventos en todo el mundo. En el verano de 2021 
        <a href="https://www.youtube.com/watch?v=2BID8_pGuqA&ab_channel=HackClub">fletamos un tren a travez de los Estados Unidos</a>
        y realizamos el hackathon mas largo del mundo sobre tierra. El año pasado, organizamos una <a href="https://www.youtube.com/watch?v=O1s5HqSqKi0&ab_channel=HackClub">aventura de campamento</a> al aire libre en Cabot, Vermont.`,
  },
  {
    question: "No soy bueno en la programacion, ¿puedo participar?",
    answer: `Esta hackathon es para hackers de todos los niveles! Tendremos talleres y otros eventos, asi que unete a nosotros y aprendamos juntos. Si te gustaria comenzar a explorar algunos projectos introductorios, revisa los <a href="https://workshops.hackclub.com/">Talleres de Hack Club</a> (en ingles). `,
  },
  {
    question: "¿Que tipo de juegos vamos a construir?",
    answer: `En Counterspell, construiremos videojuegos de todos los tipos! El tema sera revelado al comiendo de la hackathon.`,
  },
  {
    question: "¿Que necesito traer?",
    answer: `Tu laptop, cargador y una mente abierta!`,
  },
  {
    question: "Mis padres estan preocupados!",
    answer: `Estamos aqui para ayudar! Pideles que nos contacten en
          <a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a>
          y nos aseguraremos de responder todas sus preguntas!`,
  },
  {
    question: "Como puedo alcanzarlos con mas preguntas?",
    answer: `Contactanos! Puedes encontrarnos en el canal
          <a href="https://hackclub.com/slack/">#counterspell</a>
          en el Slack de Hack Club o enviarnos un correo a
          <a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a>.
          Estamos listos para responder todas tus preguntas!`,
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
          <p className="mb-2 text-lg uppercase retro">{faqItem.question}</p>
          <p
            className="text-xl leading-6 text-justify neuebit"
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
