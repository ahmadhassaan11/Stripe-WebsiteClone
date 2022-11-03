import React from 'react'
import styled from "styled-components";

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
    margin: 20px 0px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
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