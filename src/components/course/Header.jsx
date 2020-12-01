import React from 'react';
import styled from '@emotion/styled';

const Header = () => (
  <HeaderContainer>
    <Title>大數據課程地圖</Title>
  </HeaderContainer>
);

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1vw;
  height: 7vh;
  width: 100vw;
  background-color: #313772;
`;

const Title = styled.h1`
  color: white;
  font-weight: bold;
  letter-spacing: 3px;
  font-size: 2rem;
`;
