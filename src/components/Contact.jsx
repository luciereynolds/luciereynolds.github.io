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
    <section id="contact" className="py-20 px-6 text-white-800 text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Me</h2>
      <div className="mx-auto flex flex-col items-center gap-6">
        <p className="text-lg leading-relaxed">
          If you have any questions or would like to get in touch, feel free to
          reach out to me via email or connect with me on social media.
        </p>
      </div>
      <br />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 justify-items-center">
        {contacts.map(({ href, imgSrc, alt, label }) => (
          <div key={label} className="flex flex-col items-center space-y-2">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <img src={imgSrc} alt={alt} className="w-16 h-16" />
              <span className="text-sm font-medium">{label}</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}