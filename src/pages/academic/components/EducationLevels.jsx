import React from 'react'
import { Row, Col, Card, Typography, Button } from 'antd'
import { ReadOutlined, BookOutlined, AuditOutlined } from '@ant-design/icons'

const { Title, Paragraph } = Typography

const EducationLevels = () => {
  return (
    <div className="education-levels-container">
        <Title level={2} className="blue"  style={{ textAlign: 'center', color: '#1890ff' }}>Các bậc đào tạo</Title>
      <Row gutter={[24, 24]} className="education-levels">
        {[
          { icon: <ReadOutlined />, title: 'Cao đẳng', color: '#52c41a', description: 'Chương trình đào tạo 2-3 năm' },
          { icon: <BookOutlined />, title: 'Đại học', color: '#ff9e73', description: 'Chương trình đào tạo 4-5 năm' },
          { icon: <AuditOutlined />, title: 'Sau đại học', color: '#722ed1', description: 'Chương trình Thạc sĩ và Tiến sĩ' },
        ].map((item, index) => (
          <Col key={index} xs={24} sm={8}>
            <Card
              hoverable
              className="education-level-card"
              style={{ borderTop: `4px solid ${item.color}` }}
            >
              <div className="icon-wrapper" style={{ color: item.color }}>
                {React.cloneElement(item.icon, { style: { fontSize: '48px' } })}
              </div>
              <Title level={4} style={{ color: item.color, marginTop: '16px' }}>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
              <Button type="primary" style={{ backgroundColor: item.color, borderColor: item.color }}>
                Tìm hiểu thêm
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default EducationLevels