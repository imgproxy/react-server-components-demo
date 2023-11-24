import { useRef, useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './clientImageSection.module.css';

const imgDimensions = {};

const getCopyright = (copyright) => {
  if (copyright) {
    return <p className={styles.copyrigth}>Copyright {copyright}</p>;
  }
  return null;
};

export default function ClientImageSection({
  state,
  thumbnails,
  urlNi,
  refNi,
  urlImgproxy,
  title,
  copyright,
  activeDay,
  preset,
}) {
  const ref = useRef();
  const [dims, setDims] = useState(imgDimensions);
  const [loading, setLoading] = useState(true);

  const onImageReady = useCallback(
    (imgElem) => {
      const { clientWidth, clientHeight } = imgElem;

      imgDimensions[urlNi] = {
        width: clientWidth,
        height: clientHeight,
      };
      setDims({ ...imgDimensions });
      setLoading(false);
    },
    [urlNi]
  );

  useEffect(() => {
    if (ref.current?.complete) {
      onImageReady(ref.current);
    }
  }, [onImageReady]);

  const handleLoad = useCallback((e) => onImageReady(e.target), [onImageReady]);

  const handleLoadNi = useCallback(() => setLoading(false), []);

  const wrapperStyle = {};
  if (dims[urlNi]) {
    wrapperStyle.minHeight = dims[urlNi].height;
  }

  return (
    <section className={styles.imgSection}>
      <ul className={styles.list}>
        {thumbnails.map((t) => (
          <li key={t.date}>
            <Link
              className={`${styles.link} ${
                t.date === activeDay ? styles.linkActive : ''
              }`}
              href={`/day/${t.date}?preset=${preset}`}
            >
              <img className={styles.linkImg} src={t.url} alt={t.title} />
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.imageWrapper} style={wrapperStyle}>
        <div
          className={`${styles.loader} ${!loading ? styles.loaderHidden : ''}`}
        >
          <Image src="/spinner.svg" width={35} height={35} alt="loading..." />
        </div>
        {state === 'imgproxy' && (
          <img ref={ref} src={urlImgproxy} alt={title} onLoad={handleLoad} />
        )}
        {state === 'nextimage' && (
          <Image
            src={urlNi}
            ref={refNi}
            alt={title}
            layout="fill"
            objectFit="contain"
            onLoad={handleLoadNi}
          />
        )}
        {getCopyright(copyright)}
      </div>
    </section>
  );
}
