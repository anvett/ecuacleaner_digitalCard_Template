

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactButtons = ({ contacts }) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleContactClick = (contact) => {
    if (contact.type === 'location') {
      setModalContent(contact);
      setShowModal(true);
    } else {
      window.location.href = contact.action;
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
    <div className="flex flex-wrap justify-center gap-spacing-1 mx-spacing-1 mb-spacing-2">
      {contacts.map((contact, index) => (
        <motion.button
          key={contact.type}
          onClick={() => handleContactClick(contact)}
          className="contact-button flex items-center justify-center gap-2 p-2 flex-auto min-w-0"
          custom={index}
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          whileHover={{ scale: 1.1, y: -5, transition: { duration: 0.3 } }} // Efecto hover
        >
          <img src={contact.icon} alt={`${contact.type} icon`} className="w-6 h-6" />
          <span>{contact.text}</span>
        </motion.button>
      ))}

      {/* Modal con animación */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="modal modal-open"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalAnimation}
          >
            <motion.div className="modal-box bg-gradient-primary">
              <h3 className="text-size-2 font-bold text-center text-light">Dirección y Horarios</h3>
              <p className="text-center pb-spacing-2 text-light">{modalContent.address}</p>
              <p className="text-center pb-spacing-2 text-light">{modalContent.hours}</p>
              <div className="modal-action">
                <a
                  href={modalContent.googleMapsLink}
                  className="btn contact-button"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ver en Google Maps
                </a>
                <a href="#" className="btn contact-button" onClick={() => setShowModal(false)}>
                  Cerrar
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContactButtons;
