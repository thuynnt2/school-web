import { Card, Col, Row } from 'antd'
import React from 'react'
import { BookOutlined, CalendarOutlined, DollarOutlined, MessageOutlined } from '@ant-design/icons'
import PopularMajors from './components/PopularMajors'
import RegisterForm from './components/RegisterForm'
import Achievements from '../about/components/Achievements'
import StudentLife from './components/StudentLife'
import './Admission.scss'

const Admission = () => {
  return (
    <div className="admission-container">
      <div className="admission-hero">
        <div className="admission-hero-overlay"/>
        <h1>Tuyển sinh Đại học chính quy</h1>
        <p >
          Khám phá cơ hội học tập đa dạng tại Đại học Trà Vinh - nơi hội tụ của tri thức, sáng tạo và phát triển. 
          Với hơn 50 ngành đào tạo, cơ sở vật chất hiện đại, và đội ngũ giảng viên giàu kinh nghiệm, 
          chúng tôi cam kết mang đến cho bạn một môi trường học tập chất lượng cao, 
          cùng nhiều cơ hội nghề nghiệp hấp dẫn sau khi tốt nghiệp.
        </p>
      </div>
      
      <Row gutter={[24, 24]} className='admission-info-container'>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              className="admission-card"
              cover={<BookOutlined style={{ fontSize: '64px', padding: '20px', color: '#1890ff' }} />}
              style={{ height: '100%', borderTop: '4px solid #1890ff' }}
            >
              <Card.Meta 
                title={<span style={{ color: '#1890ff' }}>Thông tin tuyển sinh</span>}
                description="Xem chi tiết về các ngành học và chỉ tiêu tuyển sinh" 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              className="admission-card"
              cover={<CalendarOutlined style={{ fontSize: '64px', padding: '20px', color: '#52c41a' }} />}
              style={{ height: '100%', borderTop: '4px solid #52c41a' }}
            >
              <Card.Meta 
                title={<span style={{ color: '#52c41a' }}>Lịch tuyển sinh</span>}
                description="Thời gian xét tuyển và nhập học" 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              className="admission-card"
              cover={<DollarOutlined style={{ fontSize: '64px', padding: '20px', color: '#faad14' }} />}
              style={{ height: '100%', borderTop: '4px solid #faad14' }}
            >
              <Card.Meta 
                title={<span style={{ color: '#faad14' }}>Học phí - Học bổng</span>}
                description="Thông tin về học phí và các chương trình học bổng" 
              />
            </Card>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Card
              hoverable
              className="admission-card"
              cover={<MessageOutlined style={{ fontSize: '64px', padding: '20px', color: '#722ed1' }} />}
              style={{ height: '100%', borderTop: '4px solid #722ed1' }}
            >
              <Card.Meta 
                title={<span style={{ color: '#722ed1' }}>Tư vấn tuyển sinh</span>}
                description="Liên hệ với chúng tôi để được tư vấn" 
              />
            </Card>
          </Col>
        </Row>
      <RegisterForm />
      <PopularMajors />
      <Achievements />
      <StudentLife />
    </div>
  )
}

export default Admission