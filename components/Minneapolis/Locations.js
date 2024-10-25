import Subscribe from "./Subscribe";
import { useScrollContext } from "./ScrollContext";

export default function Locations() {
  const registerSectionRef = useScrollContext();

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
        Can't make it to Minneapolis?
      </p>
      <p className="text-xl">
        There are 200+ other Counterspell locations worldwide!
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
            Counterspell Minneapolis is organized by teenagers, for teenagers.
          </p>
        </div>
      </div>

      <div 
        className="flex flex-col items-center space-y-3 uppercase"
        ref={registerSectionRef}
      >
        <p className="text-xl text-center" id="register-section">
          Register for Counterspell Minneapolis
        </p>
        <small className="text-center text-large">
          Note: you'll be redirected to finish the form.
        </small>
        <Subscribe eventName="Minneapolis" />
      </div>
    </div>
  );
}
