import React from 'react';
import { Tabs } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import CourseRegistration from './CourseRegistration';
import MyCourses from './MyCourses';

const { TabPane } = Tabs;

const Course = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;

  const handleTabChange = (key) => {
    navigate(key);
  };

  return (
    <Tabs defaultActiveKey={currentPath} onChange={handleTabChange}>
      <TabPane tab="Khóa Học Của Tôi" key="/my-courses">
        <MyCourses />
      </TabPane>
      <TabPane tab="Đăng Ký Khóa Học" key="/course-registration">
        <CourseRegistration />
      </TabPane>
    </Tabs>
  );
};

export default Course;