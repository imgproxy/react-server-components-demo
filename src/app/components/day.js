import Link from 'next/link';
import { getImgproxyData, getImgproxyUrl } from '../imgproxyMeta';
import styles from './day.module.css';
import ClientImages from './clientImages';
import { IMGPROXY_OPTIONS, getDays } from './dayUtils';

const { NASA_API_KEY } = process.env;

const getImgData = (startDate, endDate) =>
  `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}`;

export default async function Day({ value, preset }) {
  const dayLinks = [];
  const days = getDays();
  const resDaysImg = await fetch(getImgData(days[days.length - 1], days[0]));
  const dataDaysImg = await resDaysImg.json();
  const checkedPreset = preset ? preset : 'format_webp';

  if (dataDaysImg?.error)
    return (
      <section>
        <p>NASA has been banned us :(</p>
        <p>{data.error?.message}</p>
      </section>
    );

  const cutData = dataDaysImg
    .map((item) => {
      return {
        date: item.date,
        url: item.hdurl,
        title: item.title,
        copyright: item.copyright,
      };
    })
    .reverse();

  const currentDayUrl = cutData.find((item) => item.date === value);

  const imgproxyData = await getImgproxyData(
    currentDayUrl.url,
    IMGPROXY_OPTIONS[checkedPreset]
  );

  for (let i = 0; i < cutData.length; i++) {
    const imgproxyUrl = getImgproxyUrl(cutData[i].url, {
      resize: { resizing_type: 'fill', width: 35, height: 35, enlarge: 1 },
    });

    dayLinks.push(
      <li key={cutData[i].date}>
        <Link
          className={`${styles.link} ${
            cutData[i].date === value ? styles.linkActive : ''
          }`}
          href={`/day/${cutData[i].date}?preset=format_webp`}
        >
          <img src={imgproxyUrl} alt={cutData[i].title} />
        </Link>
      </li>
    );
  }

  const resUrl = await fetch(currentDayUrl.url, { method: 'head' });
  const bytes = resUrl.headers.get('content-length');

  return (
    <section className={styles.imgSection}>
      <ClientImages
        link={currentDayUrl.url}
        copyright={currentDayUrl.copyright}
        options={IMGPROXY_OPTIONS}
        imgproxySize={imgproxyData.size}
        originalSize={bytes}
        preset={checkedPreset}
        links={dayLinks}
      >
        <img src={imgproxyData.url} alt={currentDayUrl.title} />
      </ClientImages>
    </section>
  );
}
