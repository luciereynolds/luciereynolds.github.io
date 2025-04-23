export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4">Hi, I’m Lucie!</h1>
      <p className="text-xl md:text-2xl mb-6">I'm a full-stack developer.</p>
      <a
        href="#about"
        className="px-6 py-3 border border-white text-white hover:bg-white hover:text-black rounded-full transition-all duration-300"
      >
        Learn more about me! ↓
      </a>
    </section>
  );
}
