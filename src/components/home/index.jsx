import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from '@chakra-ui/react';

// constant
import { graphScale } from '../../constants';
import courseNodes from '../../constants/courseNodes';
import courseEndpoints from '../../constants/courseEndpoints';
// assets
import courseMap from '../../static/BigDataRoadMap.svg';

function Home() {
  const history = useHistory();
  return (
    <HomePageContainer scale={graphScale}>
      <MapContainer src={courseMap}>
        {courseNodes.map((course) => (
          <Popover key={course.id} trigger="hover">
            <PopoverTrigger>
              <CoursePoint
                top={course.top}
                left={course.left}
                color={course.color}
                onClick={() => {
                  history.push(`/course/${course.id}`);
                }}
              />
            </PopoverTrigger>
            <PopoverContent
              m="30px 0 10px 0"
              bg="white"
              border="solid 2px"
              borderColor={course.color}
              borderRadius="10px"
            >
              <PopoverHeader
                color="#2f2f2f"
                fontSize="16px"
                fontWeight="600"
                letterSpacing="2px"
              >
                {course.text}
              </PopoverHeader>
              <PopoverBody>{course.tooltip}</PopoverBody>
            </PopoverContent>
          </Popover>
        ))}
        {courseEndpoints.map((course) => (
          <Popover key={course.id} trigger="hover">
            <PopoverTrigger>
              <CourseEndpoint
                top={course.top}
                left={course.left}
                color={course.color}
                onClick={() => {
                  history.push(`/course/${course.id}`);
                }}
              >
                <p>{course.text}</p>
              </CourseEndpoint>
            </PopoverTrigger>
            <PopoverContent
              mt="30px"
              bg="white"
              border="solid 2px"
              borderColor={course.color}
              borderRadius="10px"
            >
              <PopoverHeader
                color="#2f2f2f"
                fontSize="16px"
                fontWeight="600"
                letterSpacing="2px"
              >
                {course.text}
              </PopoverHeader>
              <PopoverBody>{course.tooltip}</PopoverBody>
            </PopoverContent>
          </Popover>
        ))}
      </MapContainer>
    </HomePageContainer>
  );
}

export default Home;

const HomePageContainer = styled.div`
  min-width: 1440px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const MapContainer = styled.div`
  position: relative;
  width: 1440px;
  height: 570px;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
`;

const CoursePoint = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: 22px;
  height: 22px;
  border-radius: 100%;
  cursor: pointer;
  transition-duration: 100ms;

  :hover {
    background-color: ${(props) => props.color};
  }
`;

const CourseEndpoint = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: 84px;
  height: 38px;
  border-radius: 7px;
  color: #303030;
  cursor: pointer;
  transition-duration: 100ms;
  transition-property: background-color;

  p {
    font-size: 12px;
    letter-spacing: 1px;
  }

  :hover {
    background-color: ${(props) => props.color};
    color: white;
  }
`;
