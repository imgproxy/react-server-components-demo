import { generateImageUrl } from '@imgproxy/imgproxy-node';

const { ENC_KEY, SIGN_KEY, SIGN_SALT, ENDPOINT } = process.env;

export default async function getImgproxyData(src, presetMeta) {
  const imgproxySrc = generateImageUrl({
    endpoint: ENDPOINT,
    url: {
      value: src,
      displayAs: 'base64',
    },
    options: presetMeta,
    encryptKey: ENC_KEY,
    salt: SIGN_SALT,
    key: SIGN_KEY,
  });
  const res = await fetch(imgproxySrc);
  const bytes = res.headers.get('content-length');

  return {
    url: imgproxySrc,
    size: bytes,
  };
}
