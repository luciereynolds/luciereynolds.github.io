export default function About() {
  return (
    <section
      id="about"
      className="py-10 px-4 sm:px-6 text-white-800 text-center"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">About Me</h2>
      <div className="max-w-3xl mx-auto flex flex-col items-center gap-6">
        <img
          src="/assets/avatar.png"
          alt="Avatar"
          className="w-24 h-24 sm:w-32 sm:h-32 rounded-full"
        />
        <p className="text-sm sm:text-lg leading-relaxed">
          I'm a recent graduate developer based in Glasgow with a passion for
          JavaScript, React, and creating beautiful and functional web
          applications. I have experience in both front-end and back-end
          development, and I'm always eager to learn new technologies.
        </p>
        <p className="text-sm sm:text-lg leading-relaxed">
          When I'm not coding, you can find me exploring the world taking
          photographs!
        </p>
      </div>
    </section>
  );
}
