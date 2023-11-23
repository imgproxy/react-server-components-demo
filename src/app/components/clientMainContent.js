'use client';
import { useState, useRef } from 'react';
import { useSizes } from './clientUtils';
import ClientToolsPanel from './clientToolsPanel';
import ClientImageSection from './clientImageSection';
import styles from './clientMainContent.module.css';

export default function MainContent({
  link,
  copyright,
  options,
  imgSizes,
  preset,
  thumbnails,
  children,
}) {
  const [active, setActive] = useState('imgproxy');
  const ref = useRef();
  const { sizes } = useSizes();
  const sizeNI = sizes[ref.current?.src];
  const size = {
    ...imgSizes,
    ni: sizeNI,
  };

  return (
    <section className={styles.wrapper}>
      <ClientToolsPanel
        state={active}
        onChange={setActive}
        size={size}
        options={options}
        preset={preset}
      />
      <ClientImageSection
        state={active}
        thumbnails={thumbnails}
        urlNi={link}
        refNi={ref}
        imgproxy={children}
        copyright={copyright}
      />
    </section>
  );
}
