'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import { useSizes } from '@/app/util/client';
import { toKB } from '@/app/util/common';

const imgStyle = { display: 'none' };

export default function ClientToggle({ label, url }) {
  const [nextUrl, setNextUrl] = useState();
  const { sizes, ready } = useSizes();
  const size = sizes[nextUrl];
  const handleLoad = useCallback((e) => setNextUrl(e.target.currentSrc), []);

  return (
    <>
      <p>
        {label}: {size ? `${toKB(size)}` : '[calculating...]'}
      </p>
      {ready && (
        <Image
          src={url}
          alt="Temporary image"
          layout="fill"
          objectFit="contain"
          loading="eager"
          onLoad={handleLoad}
          style={imgStyle}
        />
      )}
    </>
  );
}
