"======== READ ME BEFORE EDITING ========";
/*
Hello! this is the template for the city pages.

To create a new page, make a copy of this file in the same directory (src/pages) and rename it for your city.
Make a copy of the example components (src/components/Atlanta) and rename it for your city.
E.g. Ottawa, ON -> Ottawa.js and src/components/Ottawa.

Replace all placeholder info, indicated by "TODO" comments, in this file and the components with the appropriate content!
You do not need to use this template exactly, feel free to customize it as much as you see fit.

Once you're done, make sure to update the routes in src/index.js to include your new page. There's an example there.
Make a PR and we'll review it as soon as we can!

If you have any questions, send a message to the #counterspell channel on the Hack Club Slack and we'll try to help.

P.S. Feel free to delete this comment block when you're done! 
*/

import "./App.css";
import React, { useEffect, useRef, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import useSound from "use-sound";

// TODO: Change `Atlanta` to the name of your city
import Hero from "../components/Atlanta/Hero";
import Locations from "../components/Atlanta/Locations";
import Cards from "../components/Atlanta/Cards";
import Steps from "../components/Atlanta/Steps";
import About from "../components/Atlanta/About";
import Faq from "../components/Atlanta/Faq";

import music from "../music.mp3";
import Footer from "../components/Atlanta/Footer";

// TODO: Change `Atlanta` to the name of your city
export default function Atlanta() {
  const [init, setInit] = useState(false);
  const [docHeight, setDocHeight] = useState(0);
  const [scrollPos, setScrollPos] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const [play, { stop }] = useSound(music, { volume: isMuted ? 0 : 1 });

  useEffect(() => {
    if (init) {
      return;
    }

    setDocHeight(document.documentElement.scrollHeight);

    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    setScrollPos(window.scrollY);
  };

  const audioRef = useRef(null);

  function toggleMute() {
    if (isMuted) {
      play();
    } else {
      stop();
    }
    setIsMuted(!isMuted);
  }

  return (
    <div>
      <div
        className="fixed bottom-0 left-0 right-0 h-36 pointer-events-none bg-gradient-to-t from-darker from-20% to-transparent z-10 motion-safe:transition-all"
        style={{ opacity: docHeight - scrollPos < 1000 ? "0" : "100" }}
      ></div>
      <div
        style={{
          zIndex: 999,
        }}
        className="fixed bottom-3 right-3"
      >
        <div
          className="bg-darker border-pink size-12 rounded-full border-2 flex items-center justify-center"
          onClick={toggleMute}
        >
          {!isMuted ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 9.75 19.5 12m0 0 2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6 4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z"
              />
            </svg>
          )}
        </div>
      </div>
      <audio ref={audioRef} loop autoPlay>
        <source src="/haunted.mp3" type="audio/mp3" />
      </audio>

      <Hero />

      <div className="relative">
        <div class="absolute -bottom-4 left-0 right-0 top-0 grainy-bg pointer-events-none"></div>
        <div class="absolute -bottom-4 left-0 right-0 top-0 -z-10 bg-dark"></div>

        <About />

        <Cards />

        <Steps />

        <Locations />

        <div
          class="faq"
          className="flex flex-col justify-center text-center retro py-12"
        >
          <div className="m-6">
            <p className="mb-6 text-3xl uppercase">
              Frequently Asked Questions
            </p>
            <div class="flex justify-center">
              <Faq />
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <svg width="0" height="0" className="block">
        <filter id="grainy" x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency=".5" />
          <feColorMatrix type="saturate" values="0" />
          <feBlend in="SourceGraphic" mode="multiply" />
        </filter>
      </svg>
    </div>
  );
}
