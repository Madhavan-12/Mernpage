import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      
      {/* Left side (Brand) */}
      <div className="flex items-center space-x-3">
        <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-md">
          <span className="text-white font-bold text-lg">M</span>
        </div>
        <div>
          <h3 className="text-xl font-bold">MERN</h3>
          <p className="text-sm text-gray-400">Easy code, Peacy Node</p>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/Component" className="hover:text-yellow-400">Component</Link>
        <Link to="/Rendering" className="hover:text-yellow-400">Rendering</Link>
        <Link to="/Hooks" className="hover:text-yellow-400">Hooks</Link>
        <Link to="/Product" className="hover:text-yellow-400">Product</Link>
      </div>
    </nav>
  );
};

export default Navbar;
