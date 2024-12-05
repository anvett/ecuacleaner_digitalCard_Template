


// import React, { useRef } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Slider = ({ slides }) => {
//   const carouselRef = useRef(null);

//   const handleScrollToSlide = (index) => {
//     const slideElement = document.querySelector(`#slide${index}`);
//     if (slideElement) {
//       carouselRef.current.scrollTo({
//         left: slideElement.offsetLeft,
//         behavior: 'smooth',
//       });
//     }
//   };

//   // Variantes de animación para las imágenes
//   const fadeIn = {
//     hidden: { opacity: 0 },
//     visible: { opacity: 1, transition: { duration: 0.8, ease: 'easeInOut' } },
//   };

//   return (
//     <div className="container mx-auto px-4">
//       {/* Carousel container with scroll snapping */}
//       <div
//         ref={carouselRef}
//         className="carousel w-full overflow-x-scroll snap-x snap-mandatory scroll-smooth"
//       >
//         {slides.map((slide, index) => (
//           <motion.div
//             key={index}
//             id={`slide${index}`}
//             className="carousel-item relative w-full snap-start"
//             initial="hidden"
//             animate="visible"
//             variants={fadeIn}
//             whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Efecto hover
//           >
//             {/* Imagen del carrusel */}
//             <img
//               src={slide.image}
//               className="w-full lg:w-3/5 mx-auto" // 80% en pantallas grandes
//               alt={`Slide ${index}`}
//             />
//           </motion.div>
//         ))}
//       </div>

//       {/* Botones para cambiar de imagen */}
//       <div className="text-center  mt-spacing-2 flex flex-wrap sm:mx-spacing-3 gap-2 justify-center">
//         {slides.map((slide, index) => (
//           <button
//             key={index}
//             aria-label={`Slide ${index}`}
//             className={`btn slide-button ${index === 0 ? 'btn-active' : ''}`}
//             onClick={() => handleScrollToSlide(index)}
//           >
//             {slide.title}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Slider;


import React, { useRef } from "react";
import { motion } from "framer-motion";

const Slider = ({ slides }) => {
  const carouselRef = useRef(null);

  const handleScrollToSlide = (index) => {
    const slideElement = document.querySelector(`#slide${index}`);
    if (slideElement) {
      carouselRef.current.scrollTo({
        left: slideElement.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  // Variantes de animación para las imágenes
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="container mx-auto px-4">
      {/* Carousel container with scroll snapping */}
      <div
        ref={carouselRef}
        className="carousel w-full overflow-x-scroll snap-x snap-mandatory scroll-smooth"
      >
        {slides.map((slide, index) => (
          <motion.div
            key={index}
            id={`slide${index}`}
            className="carousel-item relative w-full snap-start flex justify-center"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.05, transition: { duration: 0.3 } }} // Efecto hover
          >
            {/* Contenedor cuadrado con overflow-hidden */}
            <div className="w-full max-w-md sm:max-w-xl aspect-square overflow-hidden">
              <img
                src={slide.image}
                className="w-full h-full object-cover"
                alt={`Slide ${index}`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Botones para cambiar de imagen */}
      <div className="text-center mt-spacing-2 flex flex-wrap sm:mx-spacing-3 gap-2 justify-center">
        {slides.map((slide, index) => (
          <button
            key={index}
            aria-label={`Slide ${index}`}
            className={`btn slide-button ${index === 0 ? "btn-active" : ""}`}
            onClick={() => handleScrollToSlide(index)}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
