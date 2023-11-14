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
      <Img src={data.hdurl} />
      <p>{data?.explanation}</p>
      {data?.copyright && (
        <>
          <p>Copyright</p>
          <p>{data?.copyright}</p>
        </>
      )}
    </section>
  );
}
