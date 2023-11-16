'use client';
import { useCallback } from 'react';
import styles from './clientToggle.module.css';

export default function ClientToggle({ active, onChange }) {
  const useChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <ul className={styles.toggle}>
      <li key="on">
        <input
          className={styles.input}
          type="radio"
          name="toggle"
          id="toggle-on"
          value="imgproxy"
          onChange={useChange}
          checked={active === 'imgproxy'}
        />
        <label className={styles.label} htmlFor="toggle-on">
          Imgproxy
        </label>
      </li>
      <li key="off">
        <input
          className={styles.input}
          type="radio"
          name="toggle"
          id="toggle-off"
          value="nextimage"
          onChange={useChange}
          checked={active === 'nextimage'}
        />
        <label className={styles.label} htmlFor="toggle-off">
          NextImage
        </label>
      </li>
    </ul>
  );
}
