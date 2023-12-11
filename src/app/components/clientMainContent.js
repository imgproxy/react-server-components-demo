'use client';
import { useState, useRef } from 'react';
import ClientToolsPanel from './clientToolsPanel';
import ClientImageSection from './clientImageSection';
import styles from './clientMainContent.module.css';

export default function MainContent({
  link,
  imgproxyLink,
  title,
  copyright,
  options,
  activeIndex,
  sizeMeta,
  preset,
  thumbnails,
}) {
  const [active, setActive] = useState('imgproxy');
  const ref = useRef();

  return (
    <section className={styles.wrapper}>
      <ClientToolsPanel
        state={active}
        onChange={setActive}
        sizeMeta={sizeMeta}
        options={options}
        preset={preset}
      />
      <ClientImageSection
        activeIndex={activeIndex}
        state={active}
        thumbnails={thumbnails}
        refNi={ref}
        urlNi={link}
        urlImgproxy={imgproxyLink}
        title={title}
        copyright={copyright}
        preset={preset}
      />
    </section>
  );
}
