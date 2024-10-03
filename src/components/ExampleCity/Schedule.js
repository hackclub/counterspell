export default function Schedule() {
  // TODO: Edit this to match your event schedule
  const schedule = [
    { time: "11:00 AM", event: "Doors open" },
    { time: "12:00 PM", event: "Opening ceremony" },
    { time: "12:30 PM", event: "Lunch" },
    { time: "1:00 PM", event: "Start working on your game!" },
    { time: "2:00 PM", event: "Gamedev workshop 1" },
    { time: "4:00 PM", event: "Activity 1" },
    { time: "4:00 PM", event: "Gamedev workshop 2" },
    { time: "6:00 PM", event: "Dinner" },
    { time: "8:00 PM", event: "Lightning talks" },
    { time: "12:00 AM", event: "Midnight surprise" },
    { time: "8:00 AM", event: "Breakfast" },
    { time: "10:30 AM", event: "Game demos!" },
    { time: "12:00 PM", event: "Closing ceremony" },
  ];

  return (
    <>
      <div className="flex flex-col items-center neuebit">
        <div className="flex flex-col text-xl sm:text-4xl lg:text-5xl w-full max-w-3xl lg:max-w-4xl space-y-2 lg:space-y-3 px-12 pb-12">
          {schedule.map((item) => (
            <div className="flex">
              <p>{item.event}</p>
              <div className="grow border-b-4 border-dotted -translate-y-3 mx-4"></div>
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
