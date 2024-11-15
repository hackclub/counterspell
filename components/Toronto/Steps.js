import Schedule from "./Schedule";

export default function Steps() {
  return (
    <div className="py-12 space-y-6">
      <div className="flex flex-col justify-center text-center">
        <div className="">
          <p className="py-10 mx-6 text-3xl uppercase retro font-semibold leading-tight">
            Counterspell Toronto will go on for{" "}
            <span className="text-pink">24 hours</span>
          </p>
          <div className="mx-auto w-[65%] space-y-4 text-3xl leading-7 neuebit text-left border-4 border-dashed border-pink p-6">
            <p className="m-0 font-bold">
              📍 Shopify Toronto, 620 King St, Toronto, ON M5V 1M6
            </p>
            <p className="m-0">
              📅 Starts at 10:00 AM on Nov 23rd and closes at 3:00 PM on Nov 24th
            </p>
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