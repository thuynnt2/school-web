import React from 'react';
import { Typography, Collapse } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;

export const TrainingPrograms = () => {
    const trainingPrograms = [
      {
        key: '1',
        program: 'Công nghệ thông tin',
        duration: '4 năm',
        degree: 'Cử nhân',
        description: 'Chương trình đào tạo về lập trình, cơ sở dữ liệu, mạng máy tính và an ninh mạng.',
        career: 'Lập trình viên, Kỹ sư phần mềm, Quản trị hệ thống',
      },
      {
        key: '2',
        program: 'Quản trị kinh doanh',
        duration: '4 năm',
        degree: 'Cử nhân',
        description: 'Đào tạo về quản lý, marketing, tài chính và chiến lược kinh doanh.',
        career: 'Quản lý dự án, Chuyên viên marketing, Nhà phân tích kinh doanh',
      },
      {
        key: '3',
        program: 'Kỹ thuật xây dựng',
        duration: '4.5 năm',
        degree: 'Kỹ sư',
        description: 'Chương trình về thiết kế, quản lý và giám sát các dự án xây dựng.',
        career: 'Kỹ sư xây dựng, Quản lý dự án xây dựng, Tư vấn thiết kế',
      },
      {
        key: '4',
        program: 'Ngôn ngữ Anh',
        duration: '4 năm',
        degree: 'Cử nhân',
        description: 'Đào tạo kỹ năng ngôn ngữ Anh, văn hóa và giao tiếp quốc tế.',
        career: 'Giáo viên tiếng Anh, Biên phiên dịch, Chuyên viên quan hệ quốc tế',
      },
      {
        key: '5',
        program: 'Y khoa',
        duration: '6 năm',
        degree: 'Bác sĩ',
        description: 'Chương trình đào tạo toàn diện về y học, chẩn đoán và điều trị bệnh.',
        career: 'Bác sĩ đa khoa, Bác sĩ chuyên khoa, Nghiên cứu y học',
      },
      {
        key: '6',
        program: 'Kế toán',
        duration: '4 năm',
        degree: 'Cử nhân',
        description: 'Đào tạo về kế toán tài chính, kiểm toán và quản lý tài chính.',
        career: 'Kế toán viên, Kiểm toán viên, Chuyên viên tư vấn tài chính',
      },
      {
        key: '7',
        program: 'Công nghệ sinh học',
        duration: '4 năm',
        degree: 'Cử nhân',
        description: 'Chương trình về ứng dụng sinh học trong y tế, nông nghiệp và môi trường.',
        career: 'Nghiên cứu viên sinh học, Kỹ sư công nghệ sinh học, Chuyên viên R&D',
      },
      {
        key: '8',
        program: 'Luật',
        duration: '4 năm',
        degree: 'Cử nhân',
        description: 'Đào tạo về hệ thống pháp luật, tư vấn pháp lý và nghiên cứu luật.',
        career: 'Luật sư, Tư vấn pháp lý, Thẩm phán',
      },
    ];

  return (
    <div className="training-programs-container mt-6">
        <Title level={2} className="blue" style={{ textAlign: 'center', color: '#1890ff' }}>
            Khám phá tất cả chương trình đào tạo
            </Title>
        <Collapse 
          accordion 
          defaultActiveKey={['1']} 
          className="training-programs-collapse"
          style={{
            background: 'transparent',
            border: 'none'
          }}
        >
          {trainingPrograms.map(program => (
            <Panel 
              header={
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  color: '#34495e',
                  fontWeight: 'bold'
                }}>
                  <BookOutlined style={{ marginRight: '10px', color: '#3498db' }} />
                  {program.program}
                </div>
              } 
              key={program.key} 
              className="training-programs-panel"
              style={{
                marginBottom: '15px',
                border: '1px solid #bdc3c7',
                borderRadius: '8px',
                overflow: 'hidden'
              }}
            >
              <Paragraph><strong style={{color: '#2980b9'}}>Thời gian đào tạo:</strong> {program.duration}</Paragraph>
              <Paragraph><strong style={{color: '#2980b9'}}>Bằng cấp:</strong> {program.degree}</Paragraph>
              <Paragraph><strong style={{color: '#2980b9'}}>Mô tả:</strong> {program.description}</Paragraph>
              <Paragraph><strong style={{color: '#2980b9'}}>Cơ hội nghề nghiệp:</strong> {program.career}</Paragraph>
            </Panel>
          ))}
        </Collapse>
      </div>
  )
}
