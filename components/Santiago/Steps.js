import Schedule from "./Schedule";

export default function Steps() {
  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="py-10 mx-6 text-3xl uppercase retro">
            How does a <span className="text-pink">game jam</span> work?
          </p>
          <div className="flex justify-center mx-12 my-6">
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
              <StepCard
                img="/photos/3.png"
                // TODO: Change `Example City` to the name of your city
                text="Sign up for Counterspell Santiago"
              />
              <StepCard
                img="/photos/4.png"
                text="Encuentra un equipo de otros jovenes en Counterspell"
              />
              <StepCard
                img="/photos/5.png"
                text="Comienza a construir to juego (sin experiencia necesaria)"
              />
              <StepCard
                img="/photos/6.png"
                text="Asiste a talleres, o hablale a algunos de nuestros mentores por ayuda"
              />
              <StepCard
                img="/photos/7.png"
                text="Termina lo que hiciste y compartelo con el resto del mundo!"
              />
            </div>
          </div>
          <div className="py-10 mx-6 space-y-4 text-xl uppercase retro">
            <p>
              {/* TODO: Change `Example City` to the name of your city */}
              Counterspell Santiago durara{" "}
              {/* TODO: Change `24 hours` to match your event duration */}
              <span className="text-pink">12 horas</span>
            </p>
            <p>Aqui hay un horario aproximado para que sepas lo que esperarte!</p>
          </div>
        </div>
      </div>
      <Schedule />
    </div>
  );
}

function StepCard(props) {
  return (
    <div className="p-4 text-xl leading-6 tracking-wide bg-pink neuebit">
      <div className="justify-center items-center flex flex-col w-[200px]">
        <img
          src={props.img}
          alt="Steps"
          className="flex flex-col items-center justify-center overflow-hidden"
        />
      </div>

      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}
