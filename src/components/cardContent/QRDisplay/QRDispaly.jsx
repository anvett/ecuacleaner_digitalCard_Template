import React from 'react';
import Image from 'next/image';

const QRDisplay = ({ qrImage, title }) => {
  return (
    <div className="flex flex-col items-center justify-center py-spacing-3">
      <h2 className="section-subtitle">{title}</h2>
      <div className="relative w-48 h-48 my-spacing-3">  {/* Tamaño mediano en todas las pantallas */}
        <Image
          src={qrImage}
          alt="QR Code"
          fill  
          className='rounded-lg my-spacing-2 object-contain'  
        />
      </div>
    </div>
  );
};

export default QRDisplay;
