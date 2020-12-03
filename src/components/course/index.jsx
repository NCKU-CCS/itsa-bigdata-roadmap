import React from 'react';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import courseData from '../../constants/courseData';

function Course() {
  const { courseId } = useParams();
  const data = courseData.find((element) => element.courseId === courseId);

  console.log(data);
  return (
    <CourseContainer>
      <InfoContainer>
        <CourseName>{data.course_info.title}</CourseName>
        <Description>{data.course_info.description}</Description>
      </InfoContainer>
      {data.source_list.map((course) => (
        <CourseCardContainer
          key={course.title}
        >
          <Information>
            <Row style={{ color: '#000000' }}>
              <Circle />
              {course.category}
            </Row>
            <Row style={{ fontSize: '0.94rem' }}>{course.platform}</Row>
            <Row style={{ fontSize: '1.25rem' }}>
              {course.title}
            </Row>
            <Row>
              <b>課程來源：</b>
              <CourseLink href={course.link}>{course.link}</CourseLink>
            </Row>
            <Row>
              <b>演講者：</b>{course.presenter}
            </Row>
            <Row>{course.description}</Row>
          </Information>
          <Source src={`./${course.picture_name}`} />
        </CourseCardContainer>
      ))}
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

const InfoContainer = styled.div`
  display: flex;
  width: 95vw;
  flex-direction: column;
  background-color: white;
  margin-left: 1.25rem;
`;

const CourseName = styled.h1`
  display: block;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 2rem;
  margin: 1.5rem 0;
`;

const Description = styled.p`
  display: block;
  width: 70%;
  letter-spacing: 1px;
  border-left: 1.5rem solid #6f7e98;
  padding-left: 1rem;
  margin-bottom: 3rem;
  font-size: 1.25rem;
`;

const CourseCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 87.5rem;
  margin: 0 0 2rem 1.25rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 3px #bebebe;
  padding: 1.5rem 2.5rem;
  color: #2f2f2f;
`;

const Information = styled.p`
  display: flex;
  flex-direction: column;
  width: 60%;
  letter-spacing: 1px;
  padding: 0 1rem;
`;

const Circle = styled.span`
  display: inline-block;
  height: 1rem;
  width: 1rem;
  background-color: #64379f;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
  font-size: 1rem;
`;

const CourseLink = styled.a`
  :hover {
    color: #64379f;
    cursor: pointer;
  }
`;

const Source = styled.img`
  width: 22.75rem;
  height: 14.69rem;
  border-radius: 0.94rem;
  :hover {
    box-shadow: 3px 3px 6px #bebebe;
  }
`;
