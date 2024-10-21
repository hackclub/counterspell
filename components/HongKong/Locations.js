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
      <p className="text-4xl uppercase fusion-pixel">
        嚟唔到香港？
      </p>
      <p className="text-2xl fusion-pixel">
        全球有 200+ 個 Counterspell 活動！
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
            Counterspell Hong Kong is organized by teenagers, for teenagers.
          </p>
          <p>
            Organize a Counterspell event in your city.{" "}
            <a
              href="https://hack.club/counterspell-signup"
              target="_blank"
              rel="noreferrer"
              className="text-pink"
            >
              Sign up
            </a>
            .
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center space-y-3 uppercase">
      <a
        className="z-30 w-full max-w-6xl px-6 py-6 mt-6 text-2xl uppercase bg-pink hover:text-white fusion-pixel motion-safe:hover:scale-105 motion-safe:transition-all"
        href="https://counterspell.fillout.com/hongkong?uid=locations"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecorationLine: "none" }}
      >
        立即報名加入參加Counterspell！
      </a>
      </div>
    </div>
  );
}
