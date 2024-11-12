export default function Home() {
  return (
    <div id="home">
      <div className="bg-black h-screen flex relative">
        <img
          src="/images/combo4.jpg"
          alt="background white"
          className="flex-1 opacity-10 object-cover dark:hidden"
        />
        <img
          src="/images/combo10.jpg"
          alt="background black"
          className="flex-1 opacity-10 object-cover hidden dark:block"
        />
        <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
          <h1 className="text-gold text-4xl font-bold font-nova text-start uppercase w-3/4 ml-7">
            From Our Skin to Yours <br /> — <br />
            Unlock the Secret to Healthy, Glowing Skin.
          </h1>
        </div>

        <div className="absolute top-3/4 left-4 transform z-20">
          <a
            href="#contact"
            className="text-black bg-gold px-6 py-3 rounded-xl font-semibold text-lg transition-transform transform hover:scale-105"
          >
            Contact Us
          </a>
        </div>

        <img
          src="/images/female10.jpg"
          alt="female 10"
          className="w-1/3 h-screen relative top-0 right-0 hidden md:dark:block"
        />
        <img
          src="/images/female4.jpg"
          alt="female 4"
          className="w-1/3 h-screen relative top-0 right-0 hidden md:dark:hidden md:block"
        />
      </div>
    </div>
  );
}
