import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  margin: 3px;
  width: 540px;
  height: 184px;
  position: relative;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.p`
color: #ff7600;
margin-bottom: 0px;
margin-top: 15px;
font-weight: bold;
`;

const Heading = styled.h3`
color: #425466;
margin-bottom: 0px;
margin-top: 15px;
font-weight: bold;
`;

const Desc = styled.p`
color: #425466;
    margin: 20px 0px;
    width: 682px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  `;

const TitleBlock = ({title,heading,desc}) => {
  return (
    <Container>
      <Info>
      <Title>{title}</Title>
      <Heading>{heading}</Heading>
      <Desc>{desc}</Desc>
      </Info>
      
  </Container>
  )
}

export default TitleBlock