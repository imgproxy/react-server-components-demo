import { Inter } from 'next/font/google';
import styles from './layout.module.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Imgproxy on RSC + Next Image',
  description: 'Demo of Imgproxy on RSC + Next Image',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <section>
            <h1 className={styles.title}>Next.js + Imgproxy</h1>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
