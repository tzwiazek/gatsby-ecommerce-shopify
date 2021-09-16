export interface NavInterface {
  active: boolean;
  scroll: boolean;
}
export interface MenuInterface {}
export interface MenuElementInterface {}
export interface MenuElementLinkInterface {
  to: string;
  children: any;
  onClick: () => void;
}
export interface MenuBottomWrapperInterface {}
export interface MenuBottomContainerInterface {}
export interface MenuBottomLinkInterface {}
export interface TextInterface {}
export interface FavoriteInterface {}
