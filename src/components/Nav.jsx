import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="z-10 bg-gray-800 p-4 fixed w-full">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <a href="/" className="text-white text-3xl font-bold">
            JGYM
          </a>
        </div>
        <div className="hidden md:block">
          <a href="#planes" className="text-white ml-4 hover:text-gray-200">
          Planes
          </a>
          <a href="#testimonios" className="text-white ml-4 hover:text-gray-200">
            Testimonios
          </a>
          <a href="#nuestroEquipo" className="text-white ml-4 hover:text-gray-200">
            Nuestro Equipo
          </a>
          <a href="#servicios" className="text-white ml-4 hover:text-gray-200">
          Servicios
          </a>
          <a href="#contacto" className="text-white ml-4 hover:text-gray-200">
          Contacto
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Abrir menú"
          >
            {isOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-5">
          <a href="#planes" className="block text-white mb-2">
          Planes
          </a>
          <a href="#testimonios" className="block text-white mb-2">
          Testimonios
          </a>
          <a href="#nuestroEquipo" className="block text-white mb-2">
          Nuestro Equipo
          </a>
          <a href="#servicios" className="block text-white">
            Servicios
          </a>
          <a href="#contacto" className="block text-white">
            Contacto
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;