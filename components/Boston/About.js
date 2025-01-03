export default function About() {
    return (
        <div className="flex justify-center neuebit text-3xl py-24">
            <div className="max-w-8xl space-y-12">
                <h2 className="text-center retro uppercase text-4xl text-whitepurp pb-6">
                    Make games,{" "}
                    <span className="text-pink">meet cool people</span>
                </h2>
                <div className="grid grid-cols-1 xl:grid-cols-2 grid-rows-2 gap-12 leading-[3rem] tracking-wider mx-6 2xl:mx-0">
                    <div className="row-span-2 border-4 border-pink border-dashed p-8 md:p-12 space-y-12">
                        <p>
                            Counterspell Boston is a beginner-friendly game jam
                            for high schoolers happening at the Microsoft NERD
                            Center, 1 Memorial Dr, Cambridge, MA 02142, where{" "}
                            <span className="text-pink">
                                artists, musicians, and coders
                            </span>{" "}
                            get together to build apps and games.
                        </p>
                        <p className="retro text-2xl uppercase">
                            Build whatever you want!
                        </p>
                        <p>
                            Any game counts! The theme for Counterspell Boston
                            will be announced at the beginning of the event.{" "}
                        </p>
                        <p>
                            Whether you’re a beginner or experienced in
                            programming- we’ll have workshops and resources
                            throughout the event to help you with your project.
                        </p>
                    </div>
                    <div
                        className="border-4 border-pink border-dashed bg-cover bg-center bg-clip-padding h-64 xl:h-auto"
                        style={{ backgroundImage: `url(/photos/1.png)` }}></div>
                    <div
                        className="hidden xl:block border-4 border-pink border-dashed bg-cover bg-center bg-clip-padding"
                        style={{ backgroundImage: `url(/photos/2.png)` }}></div>
                </div>
            </div>
        </div>
    );
}
