import { generateImageUrl } from '@imgproxy/imgproxy-node';

const { ENC_KEY, ENC_IV, SIGN_KEY, SIGN_SALT } = process.env;

export default function Image({ src }) {
  let imgproxySrc = generateImageUrl({
    endpoint: 'https://imgproxy.example.com',
    url: {
      value: src,
      displayAs: 'encrypted',
    },
    options: { height: 300, width: 300, format: 'webp' },
    encryptKey: ENC_KEY,
    encryptIV: ENC_IV,
    salt: SIGN_SALT,
    key: SIGN_KEY,
  });
  return <img src={imgproxySrc} width={300} height={300} />;
}
