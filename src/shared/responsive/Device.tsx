import { DeviceSizeInterface } from "../interfaces/deviceSize.interface";
import { DeviceSize } from "../enums/deviceSize.enum";

const device: DeviceSizeInterface = {
  mobileS: `(min-width: ${DeviceSize.mobileS})`,
  mobileM: `(min-width: ${DeviceSize.mobileM})`,
  mobileL: `(min-width: ${DeviceSize.mobileL})`,
  tablet: `(min-width: ${DeviceSize.tablet})`,
  laptop: `(min-width: ${DeviceSize.laptop})`,
  laptopL: `(min-width: ${DeviceSize.laptopL})`,
  desktop: `(min-width: ${DeviceSize.desktop})`,
  desktopL: `(min-width: ${DeviceSize.desktop})`,
};

export default device;
