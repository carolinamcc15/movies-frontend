import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import React from 'react';

import { useOptionsContext } from '../../context/Options';
import { getOptionIcon } from '../../utils/utils';

const { Header, Content, Footer, Sider } = Layout;

export const MainLayout = ({ children }) => {
  const { options } = useOptionsContext();

  const navigate = useNavigate();

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
