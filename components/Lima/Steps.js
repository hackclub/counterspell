import Schedule from "./Schedule";

export default function Steps() {
  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="py-10 mx-6 text-3xl uppercase retro">
            ¿Cómo funciona un <span className="text-pink">game jam</span>?
          </p>
          <div className="flex justify-center mx-12 my-6">
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
            <StepCard
                img="/photos/3.png"
                text="Apúntate a Counterspell Lima."
              />
              <StepCard
                img="/photos/4.png"
                text="Encuentra a un equipo con otros adolescentes en Counterspell."
              />
              <StepCard
                img="/photos/5.png"
                text="Empieza a construir tu juego (no necesitas experiencia)."
              />
              <StepCard
                img="/photos/6.png"
                text="Asiste a workshops o pídele a uno de nuestros mentores ayuda."
              />
              <StepCard
                img="/photos/7.png"
                text="Publica lo que has creado y compártelo con el mundo."
              />
            </div>
          </div>
          <div className="py-10 mx-6 space-y-4 text-xl uppercase retro">
            <p>
              {/* TODO: Change `Dubai` to the name of your city */}
              Counterspell Lima será por{" "}
              {/* TODO: Change `24 hours` to match your event duration */}
              <span className="text-pink">12 horas</span>
            </p>
            <p>Aquí tienes un horario preliminar para saber qué esperar.</p>
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
