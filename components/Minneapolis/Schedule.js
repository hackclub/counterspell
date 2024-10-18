function LengthObject({item}) {
    if (item.length) {
        return <p>lasts {item.length}</p>;
    }
    return null;
}

function Seperator({item}) {
    /*if (item.length) {
        return <div className="mx-4 -translate-y-14 border-b-4 border-dotted grow"></div>;
    }*/
    return <div className="mx-4 -translate-y-3 border-b-4 border-dotted grow"></div>;
}

export default function Schedule() {
  const schedule = [
    { time: "8:00 AM",  event: "Doors open" },
    { time: "8:00 AM",  event: "Breakfast available" },
    { time: "9:00 AM",  event: "Opening ceremony", length: "~15-30m" },
    { time: "9:30 AM",  event: "Start working on your game!" },
    { time: "10:15 AM", event: "Workshop #1", length: "~30-45m" },
    { time: "11:15 AM", event: "Workshop #2", length: "~30-45m" },
    { time: "12:15 PM", event: "Lunch open" },
    { time: "2:45 PM",  event: "Share what you're working on", length: "~20-30m" },
    { time: "4:15 AM",  event: "Workshop #3", length: "~30-45m" },
    { time: "5:15 AM",  event: "Workshop #4", length: "~30-45m" },
    { time: "6:15 PM",  event: "Dinner opens" },
    { time: "8:00 PM",  event: "Quick round", length: "~15m" },
    { time: "8:15 PM",  event: "Game work ends" },
    { time: "8:15 PM",  event: "Submit projects", length: "~15m" },
    { time: "8:30 PM",  event: "Closing ceremony", length: "~15-30m" },
    { time: "9:30 PM",  event: "Everyone out" },
  ];

  return (
    <>
      <div className="flex flex-col items-center neuebit">
        <div className="flex flex-col w-full max-w-3xl px-12 pb-12 space-y-2 text-xl sm:text-4xl lg:text-5xl lg:max-w-4xl lg:space-y-3">
          {schedule.map((item, i) => (
            <div className="flex" key={i}>
              {item.event}
              <Seperator item={item} />
              <p>{item.time}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
