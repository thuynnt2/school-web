import React from 'react'
import { Row, Col, Card, List, Typography, Image } from 'antd';
import './News.scss';

const News = () => {
  return (
    <div className="news-events-container">

      <div className="news-events-hero">
        <div className="news-events-hero-overlay" />
        <h1>Tin tức và Sự kiện Đại học Trà Vinh</h1>
        <p>
          Cập nhật những tin tức và sự kiện mới nhất tại Đại học Trà Vinh. Từ các hoạt động học thuật, nghiên cứu, đến các sự kiện văn hóa, thể thao, chúng tôi luôn mang đến cho bạn những thông tin hữu ích và kịp thời. Hãy theo dõi để không bỏ lỡ bất kỳ thông tin quan trọng nào về các hoạt động và thành tựu của trường.
        </p>
      </div>

      <Row gutter={[16, 16]}>
        <Col span={16}>
          <Card title="Tin tức mới nhất" extra={<a href="#">Xem thêm</a>}>
            <List
              itemLayout="horizontal"
              dataSource={[
                { title: "Được trao Tài trợ Nghiên cứu Mới", date: "2023-05-15", image: "https://baocantho.com.vn/image/fckeditor/upload/2024/20240208/images/TRA%20VINH%202%20copy.webp", description: "Đại học Trà Vinh nhận được khoản tài trợ lớn cho dự án nghiên cứu mới về công nghệ sinh học. Dự án này hứa hẹn mang lại những đột phá..." },
                { title: "Khởi động Chương trình Trao đổi Sinh viên", date: "2023-05-10", image: "https://tvu.edu.vn/wp-content/uploads/2018/10/Tien-si-Nguyen-Tien-Dung-thoi-coi-khoi-dong-chuong-trinh-trai-he.jpg", description: "Chương trình trao đổi sinh viên quốc tế mới được triển khai tại trường, mở ra cơ hội học tập và trải nghiệm văn hóa đa dạng..." },
                { title: "Ghi nhận Thành tích Giảng viên", date: "2023-05-05", image: "https://thanhtri.hanoi.gov.vn/documents/4146364/7329903/%C4%91c+p3.jpg/bdd02160-c8f1-4746-8046-4cb3466063e5?t=1721370792866", description: "Các giảng viên xuất sắc được vinh danh trong lễ trao giải thưởng hàng năm. Sự kiện này không chỉ ghi nhận những đóng góp to lớn..." },
                { title: "Hội thảo Khoa học Công nghệ 2023", date: "2023-05-01", image: "https://www.tvu.edu.vn/wp-content/uploads/2023/02/ret-2023-tvu-scaled.jpg", description: "Hội thảo quy tụ các chuyên gia hàng đầu trong lĩnh vực khoa học công nghệ. Các bài thuyết trình và thảo luận sẽ tập trung vào..." },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Image src={item.image} width={150} height={100} />}
                    title={<a href="#">{item.title}</a>}
                    description={
                      <>
                        <div>{item.date}</div>
                        <Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'Xem thêm' }}>
                          {item.description}
                        </Typography.Paragraph>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
        <Col span={8} className='news-events-container'>
          <Card title="Sự kiện sắp diễn ra" extra={<a href="#">Xem thêm</a>}>
            <List
              itemLayout="vertical"
              dataSource={[
                { title: "Hội chợ Khoa học Thường niên", date: "2023-06-01", time: "9:00 AM", image: "https://images2.thanhnien.vn/528068263637045248/2024/9/17/photo-1726568535637-17265685362031389058525.png", description: "Triển lãm các dự án khoa học của sinh viên, với sự tham gia của các chuyên gia trong ngành." },
                { title: "Sự kiện Kết nối Cựu sinh viên", date: "2023-06-15", time: "6:00 PM", image: "https://vuonuom.tvu.edu.vn/uploads/1719044934ketnoi.jpg", description: "Cơ hội gặp gỡ, chia sẻ kinh nghiệm và mở rộng mạng lưới quan hệ cho cựu sinh viên." },
                { title: "Hội nghị Quốc tế", date: "2023-06-30", time: "10:00 AM", image: "https://images2.thanhnien.vn/528068263637045248/2024/9/17/photo-1726568537691-1726568537989569182742.png", description: "Hội nghị về các xu hướng mới trong giáo dục đại học, với sự tham gia của các diễn giả quốc tế." },
              ]}
              renderItem={(item) => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<Image src={item.image} width={100} />}
                    title={<a href="#">{item.title}</a>}
                    description={
                      <>
                        <Typography.Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'Xem thêm' }}>
                          {item.description}
                        </Typography.Paragraph>
                        <div>{`${item.date} lúc ${item.time}`}</div>
                      </>
                    }
                  />
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default News