import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const HeroImage = ({ imageSrc, altText }) => {
  // Variantes para animación
  const fadeIn = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      className="relative mx-auto w-full max-w-md md:max-w-xl xl:max-w-4xl h-auto overflow-hidden"
    >
      <Image
        src={imageSrc}
        alt={altText}
        layout="responsive"
        width={1600} // Se ajusta el ancho base
        height={900} // Relación de aspecto 16:9
        objectFit="cover"
        priority
        className="rounded-b-lg shadow-lg"
      />
    </motion.div>
  );
};

export default HeroImage;

