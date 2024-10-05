import shopifyImage from "./sponsors/shopify.png";
import analogDevicesImage from "./sponsors/analog-devices.png";
import ssiCanadaImage from "./sponsors/ssi-canada.png";
import dorahacksImage from "./sponsors/dorahacks.svg";

export default function Sponsors() {
  return (
    <div className="neuebit py-24 px-6 bg text-center retro relativeh">
      <p className="text-3xl uppercase">
        {/* TODO: Replace `Example City` with your city */}
        Sponsor a Magical Weekend
      </p>
      <p className="text-xl">
        Help make Ottawa's first in-person high school hackathon happen!
      </p>

      <div className="z-30">
        <a
          className="retro uppercase bg-pink px-12 py-3 text-2xl inline-block my-12 hover:text-white motion-safe:hover:scale-105 motion-safe:transition-all"
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
              src={shopifyImage}
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
                src={analogDevicesImage}
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
                src={ssiCanadaImage}
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
              src={dorahacksImage}
              alt="DoraHacks"
              class="w-auto h-12 md:h-16"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
