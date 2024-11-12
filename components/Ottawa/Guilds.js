import { Tilt } from "react-next-tilt";

export default function Guilds() {
  return (
    <div className="flex flex-col items-center justify-center py-24 text-center retro bg-darker">
      <div className="text-3xl uppercase leading-[4rem] mx-6">
        <p>Artist, Musician or Coder?</p>
        <p>
          Join one of three <span className="text-pink">guilds</span> when you
          sign up!
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
        <div className="max-w-6xl px-6 py-6 mt-6 border-4 border-dashed border-pink">
          <p className="text-3xl neuebit">
            {/* TODO: Change `Dubai` to the name of your city */}
            You can join the guild you identify with for exclusive swag and
            badges! You also get to compete against other guilds in friendly
            activities/challenges throughout Counterspell Ottawa!
          </p>
        </div>
      </div>
      <a
        className="z-30 w-full max-w-6xl px-6 py-6 mt-6 text-2xl uppercase bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
        href="https://forms.hackclub.com/join-counterspell-ottawa"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecorationLine: "none" }}
      >
        Sign up to attend Counterspell Ottawa
      </a>
    </div>
  );
}
