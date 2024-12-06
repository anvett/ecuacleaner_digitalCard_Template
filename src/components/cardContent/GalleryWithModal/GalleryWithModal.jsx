

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const GalleryWithModal = ({ items }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  const openModal = (item) => {
    setSelectedItem(item);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
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
    <div className="container mx-auto p-4">
      <div className="flex flex-wrap justify-center gap-4">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-2 cursor-pointer"
            onClick={() => openModal(item)}
            custom={index}
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }} // Efecto hover
          >
            <div className="shadow-lg">
              <Image
                src={item.type === 'video' ? item.thumbnail : item.image}
                alt={item.title}
                width={500}
                height={300}
                className="object-cover"
              />
              <h3 className="gallery-title">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full"
            id="my-modal"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
          >
            <motion.div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-primary">
               {/* Botón de cierre en la esquina superior derecha */}
               <button
                onClick={closeModal}
                className="absolute top-1 right-1 text-secondary hover:text-light focus:outline-none text-size-4"
              >
                &times; {/* Esto es la "X" */}
              </button>
              <div className="mt-3 text-center flex flex-col">
                {/* Renderizado condicional para video o imagen */}
                {selectedItem.type === "video" ? (
                  <video controls width="500">
                    <source src={selectedItem.image} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    width={500}
                    height={300}
                    className="object-cover"
                  />
                )}
                <h3 className="text-light section-h4 pt-spacing-1">{selectedItem.title}</h3>

                <ul className="text-left list-disc list-inside text-light">
                  {selectedItem.description.map((desc, index) => (
                    <li className="py-spacing-1 sm:spacing:2" key={index}>{desc}</li>
                  ))}
                </ul>
                <p className="modal-highlight">{selectedItem.highlight}</p>
                <div className="flex gap-spacing-1 pt-spacing-2">
                  <a
                    target="_blank" rel="noopener noreferrer" href={`https://wa.me/+593992543979?text=Desearía%20saber%20más%20sobre%20${encodeURIComponent(
                      selectedItem.title
                    )}`}
                    className="modal-button text-sm"
                  >
                    Contactar por WhatsApp
                  </a>
                  <button onClick={closeModal} className="modal-button text-sm">
                    Cerrar
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryWithModal;


