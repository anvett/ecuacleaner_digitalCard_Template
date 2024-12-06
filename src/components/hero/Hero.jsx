import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-screen bg-dark"
        style={{
          backgroundImage: "url('/assets/images/hero.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="hero-overlay bg-dark bg-opacity-80"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-2x1 mx-auto px-spacing-3 py-8 sm:px-spacing-5 lg:px-spacing-3">
            <h1 className="mb-4 font-extrabold text-light text-size-6 sm:text-size-8 lg:text-size-12 font-primary pt-spacing-2 sm:pt-spacing-1">
              ¡EcuaCleaner Inc.!
            </h1>
            <h2 className="mb-4 font-extrabold text-light text-size-4 sm:text-size-5 lg:text-size-6 font-primary pt-spacing-2 sm:pt-spacing-1">
              Especialistas en Limpieza de lotes de Vehículos
            </h2>
            <h2 className="mb-4 font-extrabold text-light text-size-4 sm:text-size-5 lg:text-size-6 font-primary pt-spacing-2 sm:pt-spacing-1">
              CarWash y Detailing  de Alta Calidad
            </h2>
            <h3 className="mb-4 font-extrabold text-light text-size-3 sm:text-size-4 lg:text-size-5 font-primary pt-spacing-2 pb-spacing-3 sm:pt-spacing-4">
              Comprometidos con la Excelencia
            </h3>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;