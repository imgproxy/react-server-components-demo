'use client';
import ClientSizeSection from './clientSizeSection';
import ClientToggle from './clientToggle';
import Options from './options';
import styles from './clientToolsPanel.module.css';

export default function ClientToolsPanel({
  state,
  onChange,
  size,
  options,
  preset,
}) {
  return (
    <section className={styles.textWrapper}>
      <ClientToggle active={state} onChange={onChange} />
      <ClientSizeSection
        oSize={size.original}
        iSize={size.imgproxy}
        nSize={size.ni}
      />
      {state === 'imgproxy' && (
        <>
          <p>Try different sets of imgproxy options:</p>
          <Options options={options} preset={preset} />
        </>
      )}
      {state === 'nextimage' && (
        <>
          <p>Next image has only a few parameters for image processing:</p>
          <p>
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
