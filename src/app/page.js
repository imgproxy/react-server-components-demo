import Link from 'next/link';
import styles from './page.module.css';
import Day from './day';

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

  for (let i = 0; i < days.length; i++) {
    dayLinks.push(
      <li>
        <Link href={`/?day=${days[i]}`}>{days[i]}</Link>
      </li>
    );
  }

  return (
    <main className={styles.main}>
      <ul>{dayLinks}</ul>
      {searchParams.day ? (
        <Day value={searchParams.day} />
      ) : (
        <p>Select a date</p>
      )}
    </main>
  );
}
