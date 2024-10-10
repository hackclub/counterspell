export default function Schedule() {
  const schedule = [
    { time: "8:00 AM", event: "Doors open" },
    { time: "8:45 PM", event: "Opening ceremony" },
    { time: "9:30 PM", event: "Breakfast" },
    { time: "10:30 PM", event: "Start working on your game!" },
    { time: "11:30 PM", event: "Gamedev workshop 1" },
    { time: "1:30 PM", event: "Lunch" },
    { time: "2:30 PM", event: "Activity 1" },
    { time: "4:30 PM", event: "Lightning talks" },
    { time: "5:30 PM", event: "Gamedev workshop 2" },
    { time: "7:30 PM", event: "Game demos" },
    { time: "8:30 PM", event: "Closing ceremony" },
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
