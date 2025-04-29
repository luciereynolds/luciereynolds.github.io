export default function Contact() {
  const contacts = [
    {
      href: "https://github.com/luciereynolds",
      imgSrc: "/assets/contact/github.png",
      alt: "GitHub",
      label: "GitHub",
    },
    {
      href: "https://www.linkedin.com/in/luciereynolds/",
      imgSrc: "/assets/contact/linkedin.png",
      alt: "LinkedIn",
      label: "LinkedIn",
    },
    {
      href: "mailto:luciereynoldsdev@gmail.com",
      imgSrc: "/assets/contact/email.png",
      alt: "Email",
      label: "Email",
    },
  ];

  return (
    <section
      id="contact"
      className="py-10 px-4 sm:px-6 text-white-800 text-center"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-10">
        Contact Me
      </h2>
      <p className="text-sm sm:text-lg leading-relaxed mb-6">
        If you have any questions or would like to get in touch, feel free to
        reach out to me via email or connect with me on social media.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 justify-items-center">
        {contacts.map(({ href, imgSrc, alt, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center space-y-2"
          >
            <img src={imgSrc} alt={alt} className="w-12 h-12 sm:w-16 sm:h-16" />
            <span className="text-xs sm:text-sm font-medium">{label}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
