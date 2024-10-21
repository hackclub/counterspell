export default function Schedule() {
  const schedule = [
    { time: "9:00 AM", event: "開放入場" },
    { time: "9:30 PM", event: "開幕式" },
    { time: "10:00 PM", event: "開始製作你的遊戲！" },
    { time: "12:30 PM", event: "午餐" },
    { time: "2:00 PM", event: "遊戲開發工作坊" },
    { time: "4:00 PM", event: "活動 A" },
    { time: "6:00 PM", event: "晚餐" },
    { time: "7:00 AM", event: "夜間驚喜！" },
    { time: "7:30 AM", event: "遊戲演示！" },
    { time: "8:30 PM", event: "閉幕式" },
  ];

  return (
    <>
      <div className="flex flex-col items-center neuebit">
        <div className="flex flex-col w-full max-w-3xl px-12 pb-12 space-y-2 text-xl sm:text-4xl lg:text-5xl lg:max-w-4xl lg:space-y-3">
          {schedule.map((item, i) => (
            <div className="flex" key={i}>
              <p className="fusion-pixel text-l sm:text-3xl lg:text-4xl">{item.event}</p>
              <div className="mx-4 -translate-y-3 border-b-4 border-dotted grow"></div>
              <p>{item.time}</p>
            </div>
          ))}
          <a
        className="z-30 w-full max-w-6xl px-6 py-6 mt-6 text-2xl uppercase bg-pink hover:text-white motion-safe:hover:scale-105 fusion-pixel text-center motion-safe:transition-all"
        href="https://counterspell.fillout.com/hongkong?uid=schedule"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecorationLine: "none" }}
      >
        立即報名加入參加Counterspell！
      </a>
        </div>
        
      </div>
    </>
  );
}
