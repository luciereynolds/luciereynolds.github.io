export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-white text-center px-4"
    >
      <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-4">
        Hi, I’m Lucie!
      </h1>
      <p className="text-xl sm:text-2xl md:text-3xl mb-6">
        I'm a full-stack developer.
      </p>
      <a
        href="#about"
        className="px-6 sm:px-8 py-3 sm:py-4 border border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300 text-base sm:text-lg"
      >
        Learn more about me! ↓
      </a>
    </section>
  );
}
