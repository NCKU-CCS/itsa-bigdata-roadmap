import React from 'react';
import styled from '@emotion/styled';
import Info from './Info';
import CourseCard from './CourseCard';

function Course() {
  return (
    <CourseContainer>
      <Info />
      <CourseCard />
      <CourseCard />
      <CourseCard />
      <Footer />
    </CourseContainer>
  );
}

export default Course;

const CourseContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;

const Footer = styled.div`
  height: 60px;
  width: 100vw;
  background-color: #324484;
`;
