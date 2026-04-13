export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-center md:text-left">
          © 2026 La Sazón de Nicolasa
        </p>
        <div className="flex gap-4 text-sm">
          <span>Facebook</span>
          <span>Instagram</span>
          <span>WhatsApp</span>
        </div>
      </div>
    </footer>
  );
}
