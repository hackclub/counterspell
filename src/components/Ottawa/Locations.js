import { useState } from "react";

import flare1 from "../../art/flares/flare1.png";
import flare2 from "../../art/flares/flare2.png";
import flare3 from "../../art/flares/flare3.png";

export default function Locations() {
  const cities = [
    "Boston, MA",
    "New York City, NY",
    "Atlanta, GA",
    "Basking Ridge, NJ",
    "Austin, TX",
    "San Francisco, CA",
    "Burlington, VT",
    "Oshkosh, WI",
  ];

  const [submitBtn, setSubmitBtn] = useState("Sign up");

  return (
    <div className="neuebit py-24 px-6 bg-darker text-center retro relativeh">
      <p className="text-3xl uppercase">
        {/* TODO: Replace `Example City` with your city */}
        Can't make it to Ottawa?
      </p>
      <p className="text-xl">
        There are 200+ other Counterspell locations worldwide!
      </p>
      <div class="flex justify-center pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center text-2xl max-w-5xl w-full gap-8">
          {cities.map((city) => (
            <p className="lg:odd:text-left lg:even:text-right">{city}</p>
          ))}
        </div>
      </div>

      <div className="flex justify-center text-center text-2xl space-y-2 mt-20">
        <div className="border-4 border-dashed border-pink py-6 px-6 xl:px-12 neuebit tracking-wider text-4xl ">
          {/* TODO: Replace `Example City` with your city */}
          <p>Counterspell Ottawa is organized by teenagers, for teenagers.</p>
          <p>
            <a
              href="https://hack.club/counterspell-signup"
              target="_blank"
              rel="noreferrer"
              className="text-pink"
            >
              Sign up
            </a>{" "}
            to organize a Counterspell event in your city.
          </p>
        </div>
      </div>

      {/* <img
        src={flare1}
        alt=""
        className="w-48 absolute top-0 right-0 -z-10"
      ></img>
      <div class="absolute left-0 top-0 bottom-0">
        <div class="flex items-center h-full">
          <img src={flare2} alt="" className="w-48 -z-10 opacity-80"></img>
        </div>
      </div>
      <img
        src={flare3}
        alt=""
        className="w-48 absolute bottom-8 right-0 -z-10"
      ></img> */}
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new URLSearchParams(new FormData(form)),
    })
      .then((response) => {
        if (response.ok) {
          form.reset();
          setSubmitBtn("Success");
        } else {
          setSubmitBtn("Error");
        }
      })
      .catch((error) => {
        setSubmitBtn("Error");
      });
  }
}
