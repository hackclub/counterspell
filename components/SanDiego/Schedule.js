export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
	      { time: "8:00 AM", event: "Doors Open" },
    { time: "9:00 AM", event: "Opening Ceremony" },
    { time: "9:45 AM", event: "Workshop 1" },
    { time: "11:30 AM", event: "Workshop 2" },
    { time: "1:00 PM", event: "Lunch" },
    { time: "7:00 PM", event: "Dinner and Lightning Talks" },
    { time: "7:30 PM", event: "Demos and Judging" },
    { time: "8:30 PM", event: "Closing Ceremony" },
  ];


  return (
    <>
      <div className="flex flex-col items-center neuebit">
        <div className="flex flex-col w-full max-w-3xl px-12 pb-12 space-y-2 text-xl sm:text-4xl lg:text-5xl lg:max-w-4xl lg:space-y-3">
          {schedule.map((item, i) => (
            <div className="flex" key={i}>
              <p>{item.event}</p>
              <div className="mx-4 -translate-y-3 border-b-4 border-dotted grow"></div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
