export default function About() {
  return (
    <div className="flex justify-center neuebit text-3xl py-24">
      <div className="space-y-12 max-w-8xl">
        <h2 className="pb-6 text-4xl text-center uppercase retro text-whitepurp">
          Haz juegos, <span className="text-pink">conoce a gente increible</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 p-8 space-y-12 border-4 border-dashed border-pink md:p-12">
            <p>
              {/* TODO: Change `Example City` to the name of your city */}
              Counterspell Santiago es una game jam apta para principiantes occuriendo en Santiago donde{" "}
              <span className="text-pink">
              artistas, musicos, y programadores
              </span>{" "}
              se encuentran para construir aplicaciones y juegos.
            </p>
            <p className="text-2xl uppercase retro">¡Construye lo que quieras!</p>
            <p>
              {/* TODO: Change `Example City` to the name of your city */}
              ¡Cualquier juego cuenta! El tema de Counterspell Santiago
              sera decidido a travez de votacion antes de que el evento comience.{" "}
            </p>
            <p>
              {/* TODO: Change `24 hours` to match your event duration */}
              Sin importar si eres principiante o ya tienes experiencia en programación
              tendremos talleres, recursos y mentores durante las 12 horas para
              ayudarte con tu proyecto.
            </p>
          </div>
          <div
            className="h-64 bg-center bg-cover border-4 border-dashed border-pink bg-clip-padding xl:h-auto"
            style={{ backgroundImage: `url(/photos/1.png)` }}
          ></div>
          <div
            className="hidden bg-center bg-cover border-4 border-dashed xl:block border-pink bg-clip-padding"
            style={{ backgroundImage: `url(/photos/2.png)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
