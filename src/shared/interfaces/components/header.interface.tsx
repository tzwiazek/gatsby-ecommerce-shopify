export interface HeaderElementInterface {}

export interface NavInterface {
  type: 'left' | 'right';
}
export interface MenuInterface {}
export interface MenuElementInterface {}

export interface MenuLinkInterface {
  to: string;
  category?: any;
  children: any;
  theme: any;
}

export interface MenuCartInterface {
  onClick: () => void;
}

export interface SiteBrandingInterface {}
export interface LogoLinkInterface {
  to: string;
  children: any;
  theme: any;
}
export interface LogoImgInterface {}

export interface MenuIconInterface {
  type: string;
}

export interface CountInterface {
  toggle: 'hidden' | 'is-active';
}
