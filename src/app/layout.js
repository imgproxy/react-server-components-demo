import { Inter } from 'next/font/google';
import Image from 'next/image';
import { REPO_URL } from './util/common';
import styles from './layout.module.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title:
    'imgproxy-node demo: a helper library for more easily constructing imgproxy URLs',
  description: 'Optimize images on the fly with Next.js and imgproxy',
};

export const viewport = {
  viewportFit: 'cover',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <a
            className={styles.source}
            href={REPO_URL}
            rel="noreferrer noopener"
            target="_blank"
          >
            <Image
              width={100}
              height={100}
              src="/forkme.png"
              alt="Fork me on GitHub"
            />
          </a>
          <div className={styles.content}>{children}</div>
        </main>
      </body>
    </html>
  );
}
