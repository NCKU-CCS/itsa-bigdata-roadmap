import React from 'react';
import styled from '@emotion/styled';
import { Text } from '@chakra-ui/react';

function Nav() {
  return (
    <NavContainer
      onClick={() => {
        window.location.replace('/');
      }}
    >
      <Text color="white" fontSize="24px" letterSpacing="3px">
        大數據課程地圖
      </Text>
    </NavContainer>
  );
}

export default Nav;

const NavContainer = styled.div`
  width: 100vw;
  min-width: 1440px;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 20px;
  background-color: #324484;
  :hover {
    cursor: pointer;
  }
`;
