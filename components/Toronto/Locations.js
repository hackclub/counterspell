/* import Subscribe from "../Subscribe";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("./Map"), { ssr:false });

export default function Locations() {
  return (
    
      <div className="relative px-6 py-24 text-center font-semibold md:text-4xl text-3xl neuebit bg-darker retro">
          Meet Us At{' '} 
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=620+King+St+W,+Toronto,+ON+M5V+1M7"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-300"
          >
            Shopify Toronto
            620 King St W
            Toronto, ON M5V 1M6
          </a>!

      <div className="flex justify-center text-center text-2xl space-y-2 my-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 neuebit tracking-wider text-4xl max-w-5xl w-full">
          <Map full={false} />
        </div>
      </div>
    </div>
  );
}
 */