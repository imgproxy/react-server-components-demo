import Image from 'next/image';
import styles from './intro.module.css';

const REPO_URL = 'https://github.com/imgproxy/react-server-components-demo';

export default async function Intro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <h1 className={styles.mainTitle}>
          React Server Components imgproxy demo
        </h1>
        <a
          className={styles.source}
          href={REPO_URL}
          rel="noreferrer noopener"
          target="_blank"
        >
          <Image
            src="/githubLogo.svg"
            width={35}
            height={35}
            alt="view source on github"
          />
        </a>
      </div>
      <div className={styles.textWrapper}>
        <h2 className={styles.title}>TLDR;</h2>
        <p className={styles.intro}>
          The demo showcases how <strong>imgproxy</strong> can help to process
          images on the fly using 60+ build in options in comparison to{' '}
          <strong>next/image</strong>.
        </p>
        <p className={styles.intro}>
          You can find{' '}
          <a target="_blank" rel="noreferrer noopener" href={REPO_URL}>
            the source code
          </a>{' '}
          on GitHub and try it on your own.
        </p>
        <h2 className={styles.title}>What is imgproxy?</h2>
        <p className={styles.intro}>
          Image processing plays a crucial role in web development, particularly
          in optimizing images for improved performance and user experience.{' '}
          <strong>
            imgproxy is a standalone server that is fast and secure, designed
            specifically for resizing and converting remote images
          </strong>
          . The core principles of imgproxy are simplicity, speed, and security.
        </p>
        <h2 className={styles.title}>What the demo?</h2>
        <p className={styles.intro}>
          The demo demonstrates how both React Server Components and imgproxy
          can collaborate to <strong>process images on the fly</strong>, such as
          generating thumbnails and applying watermarks. The demo showcases a
          selection of images that undergo processing using both next/image and
          imgproxy. <strong>The image dimensions remain the same</strong> for
          both image optimization tools, imgproxy uses the default options
          identical to next/image.
        </p>
        <p className={styles.intro}>
          In the demo, the imgproxy section only highlights a small fraction of
          the available options with imgproxy. With imgproxy pro you can also
          keep original image URLs secret by encoding it. You can see all
          options in the{' '}
          <a
            className={styles.link}
            href="https://docs.imgproxy.net/usage/processing"
            rel="noreferrer noopener"
            target="_blank"
          >
            imgproxy docs
          </a>
          . We welcome any feedback and suggestions you may have.
        </p>
      </div>
    </section>
  );
}
