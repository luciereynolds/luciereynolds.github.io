export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col justify-center items-center text-white text-center px-4"
    >
      <h1 className="text-6xl sm:text-7xl md:text-8xl font-extrabold mb-6">
        Hi, I’m Lucie!
      </h1>
      <p className="text-2xl sm:text-3xl md:text-4xl mb-8">
        I'm a full-stack developer.
      </p>
      <a
        href="#about"
        className="px-8 sm:px-10 py-4 sm:py-5 border border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300 text-lg sm:text-xl"
      >
        Learn more about me! ↓
      </a>
    </section>
  );
}
