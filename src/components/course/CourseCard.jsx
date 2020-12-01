import React from 'react';
import styled from '@emotion/styled';

const CourseCard = () => (
  <CourseContainer>
    <Information>
      <Row>
        <Circle />
        影片
      </Row>
      <Row>OpenCourseWare(NTHU,OCW)</Row>
      <Row>
        <SourceName>共識演算法之最後一個了 - Zookeeper的ZAB</SourceName>
      </Row>
      <Row>
        <b>課程來源</b>：日本東北大學情報處理科學
      </Row>
      <Row>
        <b>演講者</b>：Tiago Gama Rodrigues
      </Row>
      <Row>
        自然語言處理（英語：Natural Language Processing，縮寫作
        NLP）是人工智慧和語言學領域的分支學科。此領域探討如何處理及運用自然語言；
        自然語言處理包括多方面和步驟，基本有認知、理解、生成等
      </Row>
    </Information>
    <Source src="https://www.youtube.com/embed/tgbNymZ7vqY" />
  </CourseContainer>
);

export default CourseCard;

const CourseContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  margin: 1rem auto;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 3px #bebebe;
  padding: 1rem 2rem;
  :hover {
    box-shadow: 2px 2px 6px #696969;
  }
`;

const Information = styled.p`
  display: flex;
  flex-direction: column;
  width: 60%;
  letter-spacing: 1px;
  padding: 0 1rem;
  font-size: 1rem;
`;

const Circle = styled.span`
  display: inline-block;
  height: 1rem;
  width: 1rem;
  background-color: #4949de;
  border-radius: 50%;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
`;

const SourceName = styled.h3`
  font-weight: bold;
  font-size: 1.2rem;
`;

const Source = styled.iframe`
  padding: 0 1rem;
`;
