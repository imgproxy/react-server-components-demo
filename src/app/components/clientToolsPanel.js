'use client';
import { useCallback, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import ClientToggle from './clientToggle';
import Options from './options';
import styles from './clientToolsPanel.module.css';

export default function ClientToolsPanel({
  state,
  onChange,
  options,
  preset,
  sizeMeta,
}) {
  const [opened, setOpened] = useState(false);

  const handlers = useSwipeable({
    onSwipedUp: () => setOpened(true),
    onSwipedDown: () => setOpened(false),
    delta: 5,
    preventScrollOnSwipe: true,
  });

  const handleClick = useCallback(() => {
    setOpened((v) => !v);
  }, []);

  return (
    <section
      className={`${styles.textWrapper} ${
        opened ? styles.textWrapperOpened : ''
      }`}
    >
      <span {...handlers} className={styles.swipe} />
      <button className={styles.button} onClick={handleClick} />
      <ClientToggle active={state} onChange={onChange} />
      {sizeMeta}
      {state === 'imgproxy' && (
        <>
          <p className={styles.text}>Try different sets of imgproxy options:</p>
          <Options options={options} preset={preset} />
        </>
      )}
      {state === 'nextimage' && (
        <>
          <p className={styles.text}>
            next/image has only a few parameters for image processing:
          </p>
          <p className={styles.text}>
            <span className={styles.code}>width</span>,{' '}
            <span className={styles.code}>height</span>,{' '}
            <span className={styles.code}>sizes</span> and{' '}
            <span className={styles.code}>quality</span>.
          </p>
        </>
      )}
    </section>
  );
}
