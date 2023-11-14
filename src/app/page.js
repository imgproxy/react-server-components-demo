import Link from 'next/link';
import Day from './day';
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
      <li>
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
        <ul className={styles.list}>{dayLinks}</ul>
      </aside>
      {activeDay ? <Day value={activeDay} /> : <p>Select a date</p>}
    </main>
  );
}
