import Subscribe from "../Subscribe";
import dynamic from "next/dynamic";
const Map = dynamic(() => import("./Map"), { ssr:false });
export default function Locations() {
  return (

      <div className="relative px-6 py-24 text-center font-semibold md:text-4xl text-3xl neuebit bg-darker retro">
          Acompáñanos en{' '} 
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=UTEC,+Jir%C3%B3n+Medrano+Silva,+Barranco"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            UTEC - Universidad de Ingeniería y Tecnología.
            Jirón Medrano Silva 165, Barranco 15063
          </a>!

      <div className="flex justify-center text-center text-2xl space-y-2 my-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl max-w-5xl w-full">
          <Map full={false} />
        </div>
      </div>
      <div className="flex justify-center my-20 space-y-2 text-2xl text-center">
        <div className="px-6 py-6 text-4xl tracking-wider border-4 border-dashed border-pink neuebit">
          <p>Counterspell es organizado por adolescentes, para adolescentes.</p>
          <p>
            ¿Quieres participar? Dale click al link {" "}
            <a
              href="https://forms.hackclub.com/t/t6AQoC7b2Lus"
              target="_blank"
              rel="noreferrer"
              className="text-pink"
            >
              Regístrate aquí
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}