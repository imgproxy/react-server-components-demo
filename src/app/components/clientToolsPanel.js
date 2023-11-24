'use client';
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
  return (
    <section className={styles.textWrapper}>
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
