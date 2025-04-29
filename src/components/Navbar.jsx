export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md text-white flex flex-wrap justify-between items-center w-full py-4 px-6">
      <div className="space-x-4 sm:space-x-6 mx-auto flex-grow flex flex-wrap justify-evenly">
        {["Home", "About", "Skills", "Portfolio", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="hover:text-pink-300 transition-colors duration-300 text-sm sm:text-base"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
  );
}
