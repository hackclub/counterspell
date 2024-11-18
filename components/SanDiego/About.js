export default function About() {
  return (
    <div className="flex justify-center neuebit text-3xl py-24">
      <div className="space-y-12 max-w-8xl">
        <h2 className="pb-6 text-4xl text-center uppercase retro text-whitepurp">
          Make games, <span className="text-pink">meet cool people</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 p-8 space-y-12 border-4 border-dashed border-pink md:p-12">
            <p>
              {/* TODO: Change `Example City` to the name of your city */}
              Counterspell San Diego is a beginner friendly game jam for high
              schoolers happening in San Diego where{" "}
              <span className="text-pink">
                artists, musicians, and coders
              </span>{" "}
              get together to build apps and games.
            </p>
            <p className="text-2xl uppercase retro">Build whatever you want!</p>
            <p>
              {/* TODO: Change `Example City` to the name of your city */}
              Any game counts! The theme for Counterspell San Diego will be
              decided through peer voting before the event starts.{" "}
            </p>
            <p>
              {/* TODO: Change `24 hours` to match your event duration */}
              Whether you’re a beginner or experienced in programming- we’ll
              have workshops, resources and mentors throughout the 12 hours to
              help you with your project.
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
