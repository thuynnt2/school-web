import React, { useState, useEffect } from 'react';
import { Tabs, Form, Input, DatePicker, Button, Row, Col, Typography, Card, Avatar } from 'antd';
import { useLocation } from 'react-router-dom';
import { UserOutlined, LockOutlined, MailOutlined, PhoneOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;
const { Title, Paragraph } = Typography;

const Auth = () => {
  const [activeTab, setActiveTab] = useState('login');
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    if (path === '/login') {
      setActiveTab('login');
    } else if (path === '/register') {
      setActiveTab('register');
    }
  }, [location]);

  const onFinish = (values) => {
    console.log('Form values:', values);
  };

  return (
    <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '40px 20px' }}>
      <Row gutter={24} align="middle">
        <Col xs={24} md={12}>
          <Card style={{ textAlign: 'center', backgroundColor: '#f0f7ff', border: 'none' }}>
            <Avatar size={100} src="https://upload.wikimedia.org/wikipedia/vi/c/ce/Logo_Tr%C6%B0%E1%BB%9Dng_%C4%90%E1%BA%A1i_h%E1%BB%8Dc_Tr%C3%A0_Vinh.png" />
            <Title level={2} style={{ marginTop: '20px', color: '#1890ff' }}>Trường đại học Trà Vinh</Title>
            <Paragraph>
              Chào mừng bạn đến với cổng thông tin của Đại học Trà Vinh. Hãy đăng nhập hoặc đăng ký để trải nghiệm đầy đủ các tính năng của chúng tôi.
            </Paragraph>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card hoverable style={{ borderRadius: '15px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
            <Tabs activeKey={activeTab} onChange={setActiveTab}>
              <TabPane tab="Đăng nhập" key="login">
                <Form onFinish={onFinish} layout="vertical">
                  <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}>
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                  </Form.Item>
                  <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                    <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', height: '40px', borderRadius: '20px' }}>
                      Đăng nhập
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
              <TabPane tab="Đăng ký" key="register">
                <Form onFinish={onFinish} layout="vertical">
                  <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Vui lòng nhập email hợp lệ!' }]}>
                    <Input prefix={<MailOutlined />} placeholder="Email" />
                  </Form.Item>
                  <Form.Item name="name" rules={[{ required: true, message: 'Vui lòng nhập tên của bạn!' }]}>
                    <Input prefix={<UserOutlined />} placeholder="Họ và tên" />
                  </Form.Item>
                  <Form.Item name="birthday" rules={[{ required: true, message: 'Vui lòng chọn ngày sinh!' }]}>
                    <DatePicker style={{ width: '100%' }} placeholder="Ngày sinh" suffixIcon={<CalendarOutlined />} />
                  </Form.Item>
                  <Form.Item name="phone" rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}>
                    <Input prefix={<PhoneOutlined />} placeholder="Số điện thoại" />
                  </Form.Item>
                  <Form.Item name="address" rules={[{ required: true, message: 'Vui lòng nhập địa chỉ!' }]}>
                    <Input.TextArea prefix={<HomeOutlined />} placeholder="Địa chỉ" autoSize={{ minRows: 2, maxRows: 6 }} />
                  </Form.Item>
                  <Form.Item name="password" rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}>
                    <Input.Password prefix={<LockOutlined />} placeholder="Mật khẩu" />
                  </Form.Item>
                  <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: '100%', height: '40px', borderRadius: '20px' }}>
                      Đăng ký
                    </Button>
                  </Form.Item>
                </Form>
              </TabPane>
            </Tabs>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Auth;