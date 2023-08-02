import {
  BorderOutlined,
  FormOutlined,
  PlaySquareOutlined,
  SettingOutlined,
  ShopOutlined,
} from '@ant-design/icons';

import { siteRoutes } from '../constants/constants';

export const getOptionIcon = route => {
  switch (route) {
    case siteRoutes.HOME:
      return <PlaySquareOutlined />;
    case siteRoutes.MOVIES:
      return <PlaySquareOutlined />;
    case siteRoutes.FORM:
      return <FormOutlined />;
    case siteRoutes.MANAGE_OPTIONS:
      return <SettingOutlined />;
    case siteRoutes.RENT_MOVIE:
      return <ShopOutlined />;
    default:
      return <BorderOutlined />;
  }
};
