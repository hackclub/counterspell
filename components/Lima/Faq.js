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
    question: "¿Puedo apuntarme?",
    answer: `
        Si tienes 18 años o menos, sí. ¡Esperamos verte por aquí! Si tienes más de 18 años pero estás estudiando un 
        grado medio o bachillerato, escríbenos a 
        <a href="mailto:counterspell@nosesisaid.com">counterspell@nosesisaid.com</a>.`,
  },
  {
    question: "¿Cuesta algo participar?",
    answer: `¡Es completamente gratuito! Tendremos comida, snacks y bebidas en la hackathon, por supuesto también swag, premios y pequeños mini-eventos.`,
  },
  {
    question: "¿Qué ha hecho Hack Club anteriormente?",
    answer: `Hemos realizado varios eventos a lo largo del mundo. El verano de 2021,  
        <a href="https://www.youtube.com/watch?v=2BID8_pGuqA&ab_channel=HackClub">cruzamos América en tren</a>.
        El año pasado, tuvimos una hackathon <a href="https://www.youtube.com/watch?v=O1s5HqSqKi0&ab_channel=HackClub">acampando</a> en Cabot, Vermont.`,
  },
  {
    question: "No sé programar, ¿puedo unirme?",
    answer: `¡Esta hackathon es para programadores de todos los niveles! Tendremos workshops y otros eventos asi que únete y aprendamos juntos. 
    Si quieres empezar explorando algunos proyectos introductorios, mira las <a href="https://workshops.hackclub.com/">Hack Club Workshops</a> (por ahora solo disponibles en inglés :( )`,
  },
  {
    question: "¿Qué puedo crear para Counterspell?",
    answer: `En Counterspell, queremos construir videojuegos de todo tipo. El tema será revelado al inicio del evento.`,
  },
  {
    question: "¿Qué necesito llevar para el evento?",
    answer: `Un portátil, cargador y ¡ganas de crear cosas! an open mind! Si tu evento es nocturno, no olvides llevar artículo de higiene personal y un saco de dormir.`,
  },
  {
    question: "Mis padres están preocupados por algo o no entienden algo",
    answer: `Estamos aquí para ayudar,
    diles que escriban a <a href="mailto:katherinekoo.pe@gmail.com">katherinekoo.pe@gmail.com</a>(español) o <a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a> (inglés)
    y nos aseguraremos de responder todas sus preguntas.`,
  },
  {
    question: "¿A quién puedo contactar si tengo más preguntas?",
    answer: `¡Contáctanos! Escríbenos en
          <a href="https://hackclub.com/slack/">#counterspell</a>
          en el Slack de Hack Club o escríbenos un correo a 
          <a href="mailto:counterspell@hackclub.com">counterspell@hackclub.com</a>(inglés) o 
          <a href="mailto:katherinekoo.pe@gmail.com">katherinekoo.pe@gmail.com</a>(español).
          Estamos listos para responder todas vuestras preguntas.`,
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
