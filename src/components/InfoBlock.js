import React from 'react'
import styled from "styled-components";
import { mobile } from "../responsive"

const Container = styled.div`
  
  margin: 3px;
  width: 540px;
  max-width: 540px ;
  height: 184px;
  position: relative;
  margin-right:10px ;

  @media screen and (max-width: 1124px) {
   
    }
`;

const Info = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Logo = styled.div`
  position: top;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
`;

const Title = styled.p`
color: #425466;
left: 0;
margin-bottom: 0px;
margin-top: 15px;
font-weight: bold;
`;

const Desc = styled.p`
color: #425466;
    display: block;
    margin-block-start: 10px;
    margin-block-end: 60px;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    ${mobile({ width: "60%" })}
  `;

const InfoBlock = ({ item }) => {
    return (
        <Container>
            <Info>
                <Logo> {item.logo}</Logo>
                <Title>{item.title}</Title>
                <Desc>{item.desc}</Desc>
            </Info>
        </Container>
    )
}

export default InfoBlock