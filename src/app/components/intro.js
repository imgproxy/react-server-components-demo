import styles from './intro.module.css';

export default async function Intro({ activeDay }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.textWrapper}>
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
          <strong>The demo demonstrates</strong> how both React Server
          Components and imgproxy can collaborate to{' '}
          <strong>process images on the fly</strong>, such as generating
          thumbnails and applying watermarks. The demo showcases a selection of
          images that undergo processing using both next/image and imgproxy.{' '}
          <strong>The image dimensions remain the same</strong> for both image
          optimization tools, imgproxy uses the default options identical to
          next/image.
        </p>
        <p className={styles.intro}>
          In the demo, the imgproxy section only highlights a small fraction of
          the available options with imgproxy. With imgproxy pro you can also
          keep original image URLs secret by encoding it. You can see all
          options in the{' '}
          <a
            className={styles.link}
            href="https://docs.imgproxy.net/usage/processing"
          >
            imgproxy docs
          </a>
          . We welcome any feedback and suggestions you may have.
        </p>
      </div>
    </div>
  );
}
