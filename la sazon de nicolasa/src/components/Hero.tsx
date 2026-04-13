import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center text-white text-center px-4 bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092')",
      }}
    >
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contenido */}
      <div className="relative z-10 max-w-2xl space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold">
          La Sazón de Nicolasa
        </h2>

        <p className="text-sm sm:text-base md:text-lg">
          El verdadero sabor casero peruano que te hará volver
        </p>

        <Link
          to="/pedido-local"
          className="inline-block bg-orange-500 hover:bg-orange-600 px-5 py-2 md:px-6 md:py-3 rounded-full font-semibold transition transform hover:scale-105"
        >
          Hacer Pedido
        </Link>
      </div>
    </section>
  );
}