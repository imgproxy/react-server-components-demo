import { getImgproxyUrl } from '../imgproxyMeta';
import ClientMainContent from './clientMainContent';
import SizeMeta from './sizeMeta';
import { IMGPROXY_OPTIONS, getDays } from '../util/day';

const { NASA_API_KEY } = process.env;

const THUMBNAIL_PRESET = {
  resize: { resizing_type: 'fill', width: 35, height: 35, enlarge: 1 },
};

const getImgUrls = (startDate, endDate) =>
  `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}&start_date=${startDate}&end_date=${endDate}`;

async function fetchUrls() {
  const days = getDays();
  const res = await fetch(getImgUrls(days[days.length - 1], days[0]));
  return res.json();
}

export default async function Day({ value, preset: maybePreset }) {
  const res = await fetchUrls();

  if (res?.error)
    return (
      <section>
        <p>NASA has been banned us :(</p>
        <p>{res.error?.message}</p>
      </section>
    );

  const cutData = res
    .filter((item) => item.hdurl)
    .map((item) => {
      return {
        date: item.date,
        url: item.hdurl,
        title: item.title,
        copyright: item.copyright,
      };
    })
    .reverse();

  const currentDayUrl =
    cutData.find((item) => item.date === value) || cutData[0];
  const preset = maybePreset ? maybePreset : 'format_webp';
  const imgproxyUrl = getImgproxyUrl(
    currentDayUrl.url,
    IMGPROXY_OPTIONS[preset]
  );
  const thumbnails = cutData.map((t) => ({
    url: getImgproxyUrl(t.url, THUMBNAIL_PRESET),
    date: t.date,
    title: t.title,
  }));

  return (
    <ClientMainContent
      activeDay={value}
      link={currentDayUrl.url}
      imgproxyLink={imgproxyUrl}
      title={currentDayUrl.title}
      copyright={currentDayUrl.copyright}
      options={IMGPROXY_OPTIONS}
      preset={preset}
      thumbnails={thumbnails}
      sizeMeta={<SizeMeta url={currentDayUrl.url} imgproxyUrl={imgproxyUrl} />}
    />
  );
}
