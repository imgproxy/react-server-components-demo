'use client';
import { useState, useCallback } from 'react';
import styles from './options.module.css';

export default function Options({ options }) {
  const [active, setActive] = useState('format_webp');
  const optionNames = Object.keys(options);

  const useChange = useCallback(
    (e) => {
      setActive(e.target.value);
    },
    [setActive]
  );

  return (
    <>
      <ul className={styles.list}>
        {optionNames.map((name, i) => (
          <li className={styles.item} key={name}>
            <input
              className={styles.input}
              type="radio"
              name="options"
              id={name}
              value={name}
              onChange={useChange}
              checked={active === name}
            />
            <label className={styles.label} htmlFor={name}>
              {name.replace('_', ' ')}
            </label>
          </li>
        ))}
      </ul>
      <details>
        <summary className={styles.summary}>Show code</summary>
        <pre className={styles.code}>
          <p>{`import { generateImageUrl } from '@imgproxy/imgproxy-node';`}</p>
          <p>{`const { ENC_KEY, ENC_IV, SIGN_KEY, SIGN_SALT, ENDPOINT } = process.env;`}</p>
          <p>{`const imgproxySrc = generateImageUrl({`}</p>
          <p>{`  endpoint: ENDPOINT,`}</p>
          <p>{`  url: {`}</p>
          <p>{`    value: src,`}</p>
          <p>{`    displayAs: 'base64',`}</p>
          <p>{`  },`}</p>
          <p>{`  options: ${JSON.stringify(options[active])},`}</p>
          <p>{`  encryptKey: ENC_KEY,`}</p>
          <p>{`  encryptIV: ENC_IV,`}</p>
          <p>{`  salt: SIGN_SALT,`}</p>
          <p>{`  key: SIGN_KEY,`}</p>
          <p>{`});`}</p>
        </pre>
      </details>
    </>
  );
}
