import React from 'react';
import { Router } from 'react-router-dom';
import Routers from './Routers';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

const Headers = styled.header`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px 0px;
`;

const Titles = styled.div`
  font-size: 23px;
  font-weight: bold;
  font-family: "Dancing Script";
  padding: 0px 5px;
  margin-top: 5px;
  margin-left: 10px;
`;

const Icons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.div`
  padding: 3px 5px;
  margin: 0px 3px;
  border: 2px solid black;
  border-radius: 15px;
`;

function App() {
  return (
    <Wrapper>
      <Headers>
        <Titles>Hanbyeol_0319</Titles>
        <Icons>
          <Icon>Instagram</Icon>
          <Icon>Github</Icon>
          <Icon>Blog</Icon>
        </Icons>
      </Headers>
      <Routers />
    </Wrapper>
  );
}

export default App;
