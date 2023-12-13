import Image from 'next/image';
import styles from './intro.module.css';

const REPO_URL = 'https://github.com/imgproxy/react-server-components-demo';

export default async function Intro() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.wrapperTitle}>
        <h1 className={styles.mainTitle}>
          Optimize images on the fly with Next.js and imgproxy: demo
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
        <h2 className={styles.title}>
          Demo for an open source library to optimize images easily with
          imgproxy
        </h2>
        <p className={styles.intro}>
          This OSS client library facilitates faster collaboration with
          imgproxy, a blazing fast and secure image processing tool. The demo
          will show how easy it is now.
        </p>
        <h2 className={styles.title}>
          Process images faster and safer: imgproxy
        </h2>
        <p className={styles.intro}>
          imgproxy is a standalone server for blazing fast and secure image
          processing. Built with a focus on developer productivity, imgproxy
          resizes and processes images on the fly while saving storage and SaaS
          costs. The tool is available in the free open source version and a Pro
          version with priority support and advanced features—a couple of them,
          like Custom watermarks and Gradient, are included in this demo.
        </p>
        <p className={styles.intro}>
          Learn more about imgproxy:{' '}
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
          This JavaScript library facilitates integration with imgproxy and
          helps create URLs for requests to imgproxy. You no longer need to
          remember all the parameters and manually write out all the secret key
          names: the library automatically uses your ENV variables and provides
          a generated link to the processed image as output.
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
          to build your own image processing pipeline
        </p>
        <h2 className={styles.title}>
          Watch image processing on the fly: demo
        </h2>
        <p className={styles.intro}>
          The demo showcases a selection of images taken from the open source
          NASA resource. You can apply to them some image processing features
          like thumbnail generation and watermarks using React’s next/image and
          imgproxy in parallel and see what happens in the code underneath.
          imgproxy uses the default options identical to the next/image, so the
          image dimensions remain the same for both image optimization tools.
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
          .)
        </p>
        <p className={styles.intro}>
          The demo is built with the help of Next.js and React Server
          Components.
        </p>
        <h2 className={styles.title}>
          Build your library with Evil Martians: customer projects
        </h2>
        <p className={styles.intro}>
          This library is built and regularly maintained by the{' '}
          <a
            className={styles.link}
            href="https://evilmartians.com"
            rel="noreferrer noopener"
            target="_blank"
          >
            Evil Martians
          </a>{' '}
          team. In total, our portfolio includes our own 100+ popular open
          source and Open Core projects and plugins, libraries and APIs
          developed and tailored specifically for our clients&apos; needs.
        </p>
        <p className={styles.intro}>
          Learn more about{' '}
          <a
            className={styles.link}
            href="https://github.com/imgproxy/imgproxy-rails"
            rel="noreferrer noopener"
            target="_blank"
          >
            the open source library
          </a>{' '}
          to integrate imgproxy to Ruby on Rails projects.
        </p>
        <p className={styles.intro}>
          Drop us a line at{' '}
          <a
            className={styles.link}
            href="mailto:surrender@evilmartians.com?subject=suggestions to improve the library imgproxy-node"
            rel="noreferrer noopener"
            target="_blank"
          >
            surrender@evilmartians.com
          </a>{' '}
          if you have any feedback and suggestions to improve the library, or
          let us know if you need any help with building your own tool to
          integrate with any required framework or coding language.
        </p>
      </div>
    </section>
  );
}
