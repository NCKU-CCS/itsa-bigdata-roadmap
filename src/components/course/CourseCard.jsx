import React from 'react';
import styled from '@emotion/styled';

const CourseCard = () => (
  <CourseContainer>
    <Information>
      <Row style={{ color: '#000000' }}>
        <Circle />
        影片
      </Row>
      <Row style={{ fontSize: '0.94rem' }}>OpenCourseWare(NTHU,OCW)</Row>
      <Row style={{ fontSize: '1.25rem' }}>共識演算法之最後一個了 - Zookeeper的ZAB</Row>
      <Row>
        <b>課程來源：</b><Website>日本東北大學情報處理科學</Website>
      </Row>
      <Row>
        <b>演講者：</b>Tiago Gama Rodrigues
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
  width: 87.5rem;
  margin: 0 0 2rem 1.25rem;
  border-radius: 10px;
  background-color: white;
  box-shadow: 1px 1px 3px #bebebe;
  padding: 1.5rem 2.5rem;
  color: #2F2F2F;
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
  background-color: #64379F;
  border-radius: 50%;
  margin-right:0.5rem;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
  font-size: 1rem;
`;

const Website = styled.a`
  :hover{
    color: #64379F;
    cursor: pointer;
  }
`;

const Source = styled.iframe`
  border-radius: 0.94rem;
  :hover{
    box-shadow: 3px 3px 6px #bebebe;
  }
`;
