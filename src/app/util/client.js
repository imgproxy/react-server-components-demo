'use client';

import { useEffect, useState } from 'react';

const saved = {};

const reloadIfFirstTimeHere = () => {
  if (!localStorage.getItem('visited')) {
    localStorage.setItem('visited', 'yes');
    location.reload();
  }
};

export function useSizes() {
  const [sw_active, set_swa] = useState(false);
  const [sizes, set_sizes] = useState(saved);
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js').then(() => {
        reloadIfFirstTimeHere();
        set_swa(true);
      });
      navigator.serviceWorker.addEventListener('message', (event) => {
        set_sizes((v) => {
          const new_sizes = {
            ...v,
            [event.data.url]: event.data.bytes,
          };
          Object.assign(saved, new_sizes);
          return new_sizes;
        });
      });
    }
  }, []);
  return { ready: sw_active, sizes };
}
