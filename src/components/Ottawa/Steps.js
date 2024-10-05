import apo1 from "../../art/images/apo1.png";
import apo2 from "../../art/images/apo2.png";
import apo3 from "../../art/images/apo3.png";
import apo4 from "../../art/images/apo4.png";
import apo5 from "../../art/images/apo5.png";
import Schedule from "./Schedule";

export default function Steps() {
  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="text-3xl uppercase py-10 retro mx-6">
            How does a <span className="text-pink">game jam</span> work?
          </p>
          <div className="flex justify-center mx-12 my-6">
            <div className="border-4 border-pink border-dashed flex flex-wrap items-center justify-center inter p-8 gap-6">
              <StepCard
                img={apo1}
                // TODO: Change `Example City` to the name of your city
                text="Sign up for Counterspell Ottawa"
              />
              <StepCard
                img={apo2}
                text="Find a team of other teenagers at Counterspell"
              />
              <StepCard
                img={apo3}
                text="Start building your game (no experience needed)"
              />
              <StepCard
                img={apo5}
                text="Attend workshops, or talk to one of our mentors for help"
              />
              <StepCard
                img={apo4}
                text="Ship what you made and share it with the rest of the world!"
              />
            </div>
          </div>
          <div className="py-10 text-xl uppercase retro space-y-4 mx-6">
            <p className="">
              {/* TODO: Change `Example City` to the name of your city */}
              Counterspell Ottawa will go on for{" "}
              {/* TODO: Change `24 hours` to match your event duration */}
              <span className="text-pink">24 hours</span>
            </p>
            <p>from Nov. 23, 2pm to Nov. 24th, 2pm</p>
            <p className="">
              Here's a rough schedule so you know what to expect!
            </p>
          </div>
        </div>
      </div>
      <Schedule />
      <div className="flex justify-center leading-[3rem] tracking-wider mx-6 pb-12 retro text-center">
        <a
          className="z-40 mt-6 bg-pink max-w-4xl w-full py-6 px-6 text-2xl uppercase hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
          href="https://forms.hackclub.com/join-counterspell-ottawa"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecorationLine: "none" }}
        >
          Sign up to attend Counterspell Ottawa
        </a>
      </div>
    </div>
  );
}

function StepCard(props) {
  return (
    <div className="bg-pink p-4 neuebit text-xl leading-6 tracking-wide">
      <div className="justify-center items-center flex flex-col w-[200px]">
        <img
          src={props.img}
          alt="Steps"
          className="justify-center items-center flex flex-col overflow-hidden"
        />
      </div>

      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}
