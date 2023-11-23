import { Suspense } from 'react';
import { toKB } from '@/app/util/common';
import ClientNextImgMeasurer from './clientNextImgMeasurer';

import styles from './sizeMeta.module.css';

async function Measurer({ url, label, method = 'HEAD' }) {
  const resUrl = await fetch(url, { method });
  const bytes = resUrl.headers.get('content-length') || 0;
  return <p>{`${label}: ${toKB(bytes)}`}</p>;
}

async function Wrapper({ url, label, method = 'HEAD' }) {
  return (
    <Suspense fallback={<p>{label}: [calculating...]</p>}>
      <Measurer url={url} label={label} method={method} />
    </Suspense>
  );
}

export default function ClientSizeSection({ url, imgproxyUrl }) {
  return (
    <section className={styles.wrapper}>
      <Wrapper label="Original size" url={url} />
      <Wrapper label="imgproxy size" url={imgproxyUrl} method="GET" />
      <ClientNextImgMeasurer label="next/image size" url={url} />
    </section>
  );
}
