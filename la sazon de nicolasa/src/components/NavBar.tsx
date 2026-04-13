import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-600">
          La Sazón de Nicolasa
        </h1>

        <div className="hidden md:flex space-x-8">
  <Link to="/" className="text-gray-700 hover:text-amber-600 transition">
    Inicio
  </Link>
  <Link to="/usuarios" className="text-gray-700 hover:text-amber-600 transition">
    Usuarios
  </Link>
  <Link to="/ofertas" className="text-gray-700 hover:text-amber-600 transition">
    Ofertas
  </Link>
  <Link to="/delivery" className="text-gray-700 hover:text-amber-600 transition">
    Delivery
  </Link>
  <Link to="/pedido-local" className="text-gray-700 hover:text-amber-600 transition">
    Pedido Local
  </Link>
</div>
      </div>
    </nav>
  );
}