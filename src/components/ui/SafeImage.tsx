'use client';

import Image, { ImageProps } from 'next/image';
import { useMemo, useState } from 'react';

type SafeImageProps = Omit<ImageProps, 'src'> & {
  src: string;
  fallbackSrc?: string;
};

const defaultFallback = '/images/product-fallback.svg';

export default function SafeImage({ src, fallbackSrc = defaultFallback, alt, ...props }: SafeImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  const safeAlt = useMemo(() => alt?.trim() || 'Image', [alt]);

  return (
    <Image
      {...props}
      src={currentSrc}
      alt={safeAlt}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
      }}
    />
  );
}
