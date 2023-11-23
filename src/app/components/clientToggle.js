'use client';
import { useCallback } from 'react';
import styles from './clientToggle.module.css';

export default function ClientToggle({ active, onChange }) {
  const handleChange = useCallback(
    (e) => {
      onChange(e.target.value);
    },
    [onChange]
  );

  return (
    <ul className={styles.toggle}>
      <li className={styles.item} key="on">
        <input
          className={styles.input}
          type="radio"
          name="toggle"
          id="toggle-on"
          value="imgproxy"
          onChange={handleChange}
          checked={active === 'imgproxy'}
        />
        <label className={styles.label} htmlFor="toggle-on">
          imgproxy
        </label>
      </li>
      <li className={styles.item} key="off">
        <input
          className={styles.input}
          type="radio"
          name="toggle"
          id="toggle-off"
          value="nextimage"
          onChange={handleChange}
          checked={active === 'nextimage'}
        />
        <label className={styles.label} htmlFor="toggle-off">
          next/image
        </label>
      </li>
    </ul>
  );
}
