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

export const formatNumberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const formatDate = date => {
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};
