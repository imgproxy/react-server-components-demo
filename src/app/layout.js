import { Inter } from 'next/font/google';
import styles from './layout.module.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Optimize images on the fly with Next.js and imgproxy: demo',
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
          <div className={styles.content}>{children}</div>
        </main>
      </body>
    </html>
  );
}
