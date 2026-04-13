export default function Info() {
  return (
    <section className="py-16 md:py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 md:px-6 grid gap-6 md:grid-cols-3">
        {["Comida Casera", "Ingredientes Frescos", "Entrega Rápida"].map((title, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-lg md:text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm md:text-base">
              Calidad y sabor en cada plato que preparamos para ti.
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}