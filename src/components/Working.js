import React from 'react'
import styled from "styled-components";
import { reviewInfo } from '../data';
import InfoBlock from './InfoBlock';
import TitleBlock from './TitleBlock';

const Container = styled.div`
 display: flex;
  padding: 100px;
  background: #f6f9fc;
  
  display: flex;
  position: relative;
  overflow: hidden;
  height: 1467px;
`;

const Info = styled.div`

  margin-left: 10%;
  justify-content: left;
  flex-direction: column;
  position: absolute;
`;

const ImgContainer = styled.div`
  height: 100%;
  justify-content: center;
  flex: 1;
`;

const Image = styled.img`
position: absolute;
margin-top: 555px;
width: 1080px;
height: 591px;
left: calc(50% - 1080px/2);
top: 20px;
border-radius: 10px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
`;


const Working = () => {
  return (
    <Container>
      <Info>
        <TitleBlock
          title={"How it works"}
          heading={"Get going in about 10 minutes"}
          desc={" We guide you through the essentials and handle the rest. Spend 10 minutes filling out a bit of information, and then we’ll create the legal framework for your company."}
        />
        {reviewInfo.map((item) => (
          <InfoBlock item={item} key={item.id} />
        ))}
      </Info>

      <ImgContainer>
        <Image src={"https://images.ctfassets.net/fzn2n1nzq965/J7nlBa2rUL2YNmiCov4tM/51db6d4260afd22da7f5cbed90191dd8/atlas_home_rocketrides.png?q=80&fm=webp&w=1080"} />
      </ImgContainer>
    </Container>
  )
}

export default Working