import Schedule from "./Schedule";

export default function Steps() {
  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="py-10 mx-6 text-3xl uppercase retro">
            How does a <span className="text-pink">game jam</span> work?
          </p>
          <div className="flex justify-center mx-12 my-6">
            <div className="flex flex-wrap items-center justify-center gap-6 p-8 border-4 border-dashed border-pink inter">
              <StepCard
                img="/photos/3.png"
                text="Sign up for a Counterspell Event in your city"
              />
              <StepCard
                img="/photos/4.png"
                text="Find a team of other teenagers at Counterspell"
              />
              <StepCard
                img="/photos/5.png"
                text="Start building your game (no experience needed)"
              />
              <StepCard
                img="/photos/6.png"
                text="Attend workshops, or talk to one of our mentors for help"
              />
              <StepCard
                img="/photos/7.png"
                text="Ship what you made and share it with the rest of the world!"
              />
            </div>
          </div>
          <div className="py-10 mx-6 space-y-4 text-xl uppercase retro">
            <p>
              Most Counterspell events will go on for{" "}
              <span className="text-pink">24 hours</span> (unless explicitly
              stated)
            </p>
            <p>Here's a rough schedule so you know what to expect!</p>
          </div>
        </div>
      </div>
      <Schedule />
    </div>
  );
}

function StepCard(props) {
  return (
    <div className="p-4 text-xl leading-6 tracking-wide bg-pink neuebit">
      <div className="justify-center items-center flex flex-col w-[200px]">
        <img
          src={props.img}
          alt="Steps"
          className="flex flex-col items-center justify-center overflow-hidden"
        />
      </div>

      <p className="h-24 px-2 flex items-center w-[200px]">{props.text}</p>
    </div>
  );
}
