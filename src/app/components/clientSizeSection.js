import styles from './clientSizeSection.module.css';

export default function ClientSizeSection({ oSize, nSize, iSize }) {
  return (
    <section className={styles.wrapper}>
      <p className={styles.text}>{`Original image size: ${(
        oSize / 1000
      ).toFixed(1)} KB`}</p>
      <p>{`imgproxy image size: ${
        iSize ? `${(iSize / 1000).toFixed(1)} KB` : 'n/a'
      }`}</p>
      <p>{`next/image size: ${
        nSize ? `${(nSize / 1000).toFixed(1)} KB` : 'n/a'
      }`}</p>
    </section>
  );
}
