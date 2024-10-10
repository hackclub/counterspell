import { useState } from "react";

export default function Locations() {
  // Do not update this list! We'll update it for you.
  const cities = [
    "Boston, MA",
    "New York City, NY",
    "Ottawa, ON",
    "Basking Ridge, NJ",
    "Austin, TX",
    "San Francisco, CA",
    "Burlington, VT",
    "Oshkosh, WI",
  ];
  // Do not update this list! We'll update it for you.

  const [submitBtn, setSubmitBtn] = useState("Continue");

  return (
    <div className="relative px-6 py-24 text-center neuebit bg-darker retro">
      <div className="flex flex-col items-center space-y-3 uppercase">
        <p className="text-3xl text-center">
          Sign up for Counterspell Silicon Valley
        </p>
        <small>School emails are fine.</small>
        <form
          method="post"
          className="flex flex-col space-y-4 text-2xl retro sm:text-3xl lg:flex-row lg:space-y-0"
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            name="email"
            className="outline-none border-4 lg:border-r-0 border-pink bg-transparent border-dashed px-4 h-16 sm:h-20 lg:w-[500px] w-full"
            placeholder="fiona@hackclub.com"
            required
          />
          <input type="hidden" name="userGroup" value="Hack Clubber" />
          <input
            type="hidden"
            name="mailingLists"
            value="cm1fqxdc900qn0ll9fd5m3wdv"
          />
          <button
            type="submit"
            className="h-16 px-4 uppercase border-4 bg-pink sm:h-20 border-pink"
            id="formSubmit"
          >
            {submitBtn}
          </button>
        </form>
      </div>
      <br></br>

      <p className="text-3xl uppercase">
        {/* TODO: Replace `South Bay` with your city */}
        Not in the Bay Area?
      </p>
      <p className="text-xl">
        There are 200+ other Counterspell locations worldwide!
      </p>
      <div className="flex justify-center pt-24">
        <div className="grid items-center justify-center w-full max-w-5xl grid-cols-1 gap-8 text-2xl lg:grid-cols-2">
          {cities.map((city, i) => (
            <p className="lg:odd:text-left lg:even:text-right" key={i}>
              {city}
            </p>
          ))}
        </div>
      </div>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    window.location.href = `https://forms.fillout.com/t/wy3fLqmsXXus?email=${encodeURIComponent(
      email
    )}`;
  }
}
