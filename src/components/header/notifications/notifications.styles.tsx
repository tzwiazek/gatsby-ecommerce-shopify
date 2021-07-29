import styled from 'styled-components';
import {
  ArrowIconInterface,
  ArrowInterface,
  HeaderSwipeInterface,
  NotificationInterface,
  NotificationLinkInterface,
  SwipeWrapInterface,
  TextInterface
} from "shared/interfaces/components/notification.interface";
import device from "shared/responsive/Device";

export const HeaderSwipe = styled.div<HeaderSwipeInterface>`
  position:fixed;
  width:100%;
  background:black;
  color:white;
  z-index:99991;
  left:0;
  top:inherit;
  -webkit-transition:0.7s;
  -o-transition:0.7s;
  transition:0.7s;
`;

export const SwipeWrap = styled.div<SwipeWrapInterface>`
  overflow:hidden;
  position:relative;
  z-index:-1;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  width:10000px;
  -webkit-transition:0.7s;
  -o-transition:0.7s;
  transition:0.7s;
`;

export const Notification = styled.div<NotificationInterface>`
  float:left;
  width:100vw;
  position:relative;
  text-align:center;
  line-height:36px;
  height:40px;
  letter-spacing:1px;
  display:flex;
  justify-content:center;
  transition:0.7s;
  flex-wrap:wrap;
  align-items:center;

  ${({ showMore }) => showMore && `
    height:100px;
    transition:0.7s;
  `}
`;

export const Text = styled.span<TextInterface>`
  cursor:context-menu;
  font-size:0.9rem;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  width:auto;
  line-height:1.4;
  justify-content:center;

  width:${({ size }) => size};
`;

export const NotificationLink = styled.a<NotificationLinkInterface>`
  cursor:pointer;
  font-size:0.9rem;
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  line-height:1;
  justify-content:center;
  color:white!important;
  text-decoration:underline;
  margin:0 4px;
  height:20px;

  &:hover {
    color:white;
  }
`;

export const Arrow = styled.div<ArrowInterface>`
  width:40px;
  height:100%;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-pack:center;
      -ms-flex-pack:center;
          justify-content:center;
  -webkit-box-align:center;
      -ms-flex-align:center;
          align-items:center;
  cursor:pointer;
  position:absolute;
  top:0;
  background:#000000;

  ${ ({ type }) => type === 'left' ? `
    left:0;
  ` : `
    right:0;
  `}

  @media screen and ${device.laptop} {
    width:60px;
  }
`;

export const ArrowIcon = styled.img<ArrowIconInterface>`
  width:12px;
  height:12px;

  ${({ showMore }) => showMore && `
    transform:rotate(45deg);
  `}
`;

