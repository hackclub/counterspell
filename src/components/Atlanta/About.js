import about1 from "../../art/images/about1.png";
import about2 from "../../art/images/about2.png";

export default function About() {
  return (
    <div class="flex justify-center neuebit text-3xl py-24">
      <div className="max-w-8xl space-y-12">
        <h2 className="text-center retro uppercase text-4xl text-whitepurp pb-6">
          Make games, <span className="text-pink">meet cool people</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 border-4 border-pink border-dashed p-8 md:p-12 space-y-12">
            <p>
              {/* TODO: Change `Example City` to the name of your city */}
              Counterspell Atlanta is a beginner friendly game jam for high
              schoolers happening in Atlanta where{" "}
              <span className="text-pink">
                artists, musicians, and coders
              </span>{" "}
              get together to build apps and games.
            </p>
            <p className="retro text-2xl uppercase">Build whatever you want!</p>
            <p>
              {/* TODO: Change `Example City` to the name of your city */}
              Any game counts! The theme for Counterspell Atlanta will be
              decided through peer voting before the event starts.{" "}
            </p>
            <p>
              {/* TODO: Change `24 hours` to match your event duration */}
              Whether you’re a beginner or experienced in programming- we’ll
              have workshops, resources and mentors throughout the 24 hours to
              help you with your project.
            </p>
          </div>
          <div
            className="border-4 border-pink border-dashed bg-cover bg-center bg-clip-padding h-64 xl:h-auto"
            style={{ backgroundImage: `url(${about1})` }}
          ></div>
          <div
            className="hidden xl:block border-4 border-pink border-dashed bg-cover bg-center bg-clip-padding"
            style={{ backgroundImage: `url(${about2})` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
