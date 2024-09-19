import { Button, Table, Modal, Typography } from 'antd';
import React, { useState, useEffect } from 'react';
// import CourseCard from '../../components/CourseCard';

const { Title } = Typography;

const MyCourses = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    // Hardcoded data for enrolled courses
    const hardcodedCourses = [
      { id: 1, title: 'React Basics', instructor: 'John Doe', description: 'Learn the fundamentals of React.' },
      { id: 2, title: 'Advanced JavaScript', instructor: 'Jane Smith', description: 'Dive deep into advanced JavaScript concepts.' },
      { id: 3, title: 'Node.js Fundamentals', instructor: 'Bob Johnson', description: 'Get started with Node.js development.' },
    ];
    setEnrolledCourses(hardcodedCourses);
  }, []);

  const showModal = (course) => {
    setSelectedCourse(course);
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="my-courses-container">
      <Title level={2} style={{ marginTop: '0' }}>Các Khóa Học Của Tôi</Title>
      {enrolledCourses.length > 0 ? (
        <div className="course-grid">
          <Table dataSource={enrolledCourses} rowKey="id">
            <Table.Column title="Tên Khóa Học" dataIndex="title" key="title" />
            <Table.Column title="Giảng Viên" dataIndex="instructor" key="instructor" />
            <Table.Column
              title="Thao Tác"
              key="action"
              render={(_, record) => (
                <Button type="primary" onClick={() => showModal(record)}>Xem Khóa Học</Button>
              )}
            />
          </Table>
        </div>
      ) : (
        <p>Bạn chưa đăng ký khóa học nào.</p>
      )}
      <Modal
        title="Chi Tiết Khóa Học"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {selectedCourse && (
          <>
            <p><strong>Tên Khóa Học:</strong> {selectedCourse.title}</p>
            <p><strong>Giảng Viên:</strong> {selectedCourse.instructor}</p>
            <p><strong>Mô Tả:</strong> {selectedCourse.description}</p>
          </>
        )}
      </Modal>
    </div>
  );
};

export default MyCourses;