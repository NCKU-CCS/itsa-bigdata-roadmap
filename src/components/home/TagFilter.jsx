import React, { useState, useMemo } from 'react';
import styled from '@emotion/styled';
import { Box, Flex, Button as ChakraButton, Badge } from '@chakra-ui/react';
import courseData from '../../constants/courseData';

/* eslint-disable react/jsx-props-no-spreading */
function Stack(props) {
  return <Flex direction="column" {...props} />;
}
function Button(props) {
  return (
    <ChakraButton
      size="sm"
      fontWeight="medium"
      lineHeight="short"
      letterSpacing="0.15em"
      colorScheme="facebook"
      {...props}
    />
  );
}

function TagFilter() {
  const [tags, setTags] = useState([]);

  const data = useMemo(
    () => Object.values(courseData).flatMap((course) => course.sourceList),
    [],
  );

  const handleClick = (tag) => {
    setTags((preState) => {
      if (!preState.includes(tag) && preState.length < 3) {
        return [...preState, tag];
      }
      return preState.filter((e) => e !== tag);
    });
  };

  return (
    <Stack mr={5} pb={2} width="1440px" minH="570px">
      <Stack
        px={3}
        pt={3}
        pb={2}
        w="43vw"
        background="rgba(218, 222, 229, 0.1)"
        border="1px solid #DADEE5"
        borderRadius="10px"
      >
        <Box mb={4} fontWeight="bold" lineHeight="short" letterSpacing="0.15em">
          最多可選擇三個標籤：
        </Box>
        <Flex mb={3}>
          <Button
            mr={4}
            color={tags.includes('製造業') ? 'white' : '#314e89'}
            variant={tags.includes('製造業') ? 'solid' : 'outline'}
            onClick={() => {
              handleClick('製造業');
            }}
          >
            #製造業
          </Button>
          <Button
            mr={4}
            color={tags.includes('綜合領域') ? 'white' : '#314e89'}
            variant={tags.includes('綜合領域') ? 'solid' : 'outline'}
            onClick={() => {
              handleClick('綜合領域');
            }}
          >
            #綜合領域
          </Button>
          <Button
            mr={4}
            color={tags.includes('教育服務業') ? 'white' : '#314e89'}
            variant={tags.includes('教育服務業') ? 'solid' : 'outline'}
            onClick={() => {
              handleClick('教育服務業');
            }}
          >
            #教育服務業
          </Button>
          <Button
            color={tags.includes('金融及保險業') ? 'white' : '#314e89'}
            variant={tags.includes('金融及保險業') ? 'solid' : 'outline'}
            onClick={() => {
              handleClick('金融及保險業');
            }}
          >
            #金融及保險業
          </Button>
        </Flex>
        <Flex mb={4}>
          <Button
            mr={4}
            color={tags.includes('資訊及通訊傳播業') ? 'white' : '#314e89'}
            variant={tags.includes('資訊及通訊傳播業') ? 'solid' : 'outline'}
            onClick={() => {
              handleClick('資訊及通訊傳播業');
            }}
          >
            #資訊及通訊傳播業
          </Button>
          <Button
            mr={4}
            color={
              tags.includes('專業、科學及技術服務業') ? 'white' : '#314e89'
            }
            variant={
              tags.includes('專業、科學及技術服務業') ? 'solid' : 'outline'
            }
            onClick={() => {
              handleClick('專業、科學及技術服務業');
            }}
          >
            #專業、科學及技術服務業
          </Button>
          <Button
            color={
              tags.includes('醫療保健及社會工作服務業') ? 'white' : '#314e89'
            }
            variant={
              tags.includes('醫療保健及社會工作服務業') ? 'solid' : 'outline'
            }
            onClick={() => {
              handleClick('醫療保健及社會工作服務業');
            }}
          >
            #醫療保健及社會工作服務業
          </Button>
        </Flex>
      </Stack>
      <Flex>
        {tags.sort().map((tag, index) => (
          <Box
            key={tag}
            my={10}
            fontSize="2xl"
            fontWeight="semibold"
            lineHeight="short"
            letterSpacing="0.15em"
          >
            {`#${tag}${index !== tags.length - 1 ? '、' : ''}`}
          </Box>
        ))}
      </Flex>
      {data.map((course) => {
        const { tags: courseTags } = course;
        if (
          tags.some((e) => courseTags.includes(e)) ||
          (tags.includes('綜合領域') && courseTags.length > 4)
        ) {
          return (
            <CourseCardContainer key={course.title + course.presenter}>
              <Information>
                <Row style={{ color: '#000000' }}>
                  <Circle
                    style={{
                      backgroundColor: `${
                        course.category === '影片' ? '#64379F' : '#37999F'
                      }`,
                    }}
                  />
                  {course.category}
                </Row>
                <Row style={{ fontSize: '0.94rem' }}>{course.platform}</Row>
                <Row style={{ fontSize: '1.25rem' }}>{course.title}</Row>
                <Row>
                  {course.tags.length > 4 ? (
                    <Badge
                      colorScheme="purple"
                      mr={4}
                      px={2}
                      py={1}
                      fontSize="14px"
                      fontWeight="500"
                      letterSpacing="2.1px"
                      color="#324484"
                      bgColor="rgba(150, 165, 215, 0.25)"
                      borderRadius="6px"
                    >
                      #綜合領域
                    </Badge>
                  ) : (
                    course.tags.map((tag) => (
                      <Badge
                        key={tag}
                        colorScheme="purple"
                        mr={4}
                        px={2}
                        py={1}
                        fontSize="14px"
                        fontWeight="500"
                        letterSpacing="2.1px"
                        color="#324484"
                        bgColor="rgba(150, 165, 215, 0.25)"
                        borderRadius="6px"
                      >
                        #{tag}
                      </Badge>
                    ))
                  )}
                </Row>
                <Row>
                  <b style={{ whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>
                    課程來源：
                  </b>
                  <CourseLink
                    href={course.link}
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {course.link}
                  </CourseLink>
                </Row>
                <Row>
                  <b>演講者：</b>
                  {course.presenter}
                </Row>
                <Row>{course.description}</Row>
              </Information>
              <a href={course.link} target="_blank" rel="noreferrer noopener">
                <Source
                  src={
                    // eslint-disable-next-line global-require, import/no-dynamic-require
                    require(`../../static/pic/${course.pictureName}`).default
                  }
                />
              </a>
            </CourseCardContainer>
          );
        }
        return null;
      })}
    </Stack>
  );
}

export default TagFilter;

const CourseCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 97%;
  margin: 0 0 2rem;
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
  width: 100%;
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
    cursor: pointer;
  }
`;
