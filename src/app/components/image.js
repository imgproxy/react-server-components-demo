import { generateImageUrl } from '@imgproxy/imgproxy-node';

const { ENC_KEY, ENC_IV, SIGN_KEY, SIGN_SALT, ENDPOINT } = process.env;

export default function Image({ src }) {
  const imgproxySrc = generateImageUrl({
    endpoint: ENDPOINT,
    url: {
      value: src,
      displayAs: 'base64',
    },
    options: { width: 500, format: 'webp' },
    encryptKey: ENC_KEY,
    encryptIV: ENC_IV,
    salt: SIGN_SALT,
    key: SIGN_KEY,
  });
  return <img src={imgproxySrc} />;
}
