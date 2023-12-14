import Image from 'next/image';
import styles from './intro.module.css';
import { REPO_URL } from '../util/common';

export default async function Intro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <h1 className={styles.mainTitle}>
          imgproxy-node demo: a helper library for more easily constructing
          imgproxy URLs
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
          This is a demo of imgproxy-node. It’s an OSS library that makes it
          even easier to work with imgproxy, a blazing fast and secure image
          processing tool.
        </p>
        <h2 className={styles.title}>
          Process images faster and safer: imgproxy
        </h2>
        <p className={styles.intro}>
          imgproxy resizes and processes images on the fly. It comes as an OSS
          or as a Pro version with priority support and advanced features; a
          couple of these features, like Custom watermarks and Gradient, are
          included in this demo.
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
        <h2 className={styles.title}>
          Image processing with imgproxy made easy: imgproxy-node
        </h2>
        <p className={styles.intro}>
          This library helps create URLs for imgproxy requests. You no longer
          need to remember all the secret key names: imgproxy-node will
          automatically use your ENV variables and provide a generated link to
          the processed image as output.
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
          In this demo, you can apply features like thumbnail generation and
          watermarks to a selection of images, using the{' '}
          <a
            className={styles.link}
            href="https://nextjs.org/docs/pages/api-reference/components/image"
            rel="noreferrer noopener"
            target="_blank"
          >
            image component from Next.js
          </a>{' '}
          and imgproxy in parallel.
        </p>
        <p className={styles.intro}>
          In the demo, we highlight just a few imgproxy processing options (it
          has{' '}
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
          The demo was built with Next.js and React Server Components.
        </p>
        <h2 className={styles.title}>
          Build your library with Evil Martians: customer projects
        </h2>
        <p className={styles.intro}>
          This library was built by the{' '}
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
          client needs.
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
          if you’re also in need of our help!
        </p>
        <p className={styles.resource}>
          Images taken from{' '}
          <a
            className={styles.link}
            href="https://www.nasa.gov/image-of-the-day/"
            rel="noreferrer noopener"
            target="_blank"
          >
            open source NASA resources
          </a>
          .
        </p>
      </div>
    </section>
  );
}
