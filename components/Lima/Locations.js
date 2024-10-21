import Subscribe from "../Subscribe";

export default function Locations() {
  // Do not update this list! We'll update it for you.
  const cities = [
    "Boston, MA",
    "New York City, NY",
    "Ottawa, ON",
    "Basking Ridge, NJ",
    "Austin, TX",
    "San Francisco, CA",
    "Burlington, VT",
    "Oshkosh, WI",
  ];
  // Do not update this list! We'll update it for you.

  return (
    <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
      <p className="text-3xl uppercase">
        {/* TODO: Replace `Example City` with your city */}
        ¿No puedes llegar a Lima?
      </p>
      <p className="text-xl">
      ¡Hay muchas más ciudades organizando counterspell a lo largo del mundo!
      </p>
      <div className="flex justify-center pt-24">
        <div className="grid items-center justify-center w-full max-w-5xl grid-cols-1 gap-8 text-2xl lg:grid-cols-2">
          {cities.map((city, i) => (
            <p className="lg:odd:text-left lg:even:text-right" key={i}>
              {city}
            </p>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-20 space-y-2 text-2xl text-center">
        <div className="px-6 py-6 text-4xl tracking-wider border-4 border-dashed border-pink neuebit">
          <p>
            {/* TODO: Replace `Example City` with your city */}
            Counterspell Lima es organizado por adolescentes, para adolescentes.
          </p>
          <p>
            Organiza un Counterspell en tu ciudad{" "}
            <a
              href="https://hack.club/counterspell-signup"
              target="_blank"
              rel="noreferrer"
              className="text-pink"
            >
              Regístrate
            </a>
            .
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3 uppercase">
        <p className="text-xl text-center">
        Recibe una notificación cuando se abran los registros
        </p>
        {/* TODO: Replace `Example City` with your city */}
        <Subscribe eventName="Lima" />
      </div>
    </div>
  );
}
