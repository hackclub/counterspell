import { useScrollContext } from "./ScrollContext";

export default function About() {
  const registerSectionRef = useScrollContext();

  return (
    <div className="flex justify-center neuebit text-3xl py-24">
      <div className="space-y-12 max-w-8xl">
        <h2 className="pb-6 text-4xl text-center uppercase retro text-whitepurp">
          Make games, <span className="text-pink">meet cool people</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 p-8 space-y-12 border-4 border-dashed border-pink md:p-12">
            <p>
              Counterspell Minneapolis is a beginner friendly game jam for high
              schoolers and under happening in Minneapolis where{" "}
              <span className="text-pink">
                artists, musicians, and coders
              </span>{" "}
              get together to build apps and games.
            </p>
            <p className="text-2xl uppercase retro">Build whatever you want!</p>
            <p>
              Any game counts! The theme for Counterspell Minneapolis will be
              decided through peer voting before the event starts.{" "}
            </p>
            <p>
              Whether you’re a beginner or experienced in programming- we’ll
              have workshops and a variety of resources throughout the 12 hours to
              help you with your project.<br />
              Even if you aren't a programmer, you could be an artist or musician and come to this event! Teams will, of course, be allowed
            </p>
            <button
              className="h-16 px-4 uppercase border-4 bg-pink border-pink text-white font-pixel tracking-widest"
              onClick={handleButtonClick}
            >
              Sign Up!
            </button>
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

  function handleButtonClick() {
    const registerSection = document.getElementById("register-section");
    
    if (registerSection) {
      registerSection.scrollIntoView({ behavior: "smooth", block: "center" });
      console.log('test')
    }
  }
}
