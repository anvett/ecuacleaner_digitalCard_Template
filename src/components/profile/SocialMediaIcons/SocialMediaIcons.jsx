


import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const SocialMediaIcons = ({ socialLinks }) => {
  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeInOut' },
    }),
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-spacing-4">
      {socialLinks.map((link, index) => (
        <motion.a
          key={link.type}
          href={link.url}
          className="btn btn-circle bg-transparent border-none"
          target="_blank"
          rel="noopener noreferrer"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          whileHover={{ scale: 1.2, y: -5, transition: { duration: 0.3 } }} // Efecto hover
        >
          <div className="relative w-spacing-4 h-spacing-4 flex items-center justify-center overflow-hidden">
            <Image
              src={`/assets/icons/${link.icon}`} // Asegura que el path es correcto
              alt={`${link.type} icon`}
              fill
              className="object-contain"
            />
          </div>
        </motion.a>
      ))}
    </div>
  );
};

export default SocialMediaIcons;
