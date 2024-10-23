export default function Sponsors() {
  return (
    <div className="relative px-6 py-24 text-center neuebit bg retro">
      <p className="text-3xl fusion-pixel uppercase">
        贊助這個奇妙週末
      </p>
      <p className="text-xl fusion-pixel">
        助力香港首屆實體高中生黑客松！
      </p>

      <div className="z-30">
        <a
          className="inline-block px-12 py-3 my-12 text-2xl uppercase retro bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
          href="mailto:hongkong@counterspell.hackclub.com"
          style={{ textDecorationLine: "none" }}
        >
          Send us an email!
        </a>
      </div>

      <div class="flex flex-col items-center text-white">
        <p class="py-2 text-xl">Thank you to our sponsors & partners!</p>
        <div class="max-w-5xl bg-white w-full flex flex-col items-center p-8 md:p-12 py-8 md:py-20 gap-8 md:gap-12 z-40">
          <a
            href="https://kepler-interactive.com/"
            target="_blank"
            class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
          >
            <img
              src="/city/HongKong/KeplerKowloon.png"
              alt="Kepler Interactive | Kowloon Nights"
              class="w-auto h-20 md:h-40"
              style={{ imageRendering: "auto" }}
            />
          </a>
          <div class="flex gap-x-36 items-center flex-wrap justify-center gap-y-8">
            <a
              href="https://www.slashall.hk/"
              target="_blank"
              class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
            >
              <img
                src="/city/HongKong/SlashAll.webp"
                alt="/all"
                class="w-auto h-28 md:h-28"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
              href="https://www.fillout.com/"
              target="_blank"
              class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
            >
              <img
                src="/city/HongKong/Fillout.png"
                alt="Fillout"
                class="w-auto h-28 md:h-28"
                style={{ imageRendering: "auto" }}
              />
            </a>
          </div>
          <a
            href="https://gamedevhappyhour.com/"
            target="_blank"
            class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
          >
            <img
              src="/city/HongKong/GDHH.png"
              alt="Game Dev Happy Hour"
              class="w-auto h-12 md:h-28"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
