import React from 'react'
import styled from 'styled-components';
import { mobile } from "../responsive"

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
${mobile({ width: "60%"})}
`;

const Desc = styled.p`
color: #425466;
    margin: 20px 0px;
    width: 682px;
    display: block;
    margin-block-start: 10px;
    margin-block-end: 60px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    ${mobile({ width: "60%"})}
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