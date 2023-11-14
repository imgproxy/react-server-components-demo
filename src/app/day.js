import Img from './image';
import styles from './day.module.css';

const { NASA_API_KEY } = process.env;
const getImgUrl = (date) =>
  `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`;

export default async function Day({ value }) {
  const res = await fetch(getImgUrl(value));
  const data = await res.json();

  if (data?.error)
    return (
      <section>
        <p>NASA has been banned us :(</p>
        <p>{data.error?.message}</p>
      </section>
    );

  return (
    <section className={styles.imgSection}>
      <p className={styles.description}>{data?.explanation}</p>
      <div className={styles.wrapper}>
        <div className={styles.originalImage}>
          <img src={data.hdurl} />
          <p>Original image</p>
        </div>
        <div className={styles.processedImages}>
          <div>
            <Img src={data.hdurl} />
            <p>Imgproxy</p>
          </div>
          <div>
            <Img src={data.hdurl} />
            <p>NextImage</p>
          </div>
        </div>
      </div>
      {data?.copyright && (
        <p className={styles.copyrigth}>Copyright {data?.copyright}</p>
      )}
    </section>
  );
}
