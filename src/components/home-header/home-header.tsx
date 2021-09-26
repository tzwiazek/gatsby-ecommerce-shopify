import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as styles from './home-header.module.css';
import { isMobile } from 'react-device-detect';
import { Link } from 'gatsby';

export default function HomeHeader(): JSX.Element {
  return (
    <div className={styles.headerWrapper}>
      <picture className={styles.pictureContainer}>
        {isMobile ? (
          <StaticImage
            src="../../assets/img/home-header-640x730.webp"
            formats={['auto', 'webp', 'avif']}
            quality={90}
            alt="home header image"
          />
        ) : (
          <StaticImage
            src="../../assets/img/home-header-2800x900.webp"
            formats={['auto', 'webp', 'avif']}
            quality={90}
            alt="home header image"
          />
        )}
      </picture>

      <div className={styles.headerContainer}>
        <div className={`${styles.headerBox} ${styles.typeSecond} ${styles.hidden}`} />
        <div className={`${styles.headerBox} ${styles.typeSecond} ${styles.hidden}`} />
        <div className={`${styles.headerBox} ${styles.typeOne}`}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>Lorem ipsum</h1>
            <p className={styles.text}>Lorem impsum dolor sit amet</p>
            <div className={styles.button}>
              <Link className={styles.buttonLink} to="#">
                shop now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
