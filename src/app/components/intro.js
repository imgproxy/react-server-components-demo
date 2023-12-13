import Image from 'next/image';
import styles from './intro.module.css';

const REPO_URL = 'https://github.com/imgproxy/react-server-components-demo';

export default async function Intro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <h1 className={styles.mainTitle}>
          Demo for an OSS library to help use imgproxy for images optimization
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
        <p className={styles.intro}>
          This OSS library facilitates faster collaboration with imgproxy, a
          blazing fast and secure image processing tool. The demo shows how easy
          it is.
        </p>
        <h2 className={styles.title}>
          Process images faster and safer: imgproxy
        </h2>
        <p className={styles.intro}>
          imgproxy resizes and processes images on the fly and has OSS and Pro
          versions with priority support and advanced features—a couple of them,
          like Custom watermarks and Gradient, are included in this demo.
        </p>
        <p className={styles.intro}>
          Learn more:{' '}
          <a
            className={styles.link}
            href="https://imgproxy.net"
            rel="noreferrer noopener"
            target="_blank"
          >
            https://imgproxy.net
          </a>
        </p>
        <h2 className={styles.title}>Build image processing easily: library</h2>
        <p className={styles.intro}>
          This library helps create URLs for requests to imgproxy. You no longer
          need to remember all the secret key names: the library automatically
          uses your ENV variables and provides a generated link to the processed
          image as output.
        </p>
        <p className={styles.intro}>
          <a
            className={styles.link}
            href="https://github.com/imgproxy/imgproxy-node"
            rel="noreferrer noopener"
            target="_blank"
          >
            View the source on GitHub
          </a>{' '}
          to build your own image processing pipeline.
        </p>
        <h2 className={styles.title}>
          Watch image processing on the fly: demo
        </h2>
        <p className={styles.intro}>
          In the demo, you can apply features like thumbnail generation and
          watermarks to a selection of images, using React’s next/image and
          imgproxy in parallel.
        </p>
        <p className={styles.intro}>
          In the demo, we highlight just a few imgproxy processing options (the
          tool has{' '}
          <a
            className={styles.link}
            href="https://imgproxy.net/features/"
            rel="noreferrer noopener"
            target="_blank"
          >
            over 60 features
          </a>
          ).
        </p>
        <p className={styles.intro}>
          The demo is built with the help of Next.js and React Server
          Components.
        </p>
        <h2 className={styles.title}>
          Build your library with Evil Martians: customer projects
        </h2>
        <p className={styles.intro}>
          This library is built by the{' '}
          <a
            className={styles.link}
            href="https://evilmartians.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            Evil Martians
          </a>{' '}
          team. Our portfolio includes 100+ popular open source and Open Core
          projects and plugins, libraries and APIs developed and tailored to our
          clients&apos; needs.
        </p>
        <p className={styles.intro}>
          Drop us a line at{' '}
          <a
            className={styles.link}
            href="mailto:surrender@evilmartians.com?subject=I need your help"
            rel="noreferrer noopener"
            target="_blank"
          >
            surrender@evilmartians.com
          </a>{' '}
          if you need our help too.
        </p>
        <p className={styles.resource}>
          Images taken from the{' '}
          <a
            className={styles.link}
            href="https://www.nasa.gov/image-of-the-day/"
            rel="noreferrer noopener"
            target="_blank"
          >
            open source NASA resource
          </a>
          .
        </p>
      </div>
    </section>
  );
}
