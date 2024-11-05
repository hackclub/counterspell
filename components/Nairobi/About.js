export default function About() {
  return (
    <div className="flex justify-center neuebit text-3xl py-24">
      <div className="space-y-12 max-w-8xl">
        <h2 className="pb-6 text-4xl text-center uppercase retro text-whitepurp">
          Make games, <span className="text-pink">meet cool people</span>
        </h2>
        <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
          <div className="row-span-2 p-8 space-y-12 border-4 border-dashed border-pink md:p-12">
            <p>
              Counterspell Nairobi is a beginner friendly game jam for high schoolers happening in Nairobi on the 23rd of November,2024 at
              SNDBX International in Kilimani <span className="text-pink">artists, musicians, and coders</span> get together to build apps
              and games.
            </p>
            <p className="text-2xl uppercase retro">Build whatever you want!</p>
            <p>Any game counts! The theme for Counterspell Nairobi will be decided through peer voting before the event starts. </p>
            <p>
              Whether you’re a beginner or experienced in programming- we’ll have workshops, resources and mentors throughout the 12 hours
              to help you with your project.
            </p>
            <h2 className="pb-6 text-4xl text-center uppercase retro text-whitepurp">
              <a href="https://forms.hackclub.com/t/sdMpoL7wK9us" target="_blank" rel="noreferrer" className="text-pink">
                Sign Up Now
              </a>
            </h2>
          </div>
          <div
            className="h-64 bg-center bg-cover border-4 border-dashed border-pink bg-clip-padding xl:h-auto"
            style={{ backgroundImage: `url(/photos/1.png)` }}
          ></div>
          <div
            className="hidden bg-center bg-cover border-4 border-dashed xl:block border-pink bg-clip-padding"
            style={{ backgroundImage: `url(/photos/2.png)` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
