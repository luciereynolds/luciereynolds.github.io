export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-white text-center px-4"
    >
      <h1 className="text-9xl md:text-5xl lg:text-4xl font-extrabold mb-4">
        Hi, I’m Lucie!
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-6">
        I'm a full-stack developer.
      </p>
      <a
        href="#about"
        className="px-4 sm:px-6 py-2 sm:py-3 border border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300 text-sm sm:text-base"
      >
        Learn more about me! ↓
      </a>
    </section>
  );
}
