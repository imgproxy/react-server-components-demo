import { getImgproxyUrl } from '../imgproxyMeta';
import ClientMainContent from './clientMainContent';
import SizeMeta from './sizeMeta';
import { IMGPROXY_OPTIONS } from '../util/day';
import data from '../../../data.json';

const THUMBNAIL_PRESET = {
  resize: { resizing_type: 'fill', width: 35, height: 35, enlarge: 1 },
};

const val2index = (val) => {
  const int = parseInt(val, 10) - 1;
  return Math.max(0, Math.min(int, data.length - 1));
};

export default async function Day({ value, preset: maybePreset }) {
  const index = val2index(value);
  const currentMeta = data[index];
  const preset = maybePreset ? maybePreset : 'format_webp';
  const imgproxyUrl = getImgproxyUrl(currentMeta.url, IMGPROXY_OPTIONS[preset]);

  const thumbnails = data.map((t, i) => ({
    index: i,
    url: getImgproxyUrl(t.url, THUMBNAIL_PRESET),
    title: t.title,
  }));

  return (
    <ClientMainContent
      thumbnails={thumbnails}
      activeIndex={index}
      link={currentMeta.url}
      imgproxyLink={imgproxyUrl}
      title={currentMeta.title}
      copyright={currentMeta.copyright}
      options={IMGPROXY_OPTIONS}
      preset={preset}
      sizeMeta={<SizeMeta url={currentMeta.url} imgproxyUrl={imgproxyUrl} />}
    />
  );
}
