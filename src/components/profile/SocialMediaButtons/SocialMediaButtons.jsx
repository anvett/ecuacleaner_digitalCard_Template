import React from 'react';
import Image from 'next/image';

const SocialMediaButtons = ({ socialLinks }) => {
  return (
    <div className="flex flex-wrap justify-center gap-spacing-1 mx-spacing-1 mb-spacing-3 mt-spacing-2">
      {socialLinks.map((link) => (
        <a key={link.type} href={link.url} className="contact-button flex items-center justify-center gap-2  flex-auto min-w-0" target="_blank" rel="noopener noreferrer">
          <div className="relative w-6 h-6">
            <Image
              src={`/assets/icons/${link.icon}`}
              alt={`${link.type} icon`}
              fill // Utiliza todo el espacio disponible
              className="object-contain"
            />
          </div>
          <span>{link.text}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButtons;
