import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md" role="navigation" aria-label="Main navigation">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">Mi Restaurant</Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-800 hover:text-blue-600">Inicio</Link>
          <Link to="/nosotros" className="text-gray-800 hover:text-blue-600">Nosotros</Link>
          <Link to="/contacto" className="text-gray-800 hover:text-blue-600">Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
