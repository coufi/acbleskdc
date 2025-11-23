'use client';

import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

interface Logo {
  src: string;
  thumbnail: string;
  alt: string;
}

const logos: Logo[] = [
  {
    src: '/images/logo/1acbleskdc.png',
    thumbnail: '/images/logo/1acbleskdc-small.png',
    alt: 'ACbleskDC Logo 1',
  },
  {
    src: '/images/logo/2acbleskdc.png',
    thumbnail: '/images/logo/2acbleskdc-small.png',
    alt: 'ACbleskDC Logo 2',
  },
  {
    src: '/images/logo/3acbleskdc.png',
    thumbnail: '/images/logo/3acbleskdc-small.png',
    alt: 'ACbleskDC Logo 3',
  },
  {
    src: '/images/logo/4acbleskdc.png',
    thumbnail: '/images/logo/4acbleskdc-small.png',
    alt: 'ACbleskDC Logo 4',
  },
  {
    src: '/images/logo/acbleskdc-logo.png',
    thumbnail: '/images/logo/acbleskdc-logo-small.png',
    alt: 'ACbleskDC Logo 5',
  },
  {
    src: '/images/logo/acbleskdc.png',
    thumbnail: '/images/logo/acbleskdc-small.png',
    alt: 'ACbleskDC Logo 6',
  },
];

export default function LogoGallery() {
  const [open, setOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const slides = logos.map((logo) => ({
    src: logo.src,
    alt: logo.alt,
  }));

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {logos.map((logo, index) => (
          <button
            key={index}
            onClick={() => {
              setPhotoIndex(index);
              setOpen(true);
            }}
            className="bg-white p-4 rounded-lg hover:shadow-xl transition-shadow cursor-pointer"
          >
            <img
              src={logo.thumbnail}
              alt={logo.alt}
              className="w-full h-auto scale-80"
            />
          </button>
        ))}
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={photoIndex}
        slides={slides}
      />
    </>
  );
}

