import React from 'react';
import { Layout, Menu, Button } from 'antd';
import { Link, useLocation } from 'react-router-dom';

const { Header } = Layout;

const menuItems = [
  {
    key: '/about',
    label: <Link to="/about">Về trường</Link>,
  }, {
    key: '/academic',
    label: <Link to="/academic">Đào tạo</Link>,
  }, {
    key: '/admission',
    label: <Link to="/admission">Tuyển sinh</Link>,
  }, {
    key: '/news-events',
    label: <Link to="/news-events">Tin tức & sự kiện</Link>,
  }, {
    key: '/my-courses',
    label: <Link to="/my-courses">Khóa học</Link>,
  },
];

const HeaderApp = () => {
  const location = useLocation();

  return (
    <Layout>
      <Header style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 75px' }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="https://www.tvu.edu.vn/wp-content/uploads/2024/07/logotvu14.png" alt="Tra Vinh University" style={{ height: '40px', marginRight: '20px' }} />
        </div>

        {/* Navigation Menu */}
        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          style={{ flex: 1, justifyContent: 'center' }}
          items={menuItems}
        />

        {/* Đăng nhập và Đăng ký */}
        <div>
          <Button type="primary" onClick={() => window.location.href = '/login'} style={{ marginRight: '10px' }}>Login</Button>
          <Button onClick={() => window.location.href = '/register'}>Register</Button>
        </div>
      </Header>
    </Layout>
  );
};

export default HeaderApp;
