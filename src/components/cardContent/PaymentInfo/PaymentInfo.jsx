

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const BankInfo = ({ banks }) => {
  const [selectedBank, setSelectedBank] = useState(null);

  const handleShow = (bank) => setSelectedBank(bank);
  const handleClose = () => setSelectedBank(null);

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      alert(`Información copiada: ${text}`);
    } catch (error) {
      console.error("Error al copiar al portapapeles: ", error);
      alert("Error al copiar la información");
    }
  };

  // Variantes de animación
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5, ease: 'easeInOut' },
    }),
  };

  const modalAnimation = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
    exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3, ease: 'easeInOut' } },
  };

  return (
    <div className="flex flex-wrap justify-center items-center">
      {banks.map((bank, index) => (
        <motion.div
          key={index}
          className="p-4 cursor-pointer"
          onClick={() => handleShow(bank)}
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }} // Efecto hover
        >
          <Image
            src={`/assets/images/payment/${bank.logo}`}
            alt={bank.name}
            width={80}
            height={80}
            className="rounded-xl"
          />
        </motion.div>
      ))}

      {/* Modal con animación */}
      <AnimatePresence>
        {selectedBank && (
          <motion.div
            className="modal modal-open"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
          >
            <motion.div className="modal-box bg-gradient-primary">
              <h3 className="text-size-2 font-bold text-center text-light">{selectedBank.name}</h3>
              <p className="text-center pb-spacing-2 text-light">{selectedBank.instructions}</p>
              {selectedBank.details.map((detail, idx) => (
                <div key={idx} className="flex justify-between items-center my-2">
                  <span className="text-size-1 text-light">
                    {detail.label}: <span className="font-semibold text-light font-size-3">{detail.value}</span>
                  </span>
                  <button
                    className="btn contact-button"
                    onClick={() => copyToClipboard(detail.value)}
                  >
                    Copiar
                  </button>
                </div>
              ))}
              <div className="modal-action">
                <button className="btn contact-button" onClick={handleClose}>
                  Cerrar
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BankInfo;
