import { Tilt } from "react-next-tilt";

export default function Guilds() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center fusion-pixel bg-darker">
      <div className="text-5xl uppercase leading-[4rem] mx-6">
        <p>畫師、樂師或編程師？</p>
        <p>
        三行入會， <span className="text-pink">任君</span>選擇！
        </p>
      </div>

      <div className="flex flex-wrap justify-center w-full max-w-6xl gap-8 py-10 xl:justify-between">
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/cards/artist.png"
              alt="Artist card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/cards/musician.png"
              alt="Musician card"
              className="rounded-lg max-w-[340px]"
            />
          </div>
        </Tilt>
        <Tilt className="rounded-lg" scale={1.1}>
          <div>
            <img
              src="/cards/hacker.png"
              alt="Hacker card"
              className="rounded-lg  max-w-[340px]"
            />
          </div>
        </Tilt>
      </div>

      <div className="flex justify-center leading-[3rem] tracking-wider mx-6">
        <div className="mt-6 border-4 border-dashed border-pink max-w-6xl py-6 px-6">
          <p class="fusion-pixel text-2xl">
          你可以加入你符合自己的公會獲得紀念品和徽章！
          <br />
          在Counterspell Hong Kong期間還可以與其他公會進行友誼競技/挑戰！
          </p>
        </div>
      </div>
      <a
        className="z-30 w-full max-w-6xl px-6 py-6 mt-6 text-2xl uppercase bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
        href="https://counterspell.fillout.com/hongkong?uid=guilds"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecorationLine: "none" }}
      >
        立即報名加入參加Counterspell！
      </a>
    </div>
  );
}
