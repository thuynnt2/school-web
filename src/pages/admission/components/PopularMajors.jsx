import { Card, Col, Row, Typography } from 'antd'
import React from 'react'

const { Title, Paragraph } = Typography;

const PopularMajors = () => {
    const majors = [
        {
            title: "Công nghệ thông tin",
            description: "Đào tạo chuyên gia IT với kiến thức hiện đại",
            img: "https://tuyensinh.uit.edu.vn/sites/default/files/uploads/images/201803/31-12-2017-cong-bo-10-su-kien-cong-nghe-thong-tin-truyen-thong-tieu-bieu-nam-2017-22904cea-details.jpg"
        },
        {
            title: "Quản trị kinh doanh",
            description: "Phát triển kỹ năng lãnh đạo và quản lý",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8IkoytoPfNfjBdLiFIxJ3zYOuytwGe0ZdA&s"
        },
        {
            title: "Kỹ thuật xây dựng",
            description: "Đào tạo kỹ sư xây dựng chuyên nghiệp",
            img: "https://huongnghiep.hocmai.vn/wp-content/uploads/2021/12/1-8.png"
        },
        {
            title: "Y khoa",
            description: "Đào tạo bác sĩ chất lượng cao",
            img: "https://tuetinh.edu.vn/wp-content/uploads/2023/04/nganh-y-duoc-1.jpg"
        },
        {
            title: "Ngôn ngữ Anh",
            description: "Phát triển kỹ năng ngôn ngữ toàn diện",
            img: "https://slt.haui.edu.vn/media/87/t87450.jpg"
        },
        {
            title: "Kỹ thuật điện tử",
            description: "Đào tạo chuyên gia trong lĩnh vực điện tử",
            img: "https://hict.edu.vn/pic/Service/images/2020/ng%C3%A0nh%20%C4%91i%E1%BB%87n/1.jpg"
        }
    ];

    return (
        <div className="popular-majors-container" style={{ background: '#fdfdfd', padding: '40px 0', borderRadius: '10px', overflow: 'hidden' }}>
            <Row justify="center">
                <Col span={22}>
                    <Title className='blue' level={2} style={{ textAlign: 'center', marginBottom: '40px' }}>
                        Các ngành học nổi bật tại Đại học Trà Vinh
                    </Title>
                    <Row gutter={[24, 24]}>
                        {majors.map((major, index) => (
                            <Col xs={24} sm={12} md={8} key={index}>
                                <Card
                                    hoverable
                                    style={{ height: '100%' }}
                                    cover={
                                        <img src={major.img} alt={major.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                                    }
                                >
                                    <Card.Meta 
                                        title={<Title level={4}>{major.title}</Title>}
                                        description={<Paragraph>{major.description}</Paragraph>}
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default PopularMajors