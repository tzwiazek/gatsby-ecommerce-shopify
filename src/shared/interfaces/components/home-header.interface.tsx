export interface HeaderWrapperInterface {};
export interface PictureContainerInterface {};
export interface HeaderContainerInterface {};
export interface HeaderBoxInterface {
  type: number;
  hidden?: boolean;
};
export interface TitleContainerInterface {
  type?: number;
};
export interface TitleInterface {};
export interface TextInterface {};
export interface ButtonInterface {};
export interface ButtonLinkInterface {
  to:string;
  children:any;
  theme:any;
};