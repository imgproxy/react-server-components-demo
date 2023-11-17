import styles from './clientSizeSection.module.css';

export default function ClientSizeSection({ oSize, nSize, iSize }) {
  return (
    <div className={styles.wrapper}>
      <p>{`Original image size: ${(oSize / 1000).toFixed(1)} kB`}</p>
      {iSize && <p>{`Imgproxy image size: ${(iSize / 1000).toFixed(1)} kB`}</p>}
      {nSize && <p>{`Next Image size: ${(nSize / 1000).toFixed(1)} kB`}</p>}
    </div>
  );
}
