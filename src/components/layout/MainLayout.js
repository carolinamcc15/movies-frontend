import { Layout, Menu } from 'antd';
import React from 'react';

import { sidebarOptions, siteRoutes } from '../../constants/constants';
import { getOptionIcon } from '../../utils/utils';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

export const MainLayout = ({ children }) => {
  const navigate = useNavigate();

  const menuItems = sidebarOptions
    // Logic to remove Rent a movie option
    .filter(option => option.route !== siteRoutes.RENT_MOVIE)
    .map(option => {
      return {
        key: option.route,
        label: option.name,
        icon: getOptionIcon(option.route),
      };
    });

  const onClick = menuItem => {
    navigate(menuItem.key);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint='md' collapsedWidth='0'>
        <div className='logo' />
        <Menu mode='inline' theme='dark' items={menuItems} onClick={onClick} />
      </Sider>
      <Layout>
        <Header
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <h2 style={{ color: 'white' }}>Movies app</h2>
        </Header>
        <Content style={{ margin: '16px' }}>{children}</Content>
        <Footer style={{ textAlign: 'center' }}>By Carolina Carranza</Footer>
      </Layout>
    </Layout>
  );
};
