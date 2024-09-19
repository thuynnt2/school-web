import React from 'react';
import { Card, Col, Row, Typography, Avatar } from 'antd';
import {
  BookOutlined,
  LaptopOutlined,
  DollarOutlined,
  ExperimentOutlined,
  MedicineBoxOutlined,
  ToolOutlined
} from '@ant-design/icons';

const { Title } = Typography;
const { Meta } = Card;

const Faculty = () => {
  return (
    <div className="faculty-container" style={{ backgroundColor: '#fdfdfd', padding: '20px', borderRadius: '10px' }}>
        <Title level={2} style={{ textAlign: 'center', color: '#1890ff' }}>Các khoa đào tạo</Title>
        <Row gutter={[16, 16]}>
          {[
            { name: 'Khoa Công nghệ thông tin', icon: <LaptopOutlined style={{ color: '#000000' }} />, color: '#ffcccc' },
            { name: 'Khoa Kinh tế', icon: <DollarOutlined style={{ color: '#000000' }} />, color: '#ccffcc' },
            { name: 'Khoa Nông nghiệp', icon: <ExperimentOutlined style={{ color: '#000000' }} />, color: '#ffd700' },
            { name: 'Khoa Sư phạm', icon: <BookOutlined style={{ color: '#000000' }} />, color: '#cce0ff' },
            { name: 'Khoa Y Dược', icon: <MedicineBoxOutlined style={{ color: '#000000' }} />, color: '#ffccff' },
            { name: 'Khoa Kỹ thuật và Công nghệ', icon: <ToolOutlined style={{ color: '#000000' }} />, color: '#e0ccff' }
          ].map((faculty, index) => (
            <Col xs={24} sm={12} md={8} key={index}>
              <Card hoverable className="faculty-card" style={{ height: '100%', border: `2px solid ${faculty.color}`, borderRadius: '10px' }}>
                <Meta
                  avatar={<Avatar icon={faculty.icon} style={{ backgroundColor: faculty.color, width: '64px', height: '64px' }} />}
                  title={<span style={{ color: '#1890ff' }}>{faculty.name}</span>}
                  description={<span style={{ color: '#595959' }}>Nhấn để xem chi tiết</span>}
                />
              </Card>
            </Col>
          ))}
        </Row>
      </div>
  )
}

export default Faculty