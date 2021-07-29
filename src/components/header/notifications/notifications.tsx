import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import leftArrow from 'assets/img/icons/left-arrow-white.svg';
import rightArrow from 'assets/img/icons/right-arrow-white.svg';
import plus from 'assets/img/icons/plus.svg';
import { isMobile } from "react-device-detect";
import { HeaderSwipe, SwipeWrap, Notification, Text, NotificationLink, Arrow, ArrowIcon } from "./notifications.styles";

export default function Notifications(): JSX.Element {
  const [isNotificationActive, setNotificationActive]: [boolean, Dispatch<SetStateAction<boolean>>] = useState(false);
  const [touchStart, setTouchStart]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);
  const [touchEnd, setTouchEnd]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);
  const [currentIndex, setCurrentIndex]: [number, React.Dispatch<React.SetStateAction<number>>] = useState(0);
  let sliderPictureWidth: number;
  let sliderPictureWidthAll: NodeListOf<Element>;

  useEffect(() => {
    sliderPictureWidthAll = document.querySelectorAll(Notification);
    sliderPictureWidth = (sliderPictureWidthAll[0] as HTMLElement).offsetWidth;
  });

  function toggleNotification(): void {
    setNotificationActive(!isNotificationActive);
  }

  function previous(): void {
    if (currentIndex >= 1) {
      setCurrentIndex(currentIndex - 1);
      (document.querySelector(SwipeWrap) as HTMLElement).style.transform = "translateX(" + -(sliderPictureWidth * (currentIndex - 1)) + "px)";
    }
  }

  function next(): void {
    if (currentIndex < sliderPictureWidthAll.length - 1) {
      setCurrentIndex(currentIndex + 1);
      (document.querySelector(SwipeWrap) as HTMLElement).style.transform = "translateX(" + -(sliderPictureWidth * (currentIndex + 1)) + "px)";
    }
  }

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>): void => {
    setTouchStart(event.targetTouches[0].clientX);
  }

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>): void => {
    setTouchEnd(event.targetTouches[0].clientX);
  }

  function handleTouchEnd(): void {
    if (touchStart - touchEnd > 100) {
      next();
    }

    if (touchStart - touchEnd < -100) {
      previous();
    }
  }

  return (
    <HeaderSwipe>
      <SwipeWrap
        onTouchStart={(touchStartEvent: React.TouchEvent<HTMLDivElement>) => handleTouchStart(touchStartEvent)}
        onTouchMove={(touchMoveEvent: React.TouchEvent<HTMLDivElement>) => handleTouchMove(touchMoveEvent)}
        onTouchEnd={() => handleTouchEnd()}
      >
        <Notification showMore={isNotificationActive}>
          {!isNotificationActive ? (
            <Text>Lorem ipsum dolor sit amet 1</Text>
          ) : (
            <Text size="80vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
          )}
        </Notification>
        <Notification showMore={isNotificationActive}>
        {!isNotificationActive ? (
          <>
            <Text>Lorem ipsum dolor sit amet + link</Text>
            <NotificationLink href="#" target="_blank">
              Lorem ipsum dolor
            </NotificationLink>
          </>
          ) : (
            <>
              <Text size="80vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</Text>
              <NotificationLink href="#" target="_blank">
                Lorem ipsum dolor
              </NotificationLink>
            </>
          )}
        </Notification>
        <Notification showMore={isNotificationActive}>
          {!isNotificationActive ? (
            <Text>Lorem ipsum dolor sit amet 3</Text>
          ) : (
            <Text size="80vw">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 3</Text>
          )}
        </Notification>
      </SwipeWrap>

      {isMobile ? (
        <Arrow type="right" >
          <ArrowIcon src={plus} alt="show more notification" onClick={() => toggleNotification()} showMore={isNotificationActive} />
        </Arrow>
      ) : (
        <>
          <Arrow type="left" onClick={() => previous()}>
            <ArrowIcon src={leftArrow} alt="left arrow notification" />
          </Arrow>
          <Arrow type="right" onClick={() => next()}>
            <ArrowIcon src={rightArrow} alt="right arrow notification" />
          </Arrow>
        </>
      )}
    </HeaderSwipe>
  )
}

