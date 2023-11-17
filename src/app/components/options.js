'use client';
import { useState, useCallback } from 'react';
import Link from 'next/link';
import styles from './options.module.css';

export default function Options({ options, preset }) {
  const optionNames = Object.keys(options);

  return (
    <>
      <ul className={styles.list}>
        {optionNames.map((name, i) => (
          <li className={styles.item} key={name}>
            <Link
              className={`${styles.label} ${
                preset === name ? styles.active : ''
              }`}
              href={`?preset=${name}`}
            >
              {name.replace('_', ' ')}
            </Link>
          </li>
        ))}
      </ul>
      <details>
        <summary className={styles.summary}>Show code</summary>
        <pre className={styles.code}>
          <p>{`import { generateImageUrl } from '@imgproxy/imgproxy-node';`}</p>
          <p>{`const { SIGN_KEY, SIGN_SALT, ENDPOINT } = process.env;`}</p>
          <p>{`const imgproxySrc = generateImageUrl({`}</p>
          <p>{`  endpoint: ENDPOINT,`}</p>
          <p>{`  url: {`}</p>
          <p>{`    value: src,`}</p>
          <p>{`    displayAs: 'base64',`}</p>
          <p>{`  },`}</p>
          <p>{`  options: ${JSON.stringify(options[preset])},`}</p>
          <p>{`  salt: SIGN_SALT,`}</p>
          <p>{`  key: SIGN_KEY,`}</p>
          <p>{`});`}</p>
        </pre>
      </details>
    </>
  );
}
