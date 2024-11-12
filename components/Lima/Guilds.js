import { Tilt } from "react-next-tilt";

export default function Guilds() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center retro bg-darker">
      <div className="text-3xl uppercase leading-[4rem] mx-6">
        <p>¿Artista, Músico o Programador?</p>
        <p>
          ¡Únete a uno de los tres <span className="text-pink">grupos</span> cuando te registres!
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full max-w-6xl gap-8 py-10 xl:justify-between">
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/city/Lima-cards/artista.png"
              alt="Artist card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/city/Lima-cards/musico.png"
              alt="Musician card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/city/Lima-cards/programador.png"
              alt="Hacker card"
              className="rounded-lg  max-w-[340px]"
            />
          </div>
        </Tilt>
      </div>

      <div className="flex justify-center leading-[3rem] tracking-wider mx-6">
        <div className="max-w-6xl px-6 py-6 mt-6 border-4 border-dashed border-pink">
          <p className="text-3xl neuebit">
            {/* TODO: Change `Dubai` to the name of your city */}
            ¡Puedes unirte al grupo con el que te identifiques para swags(botines) y pins exclusivos! También podrás 
            competir contra otros grupos en diversas actividades/retos a lo largo de Counterspell Lima.
          </p>
        </div>
      </div>
    </div>
  );
}
