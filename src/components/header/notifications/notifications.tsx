import React, { useEffect, useState } from 'react';
import leftArrow from 'assets/img/icons/left-arrow-white.svg';
import rightArrow from 'assets/img/icons/right-arrow-white.svg';
import plus from 'assets/img/icons/plus.svg';
import { isMobile } from 'react-device-detect';
import * as styles from './notifications.module.css';

export default function Notifications(): JSX.Element {
  const [isNotificationActive, setNotificationActive] = useState<boolean>(false);
  const [touchStart, setTouchStart] = useState<number>(0);
  const [touchEnd, setTouchEnd] = useState<number>(0);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  let sliderPictureWidth: number;
  let sliderPictureWidthAll: NodeListOf<Element>;

  useEffect(() => {
    sliderPictureWidthAll = document.querySelectorAll('.notification');
    sliderPictureWidth = (sliderPictureWidthAll[0] as HTMLElement).offsetWidth;
  });

  function toggleNotification(): void {
    setNotificationActive(!isNotificationActive);
  }

  function previous(): void {
    if (sliderPictureWidthAll && currentIndex >= 1) {
      setCurrentIndex(currentIndex - 1);
      (document.querySelector('.swipeWrap') as HTMLElement).style.transform =
        'translateX(' + -(sliderPictureWidth * (currentIndex - 1)) + 'px)';
    }
  }

  function next(): void {
    if (sliderPictureWidthAll && currentIndex < sliderPictureWidthAll.length - 1) {
      setCurrentIndex(currentIndex + 1);
      (document.querySelector('.swipeWrap') as HTMLElement).style.transform =
        'translateX(' + -(sliderPictureWidth * (currentIndex + 1)) + 'px)';
    }
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    setTouchStart(event.targetTouches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(event.targetTouches[0].clientX);
  };

  function handleTouchEnd(): void {
    if (touchStart - touchEnd > 100) {
      next();
    }

    if (touchStart - touchEnd < -100) {
      previous();
    }
  }

  return (
    <div className={styles.headerSwipe}>
      <div
        className={`swipeWrap ${styles.swipeWrap}`}
        onTouchStart={(touchStartEvent: React.TouchEvent<HTMLDivElement>) =>
          handleTouchStart(touchStartEvent)
        }
        onTouchMove={(touchMoveEvent: React.TouchEvent<HTMLDivElement>) =>
          handleTouchMove(touchMoveEvent)
        }
        onTouchEnd={() => handleTouchEnd()}>
        <div
          className={`notification ${styles.notification} ${
            isNotificationActive ? styles.showMore : ''
          }`}>
          {!isNotificationActive ? (
            <span className={styles.text}>Lorem ipsum dolor sit amet 1</span>
          ) : (
            <span className={`${styles.text} ${styles.opened}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt
            </span>
          )}
        </div>
        <div
          className={`notification ${styles.notification} ${
            isNotificationActive ? styles.showMore : ''
          }`}>
          {!isNotificationActive ? (
            <>
              <span className={styles.text}>Lorem ipsum dolor sit amet + link</span>
              <a className={styles.notificationLink} href="#" target="_blank">
                Lorem ipsum dolor
              </a>
            </>
          ) : (
            <>
              <span className={`${styles.text} ${styles.opened}`}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt
              </span>
              <a className={styles.notificationLink} href="#" target="_blank">
                Lorem ipsum dolor
              </a>
            </>
          )}
        </div>
        <div
          className={`notification ${styles.notification} ${
            isNotificationActive ? styles.showMore : ''
          }`}>
          {!isNotificationActive ? (
            <span className={styles.text}>Lorem ipsum dolor sit amet 3</span>
          ) : (
            <span className={`${styles.text} ${styles.opened}`}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt 3
            </span>
          )}
        </div>
      </div>

      {isMobile ? (
        <div className={`${styles.arrow} ${styles.right}`}>
          <img
            className={`${styles.arrowIcon} ${isNotificationActive ? styles.showMore : ''}`}
            src={plus}
            alt="show more notification"
            onClick={() => toggleNotification()}
          />
        </div>
      ) : (
        <>
          <div className={`${styles.arrow} ${styles.left}`} onClick={() => previous()}>
            <img className={styles.arrowIcon} src={leftArrow} alt="left arrow notification" />
          </div>
          <div className={`${styles.arrow} ${styles.right}`} onClick={() => next()}>
            <img className={styles.arrowIcon} src={rightArrow} alt="right arrow notification" />
          </div>
        </>
      )}
    </div>
  );
}
