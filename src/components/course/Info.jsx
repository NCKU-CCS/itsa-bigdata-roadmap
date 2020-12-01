import React from 'react';
import { useParams } from 'react-router-dom';
import styled from '@emotion/styled';

const Info = () => {
  const { courseId } = useParams();
  return (
    <InfoContainer>
      <CourseName>Course id: {courseId}</CourseName>
      <Information>
        自然語言處理（英語：Natural Language Processing，縮寫作
        NLP）是人工智慧和語言學領域的分支學科。此領域探討如何處理及運用自然語言；
        自然語言處理包括多方面和步驟，基本有認知、理解、生成等
      </Information>
    </InfoContainer>
  );
};

export default Info;

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: white;
  padding-left: 1vw;
`;

const CourseName = styled.h1`
  display: block;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 3rem;
`;

const Information = styled.p`
  display: block;
  width: 70%;
  letter-spacing: 1px;
  border-left: 10px solid #5e6179;
  padding: 0 1vw;
  font-size: 1rem;
  margin: 0 0 1vh 0;
`;
