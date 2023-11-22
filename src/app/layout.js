import { Inter } from 'next/font/google';
import styles from './layout.module.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'React Server Components imgproxy demo',
  description: 'React Server Components imgproxy demo',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className={styles.main}>
          <section>
            <div className={styles.wrapper}>
              <h1 className={styles.title}>
                React Server Components imgproxy demo
              </h1>
              <a
                className={styles.link}
                href="https://github.com/imgproxy/react-server-components-demo"
                rel="noreferrer noopener"
                target="_blank"
              >
                view source on github
              </a>
            </div>
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
