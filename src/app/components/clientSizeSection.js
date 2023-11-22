import styles from './clientSizeSection.module.css';

export default function ClientSizeSection({ oSize, nSize, iSize }) {
  return (
    <div className={styles.wrapper}>
      <p className={styles.text}>{`Original image size: ${(
        oSize / 1000
      ).toFixed(1)} KB`}</p>
      <p>{`imgproxy image size: ${
        iSize ? `${(iSize / 1000).toFixed(1)} KB` : 'n/a'
      }`}</p>
      <p>{`Next Image size: ${
        nSize ? `${(nSize / 1000).toFixed(1)} KB` : 'n/a'
      }`}</p>
    </div>
  );
}
