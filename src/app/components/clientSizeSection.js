import styles from './clientSizeSection.module.css';

export default function ClientSizeSection({ oSize, nSize, iSize }) {
  return (
    <div className={styles.wrapper}>
      <p>{`Original image size: ${(oSize / 1000).toFixed(1)} KB`}</p>
      <p>{`Imgproxy image size: ${
        iSize ? `${(iSize / 1000).toFixed(1)} KB` : 'n/a'
      }`}</p>
      <p>{`Next Image size: ${
        nSize ? `${(nSize / 1000).toFixed(1)} KB` : 'n/a'
      }`}</p>
    </div>
  );
}
