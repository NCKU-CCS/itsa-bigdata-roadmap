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
            onClick={() => { history.push(`/course/${course.id}`); }}
          />
        ))}
      </MapContainer>
    </HomePageContainer>
  );
}

export default Home;

const HomePageContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: calc(3975px * ${(props) => props.scale});
  height: calc(1513px * ${(props) => props.scale});
  padding: 5px;
`;

const MapContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
`;

const CoursePoint = styled.div`
  position: absolute;
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: calc(60px * 0.45);
  height: calc(60px * 0.45);
  border-radius: 100%;
  cursor: pointer;

  :hover {
    background-color: ${(props) => props.color};
  }
`;
