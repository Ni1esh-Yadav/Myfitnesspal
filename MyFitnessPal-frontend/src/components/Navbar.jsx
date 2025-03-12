import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 p-4 ${
        isScrolled ? "bg-white" : "bg-blue-600"
      }`}
    >
      <div className="container max-w-5xl mx-auto flex justify-between items-center">
        <a href="/" className="flex items-center space-x-2">
          <span
            className={`text-2xl font-bold ${
              isScrolled ? "text-blue-600" : "text-white"
            }`}
          >
            myfitnesspal
          </span>
        </a>

        <div className="hidden md:flex space-x-6">
          <a
            href="/"
            className={`font-bold hover:text-gray-600 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Home
          </a>
          <a
            href="/Visualizations"
            target="_blank"
            rel="noopener noreferrer"
            className={`font-bold hover:text-gray-600 ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            Visualizations
          </a>
        </div>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div
          className={`absolute top-full left-0 w-full bg-white md:hidden transition-all duration-300 ${
            isScrolled ? "shadow-md" : ""
          }`}
        >
          <button
            onClick={() => navigate("/")}
            className="block py-3 px-5 text-black font-bold hover:bg-gray-100"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/Visualizations")}
            className="block py-3 px-5 text-black font-bold hover:bg-gray-100"
          >
            Visualizations
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
