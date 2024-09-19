import React, { useState, useEffect } from 'react';
import { Table, Button, message, Typography, Space } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

const { Title } = Typography;

const CourseRegistration = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch available courses from the API
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      // Replace this with actual API call
      const response = await fetch('/api/courses');
      const data = await response.json();
      setCourses(data);
      setLoading(false);
    } catch (error) {
      console.error('Lỗi khi tải danh sách khóa học:', error);
      message.error('Không thể tải danh sách khóa học');
      setLoading(false);
    }
  };

  const columns = [
    {
      title: 'Mã Khóa Học',
      dataIndex: 'code',
      key: 'code',
    },
    {
      title: 'Tên Khóa Học',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Số Tín Chỉ',
      dataIndex: 'credits',
      key: 'credits',
    },
    {
      title: 'Thao Tác',
      key: 'action',
      render: (_, record) => (
        <Button
          icon={<PlusOutlined />}
          onClick={() => handleAddCourse(record)}
          disabled={selectedCourses.some(course => course.id === record.id)}
        >
          Thêm
        </Button>
      ),
    },
  ];

  const handleAddCourse = (course) => {
    setSelectedCourses([...selectedCourses, course]);
    message.success(`Đã thêm ${course.name} vào danh sách khóa học của bạn`);
  };

  const handleRemoveCourse = (courseId) => {
    setSelectedCourses(selectedCourses.filter(course => course.id !== courseId));
    message.success('Đã xóa khóa học khỏi danh sách');
  };

  const handleSubmitRegistration = async () => {
    try {
      // Replace this with actual API call
      await fetch('/api/register-courses', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ courses: selectedCourses.map(course => course.id) }),
      });
      message.success('Đăng ký khóa học thành công');
      setSelectedCourses([]);
    } catch (error) {
      console.error('Lỗi khi đăng ký khóa học:', error);
      message.error('Không thể đăng ký khóa học');
    }
  };

  return (
    <div>
      <Title level={2} style={{ marginTop: '0' }}>Đăng Ký Khóa Học</Title>
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Table
          columns={columns}
          dataSource={courses}
          loading={loading}
          rowKey="id"
          pagination={{ pageSize: 10 }}
        />
        <div>
          <Title level={3}>Khóa Học Đã Chọn</Title>
          {selectedCourses.length > 0 ? (
            <ul>
              {selectedCourses.map(course => (
                <li key={course.id}>
                  {course.name} - {course.credits} tín chỉ
                  <Button type="link" onClick={() => handleRemoveCourse(course.id)}>Xóa</Button>
                </li>
              ))}
            </ul>
          ) : (
            <p>Chưa chọn khóa học nào</p>
          )}
        </div>
        <Button
          type="primary"
          onClick={handleSubmitRegistration}
          disabled={selectedCourses.length === 0}
        >
          Xác Nhận Đăng Ký
        </Button>
      </Space>
    </div>
  );
};

export default CourseRegistration;