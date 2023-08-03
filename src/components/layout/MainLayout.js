import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

import { useOptionsContext } from '../../context/Options';
import { siteRoutes } from '../../constants/constants';
import { getOptionIcon } from '../../utils/utils';
import logo from '../../assets/cine.png';

const { Header, Content, Footer, Sider } = Layout;

export const MainLayout = ({ children }) => {
  const { options } = useOptionsContext();
  const navigate = useNavigate();

  const currentPagePath = window.location.pathname || siteRoutes.MOVIES;
  const [activeMenuItem, setActiveMenuItem] = useState(currentPagePath);

  const menuItems = options
    // Filter disabled options to not show them in the menu
    .filter(option => !option.disabled)
    .map(option => {
      return {
        key: option.path,
        label: option.name,
        disabled: option.disabled,
        icon: getOptionIcon(option.path),
      };
    });

  const onClick = menuItem => {
    navigate(menuItem.key);
    setActiveMenuItem(menuItem.key);
  };

  useEffect(() => {
    setActiveMenuItem(currentPagePath);
  }, [currentPagePath]);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider breakpoint='md' collapsible width='225px' defaultCollapsed={true}>
        <Menu
          mode='inline'
          theme='dark'
          items={menuItems}
          onClick={onClick}
          selectedKeys={activeMenuItem}
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
          }}
        />
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
            padding: '1.5rem',
            margin: 0,
          }}
        >
          <div className='flex gap-4'>
            <img src={logo} alt='Cinema' className='w-6 object-contain' />
            <h2 className='text-xl font-medium text-white'>Movies app</h2>
          </div>
        </Header>
        <Content style={{ margin: '16px' }}>{children}</Content>
        <Footer className='bg-sky-100 text-center text-sky-700 '>
          <p className='flex flex-col text-sm'>
            Made by Carolina Carranza<span className='font-light'>2023</span>
          </p>
        </Footer>
      </Layout>
    </Layout>
  );
};
