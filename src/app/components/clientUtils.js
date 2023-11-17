'use client';
import { useEffect, useState } from 'react';

let registered = 0;

const reloadIfFirstTimeHere = () => {
  if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'yes');
    location.reload();
  }
};

export function useSizes() {
  const [sw_active, set_swa] = useState(false);
  const [sizes, set_sizes] = useState({});
  useEffect(() => {
    if ('serviceWorker' in navigator && !registered++) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        reloadIfFirstTimeHere();
        set_swa(true);
      });
      navigator.serviceWorker.addEventListener('message', (event) => {
        set_sizes((v) => ({
          ...v,
          [event.data.url]: event.data.bytes,
        }));
      });
    }
  }, []);
  return { ready: sw_active, sizes };
}
