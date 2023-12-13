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
  const handleClick = useCallback(() => setOpened((v) => !v), []);
  const handlers = useSwipeable({
    onTap: opened ? undefined : handleClick,
    onSwipedUp: () => setOpened(true),
    onSwipedDown: () => setOpened(false),
    delta: 5,
    preventScrollOnSwipe: true,
  });

  return (
    <section
      className={`${styles.textWrapper} ${
        opened ? styles.textWrapperOpened : ''
      }`}
    >
      <span
        {...handlers}
        className={`${styles.swipe} ${opened ? '' : styles.swipeClosed}`}
      />
      <button className={styles.button} onClick={handleClick} />
      <ClientToggle active={state} onChange={onChange} />
      {sizeMeta}
      {state === 'imgproxy' && (
        <>
          <p className={styles.text}>Apply one of the imgproxy features:</p>
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
