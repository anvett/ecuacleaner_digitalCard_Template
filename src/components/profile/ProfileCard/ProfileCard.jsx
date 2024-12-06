import Image from "next/image";
import { motion } from "framer-motion";

const ProfileCard = ({ profile, whatsappMessage }) => {
  const whatsappLink = `https://wa.me/${profile.phone}?text=${encodeURIComponent(whatsappMessage)}`;

  // Variantes de animación
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" } },
  };

  const imageZoomIn = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <div className="flex justify-center p-5 w-full">
      <div className="card w-full max-w-sm shadow-xl text-center sm:max-w-md lg:max-w-lg xl:max-w-xl">
        {/* Imagen del perfil con animación */}
        <figure className="px-10 pt-10 bg-transparent">
          <motion.div initial="hidden" animate="visible" variants={imageZoomIn}>
            <Image
              src={profile.image}
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-full mb-spacing-2"
            />
          </motion.div>
        </figure>

        {/* Información del perfil con animación */}
        <div className="card-body bg-transparent">
          <motion.h2
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="section-title text-light"
          >
            {profile.name}
          </motion.h2>
          <motion.h4
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="section-subtitle text-light"
          >
            {profile.title}
          </motion.h4>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-size-1 text"
          >
            {profile.description}
          </motion.p>

          {/* Botón de conectar con animación hover */}
          <motion.div
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.95 }}
            className="card-actions justify-center mt-4"
          >
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn main-button"
            >
              Contactar
            </a>
            <a
              href="/assets/vcards/gisselleconde_contact.vcf"
              download="gisselleconde_contact.vcf"
              className="btn main-button "
            >
              Guardar Contacto
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
