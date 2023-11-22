'use client';
import { useState, useRef } from 'react';
import Image from 'next/image';
import ClientToggle from './clientToggle';
import Options from './options';
import ClientContentWrap from './clientContentWrap';
import { useSizes } from './clientUtils';
import styles from './clientImages.module.css';

export default function ClientImages({
  link,
  copyright,
  options,
  imgproxySize,
  originalSize,
  preset,
  links,
  children,
}) {
  const [active, setActive] = useState('imgproxy');
  const ref = useRef();
  const { sizes } = useSizes();
  const sizeNI = sizes[ref.current?.src];

  return (
    <>
      <ClientToggle active={active} onChange={setActive} />
      {active === 'imgproxy' ? (
        <ClientContentWrap
          originalSize={originalSize}
          imgproxySize={imgproxySize}
          sizeNI={sizeNI}
          copyright={copyright}
          links={links}
          image={children}
        >
          <p>Try different sets of imgproxy options:</p>
          <Options options={options} preset={preset} />
        </ClientContentWrap>
      ) : null}
      {active === 'nextimage' ? (
        <ClientContentWrap
          originalSize={originalSize}
          imgproxySize={imgproxySize}
          sizeNI={sizeNI}
          copyright={copyright}
          links={links}
          image={
            <Image
              src={link}
              ref={ref}
              layout="fill"
              objectFit="contain"
              alt="Image of the day"
            />
          }
        >
          <p>Next image has only a few parameters for image processing:</p>
          <p>
            <span className={styles.code}>width</span>,{' '}
            <span className={styles.code}>height</span>,{' '}
            <span className={styles.code}>sizes</span> and{' '}
            <span className={styles.code}>quality</span>.
          </p>
        </ClientContentWrap>
      ) : null}
    </>
  );
}
