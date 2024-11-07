export default function Schedule() {
  const schedule = [
    { time: "10:00 AM", event: "Arrival" },
    { time: "11:00 AM", event: "Kickoff" },
    { time: "12:00 PM", event: "Lunch" },
    { time: "3:00 PM", event: "Workshop 1" },
    { time: "6:00 PM", event: "Dinner" },
    { time: "9:00 PM", event: "Workshop 2" },
    { time: "12:00 AM", event: "Midnight activity?" },
    { time: "7:00 AM", event: "Breakfast" },
    { time: "8:00 AM", event: "Judging" },
    { time: "10:00 AM", event: "Winners announced" },
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
          <p className="text-xl">All times are in Central Standard Time</p>
        </div>
      </div>
    </>
  );
}