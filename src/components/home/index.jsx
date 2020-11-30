import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';

// constant
import { graphScale } from '../../constants';
import courseNodes from '../../constants/courseNodes';
// assets
import courseMap from '../../static/BigDataRoadMap.svg';

function Home() {
  const history = useHistory();
  return (
    <HomePageContainer scale={graphScale}>
      <MapContainer src={courseMap}>
        {courseNodes.map((course) => (
          <CoursePoint
            key={course.id}
            top={course.top}
            left={course.left}
            color={course.color}
            onClick={() => {
              history.push(`/course/${course.id}`);
            }}
          />
        ))}
      </MapContainer>
    </HomePageContainer>
  );
}

export default Home;

const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
