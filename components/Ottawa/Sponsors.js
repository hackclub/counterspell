export default function Sponsors() {
  return (
    <div className="relative px-6 py-24 text-center neuebit bg retro">
      <p className="text-3xl uppercase">
        {/* TODO: Replace `Dubai` with your city */}
        Sponsor a Magical Weekend
      </p>
      <p className="text-xl">
        Help make Ottawa's first in-person high school hackathon happen!
      </p>

      <div className="z-30">
        <a
          className="inline-block px-12 py-3 my-12 text-2xl uppercase retro bg-pink hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
          href="mailto:samliu@hackclub.com"
          style={{ textDecorationLine: "none" }}
        >
          Send us an email!
        </a>
      </div>

      <div class="flex flex-col items-center text-white">
        <p class="py-2 text-xl">Thank you to our sponsors!</p>
        <div class="max-w-5xl bg-white w-full flex flex-col items-center p-8 md:p-12 py-8 md:py-20 gap-8 md:gap-12 z-40">
          <a
            href="https://www.shopify.com/"
            target="_blank"
            class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
          >
            <img
              src="/city/ottawa/sponsors/shopify.png"
              alt="Shopify"
              class="w-auto h-20 md:h-40"
              style={{ imageRendering: "auto" }}
            />
          </a>
          <div class="flex gap-x-12 items-center flex-wrap justify-center gap-y-8">
            <a
              href="https://www.analog.com/"
              target="_blank"
              class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
            >
              <img
                src="/city/ottawa/sponsors/analog-devices.png"
                alt="Analog Devices"
                class="w-auto h-28 md:h-40"
                style={{ imageRendering: "auto" }}
              />
            </a>
            <a
              href="https://www.ssicanada.com/"
              target="_blank"
              class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
            >
              <img
                src="/city/ottawa/sponsors/ssi-canada.png"
                alt="SSi Canada"
                class="w-auto h-28 md:h-40"
                style={{ imageRendering: "auto" }}
              />
            </a>
          </div>
          <a
            href="https://dorahacks.io/"
            target="_blank"
            class="motion-safe:hover:scale-105 motion-safe:transition-all flex"
          >
            <img
              src="/city/ottawa/sponsors/dorahacks.svg"
              alt="DoraHacks"
              class="w-auto h-12 md:h-16"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
