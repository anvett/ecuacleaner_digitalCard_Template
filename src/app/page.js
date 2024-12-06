"use client";

import React from "react";
import { motion } from "framer-motion";
import ProfileCard from "../components/profile/ProfileCard/ProfileCard.jsx";
import ContactButtons from "@/components/profile/ContactButtons/ContactButtons.jsx";
import SocialMediaIcons from "@/components/profile/SocialMediaIcons/SocialMediaIcons.jsx";
import GalleryWithModal from "@/components/cardContent/GalleryWithModal/GalleryWithModal.jsx";
import Slider from "@/components/cardContent/Slider/Slider.jsx";
import VideoPlayer from "@/components/VideoPlayer/VideoPlayer.jsx";
import QRDisplay from "@/components/cardContent/QRDisplay/QRDispaly.jsx";
import HeroImage from "@/components/heroImage/HeroImage.jsx";
import Hero from "@/components/hero/Hero.jsx";
import CallToAction from "@/components/cta/CallToAction.jsx";


// Animaciones básicas
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInLeft = {
  hidden: { x: "-100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

const slideInRight = {
  hidden: { x: "100vw", opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeInOut" } },
};

export default function Home() {
  //---------------------------------------------------------
  // Perfil
  //---------------------------------------------------------

  const profileData = {
    name: "Gisselle Conde",
    title: "Asistente de Ventas",
    image: "/assets/images/profile/profile.jpg",
    description:
      "¡Hola! Soy Gisselle, asistente de ventas en Ecuacleaner Inc. Estoy aquí para ayudarte con cualquier consulta o información que necesites sobre nuestros productos y servicios. Contáctame para más detalles.",
    phone: "+17866835202",
  };

  const whatsappMessage = "Hola Gisselle, me gustaría que me ayudes con información.";

  //---------------------------------------------------------
  // Datos de contacto
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos de contacto

  const contacts = [
    {
      type: "location",
      icon: "/assets/icons/location.png",
      text: "Dirección",
      address: "15230 SW 286th St, apt 413 Homestead, FL 33033",
      hours: "Lunes a Domingo, 8:00 AM - 6:00 PM / Cita previa 24/7 ",
      googleMapsLink:
        "https://www.google.com/maps/place/25%C2%B030'11.9%22N+80%C2%B026'18.6%22W/@25.5033,-80.4410749,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.5033!4d-80.4385?entry=ttu",
    },
    {
      type: "phone",
      icon: "/assets/icons/call.png",
      action: "tel:+17866835202",
      text: "Llamar",
    },
    {
      type: "email",
      icon: "/assets/icons/email.png",
      action: "mailto:info@ecuacleanerinc.com",
      text: "email",
    },
    {
      type: "whatsapp",
      icon: "/assets/icons/whatsapp.png",
      action: "https://wa.me/+17866835202",
      text: "WhatsApp",
    },
  ];

  //---------------------------------------------------------
  // Social media
  //---------------------------------------------------------

  //---------------------------------------------------------
  //Iconos y botones de redes sociales

  const socialMediaLinks = [
    {
      type: "facebook",
      icon: "facebook.png",
      url: "https://www.facebook.com/profile.php?id=61562007173212&locale=es_LA",
      text: "Facebook",
    },
    {
      type: "instagram",
      icon: "instagram.png",
      url: "https://www.instagram.com/ecua.cleaner/",
      text: "Instagram",
    },
  ];

  //---------------------------------------------------------
  // Galería de productos y/servicios con imagen o video
  //---------------------------------------------------------

  const items = [
    {
      type: "image",
      title: "Car Wash",
      image: "/assets/images/services/car_wash.jpg",
      description: [
        "Lavado profesional exterior e interior del vehículo.",
        "Productos amigables con el medio ambiente.",
        "Secado y acabado impecable garantizado.",
        "Limpieza rápida y efectiva con atención al detalle.",
      ],
      highlight: "Promoción: Descuento del 10% en tu primera visita",
    },
    {
      type: "image",
      title: "Full Detailing",
      image: "/assets/images/services/full_detailing.jpg",
      description: [
        "Limpieza profunda de interiores y exteriores.",
        "Pulido y encerado para un acabado perfecto.",
        "Restauración de brillo y eliminación de manchas.",
        "Protección de pintura y cuidado especializado.",
      ],
      highlight: "Paquete completo desde $80",
    },
    {
      type: "image",
      title: "Lotes de Autos",
      image: "/assets/images/services/lotes_autos.png",
      description: [
        "Limpieza meticulosa de lotes de autos en concesionarios.",
        "Garantiza un aspecto impecable para tus vehículos en exhibición.",
        "Personal capacitado para grandes volúmenes de limpieza.",
        "Cumplimos con los estándares más altos de calidad.",
      ],
      highlight: "Servicio especializado para concesionarios",
    },
    {
      type: "image",
      title: "Paint Correction",
      image: "/assets/images/services/paint_correction.jpg",
      description: [
        "Eliminación de rayones y defectos en la pintura.",
        "Pulido avanzado para restaurar el brillo original.",
        "Protección con selladores de pintura de alta calidad.",
        "Proceso seguro y efectivo para todo tipo de vehículos.",
      ],
      highlight: "Consulta gratuita para evaluar tu vehículo",
    },
    {
      type: "image",
      title: "Tint Removal and Installation",
      image: "/assets/images/services/tint_removal_installation.jpg",
      description: [
        "Remoción segura de tintado viejo sin dañar las ventanas.",
        "Instalación de tintado con materiales de alta calidad.",
        "Variedad de tonos para cumplir con regulaciones locales.",
        "Mejora la privacidad y reduce la exposición al sol.",
      ],
      highlight: "Precios desde $50 por ventana",
    },
    {
      type: "image",
      title: "Odor Removal",
      image: "/assets/images/services/odor_removal.png",
      description: [
        "Eliminación de olores persistentes del interior del vehículo.",
        "Uso de productos seguros y libres de químicos agresivos.",
        "Proceso rápido y efectivo para cualquier tipo de vehículo.",
        "Deja tu auto con un aroma fresco y limpio.",
      ],
      highlight: "Garantía de satisfacción o te devolvemos tu dinero",
    },
  ];

  //---------------------------------------------------------
  //Slider de productos y servicios
  //---------------------------------------------------------

  const slidesData = [
    {
      image: "/assets/images/slides/limpieza_camiones.jpg",
      title: "Limpieza de Camiones",
    },
    {
      image: "/assets/images/slides/limpieza_botes.jpg",
      title: "Limpieza de Botes",
    },
    {
      image: "/assets/images/slides/leather_paint_sealing.png",
      title: "Leather & Paint Sealing",
    },
    {
      image: "/assets/images/slides/ceramic_coat.jpg",
      title: "Ceramic Coat",
    },
    {
      image: "/assets/images/slides/limpieza_pisos.jpg",
      title: "Limpieza de Pisos, Casas y Techos",
    },
    {
      image: "/assets/images/slides/limpieza_edificios.jpg",
      title: "Limpieza de Edificios y Gasolineras",
    },
  ];

  //---------------------------------------------------------
  // CTA
  //---------------------------------------------------------

    const ctaText = "¿Listo para darle a tu vehículo el cuidado que se merece?";
    const buttonText = "¡Contáctanos Ahora!";
    const buttonLink = "https://wa.me/+17866835202"; // Ruta al formulario o página de solicitud
  //---------------------------------------------------------

  return (
    <main>

      {/* Sección Inicio */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} id="inicio">
        <Hero />
        <ProfileCard profile={profileData} whatsappMessage={whatsappMessage} />
        <ContactButtons contacts={contacts} />
        <SocialMediaIcons socialLinks={socialMediaLinks} />
      </motion.div>

      {/* Productos */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="productos"
      >
        <h1 className="section-subtitle  py-spacing-2">Servicios Destacados</h1>
        <GalleryWithModal items={items} />
      </motion.div>

      {/* Servicios */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="my-spacing-4"
        id="servicios"
      >
        <h1 className="section-subtitle  py-spacing-2">Otros Servicios</h1>
        <Slider slides={slidesData} />
      </motion.div>

      {/* Video Player */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <VideoPlayer
          videoSrc="/assets/videos/video.mp4"
          title="Ecuacleaner Inc. Car Wash - Detailing de alta calidad"
        />
      </motion.div>

      {/* QR Code */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <QRDisplay qrImage="/assets/images/qr_code.png" title="Código QR" />
      </motion.div>

      {/* Cta */}
      <motion.div initial="hidden" animate="visible" variants={fadeIn} className="my-spacing-4">
        <CallToAction ctaText={ctaText} buttonText={buttonText} buttonLink={buttonLink} />
      </motion.div>
    </main>
  );
}
