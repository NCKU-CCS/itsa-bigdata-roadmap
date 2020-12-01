import React from 'react';
import styled from '@emotion/styled';
import Header from './Header';
import Info from './Info';
import CourseCard from './CourseCard';

function Course() {
  return (
    <CourseContainer>
      <Header />
      <Info />
      <CourseCard />
      <CourseCard />
      <CourseCard />
    </CourseContainer>
  );
}

export default Course;

const CourseContainer = styled.div`
  height: 100vh;
  width: 100vw;
`;
