import Link from 'next/link';
import Day from './components/day';
import styles from './page.module.css';

const getDays = () => {
  return [
    '2023-11-13',
    '2023-11-12',
    '2023-11-11',
    '2023-11-10',
    '2023-11-09',
    '2023-11-08',
  ];
};

export default async function Home({ searchParams }) {
  const dayLinks = [];
  const days = getDays();
  const activeDay = searchParams.day;

  for (let i = 0; i < days.length; i++) {
    dayLinks.push(
      <li key={days[i]}>
        <Link
          className={`${styles.link} ${
            days[i] === activeDay ? styles.linkActive : ''
          }`}
          href={`/?day=${days[i]}`}
        >
          {days[i]}
        </Link>
      </li>
    );
  }

  return (
    <main className={styles.main}>
      <aside className={styles.menu}>
        <h2>Pick a date</h2>
        <ul className={styles.list}>{dayLinks}</ul>
      </aside>
      <section>
        <h1 className={styles.title}>Next.js + Imgproxy</h1>
        <p className={styles.intro}>
          Image processing is an essential part of web development, especially
          when it comes to optimizing images for better performance and user
          experience.
        </p>
        <p className={styles.intro}>
          Imgproxy is a fast and secure standalone server for resizing and
          converting remote images. The main principles of imgproxy are
          simplicity, speed, and security.
        </p>
        <p className={styles.intro}>
          Imgproxy offers a wide range of advanced image manipulation features,
          making it a versatile tool for developers. It supports resizing,
          cropping, rotating, watermarking, and many other operations on the
          fly. These features provide developers with the flexibility to
          dynamically modify images based on specific requirements, without the
          need for manual image editing. While NextImage also offers some image
          manipulation capabilities, it may not be as comprehensive as Imgproxy,
          limiting the creative possibilities for developers.
        </p>
        <p className={styles.intro}>
          This example shows how to use imgproxy with RSC (React Server
          Component) and Next Image component.
        </p>
        {activeDay ? <Day value={activeDay} /> : <p>Select a date</p>}
      </section>
    </main>
  );
}
