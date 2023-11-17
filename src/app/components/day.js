import getImgproxyData from '../getImgproxyData';
import styles from './day.module.css';
import ClientImages from './clientImages';

const { NASA_API_KEY } = process.env;
const getImgUrl = (date) =>
  `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&date=${date}`;

const IMGPROXY_OPTIONS = {
  format_webp: { width: 500, format: 'webp' },
  format_avif: { width: 500, format: 'avif' },
  blur: { width: 500, format: 'webp', blur: 100 },
  watermark: {
    width: 500,
    format: 'avif',
    watermark: { opacity: 0.6, position: 'soea' },
  },
  crop: {
    width: 500,
    format: 'webp',
    crop: { width: 400, gravity: 'sm' },
  },
  sharpen: {
    width: 500,
    format: 'webp',
    sharpen: 2,
  },
  dpr: {
    width: 500,
    format: 'webp',
    dpr: 2,
  },
  background: {
    width: 500,
    format: 'webp',
    background: '1f306e',
  },
};

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

  const imgproxyData = await getImgproxyData(
    data?.hdurl,
    IMGPROXY_OPTIONS.format_webp
  );

  const resUrl = await fetch(data?.hdurl, { method: 'head' });
  const bytes = resUrl.headers.get('content-length');

  return (
    <section className={styles.imgSection}>
      <ClientImages
        link={data?.hdurl}
        copyright={data?.copyright}
        options={IMGPROXY_OPTIONS}
        imgproxySize={imgproxyData.size}
        originalSize={bytes}
      >
        <img src={imgproxyData.url} />
      </ClientImages>
    </section>
  );
}
