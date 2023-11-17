import Intro from '@/app/components/intro';
import styles from './page.module.css';

export default async function Page() {
  return (
    <>
      <Intro />
      <p className={styles.noDay}>
        To see the content you need to select a date
      </p>
    </>
  );
}
