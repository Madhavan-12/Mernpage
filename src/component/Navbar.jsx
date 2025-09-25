import { Link } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-2xl relative">
        {/* Left side (Brand) */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
            <span className="text-white font-black text-lg">M</span>
          </div>
          <div>
            <h3 className="text-2xl font-bold tracking-wide">MERN</h3>
            <p className="text-sm text-gray-400">Easy code, Peacy Node</p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-8">
          {[
            { to: "/", label: "Home" },
            { to: "/Component", label: "Component" },
            { to: "/Rendering", label: "Rendering" },
            { to: "/Hooks", label: "Hooks" },
            { to: "/Product", label: "Product" }
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="relative group hover:text-yellow-400 transition-all duration-300 font-medium py-2"
              >
                {item.label}
                <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={` fixed md:hidden bg-gray-800 transition-all duration-300 ${isOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <ul className="flex flex-col space-y-4 p-6">
          {[
            { to: "/", label: "Home" },
            { to: "/Component", label: "Component" },
            { to: "/Rendering", label: "Rendering" },
            { to: "/Hooks", label: "Hooks" },
            { to: "/Product", label: "Product" }
          ].map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                className="block py-2 px-4 rounded-lg hover:bg-gray-700 transition-all duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;