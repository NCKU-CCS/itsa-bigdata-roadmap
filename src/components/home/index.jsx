import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import {
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab as ChakraTab,
} from '@chakra-ui/react';
import TagFilter from './TagFilter';

// constant
import { graphScale } from '../../constants';
import courseNodes from '../../constants/courseNodes';
import courseEndpoints from '../../constants/courseEndpoints';
// assets
import courseMap from '../../static/BigDataRoadMap.svg';

function Tab(props) {
  return (
    <ChakraTab
      w="6vw"
      fontSize="md"
      lineHeight="short"
      letterSpacing="0.15em"
      borderBottomWidth="4px"
      _selected={{
        fontWeight: 'bold',
        color: '#324484',
        borderColor: '#324484',
      }}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    />
  );
}

function Home() {
  const history = useHistory();
  return (
    <HomePageContainer scale={graphScale}>
      <Tabs maxW="1440px" size="sm" colorScheme="facebook">
        <TabList mb={4} w="12vw">
          <Tab>地圖索引</Tab>
          <Tab>標籤索引</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <InfoContainer>
              <Description>
                本知識地圖分為基礎課程、核心課程、延伸課程與應用課程。
                <br />
                若為大數據知識初學者，可從基礎課程開始學習。若已有大數據基礎知識，可從核心課程開始學起。如已有大數據技術研究相關經驗者，則可以從延伸課程或是應用課程開始學習。
              </Description>
            </InfoContainer>
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
          </TabPanel>

          <TabPanel>
            <TagFilter />
          </TabPanel>
        </TabPanels>
      </Tabs>
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

const InfoContainer = styled.div`
  display: flex;
  width: 1440px;
  flex-direction: column;
  background-color: white;
  margin-left: 1.25rem;
`;

const Description = styled.p`
  display: block;
  letter-spacing: 1px;
  border-left: 1.5rem solid #6f7e98;
  padding-left: 1rem;
  margin-bottom: 3rem;
  font-size: 1.25rem;
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
