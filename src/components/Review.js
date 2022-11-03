import React from 'react'
import styled from "styled-components";
import { reviewInfo } from '../data';
import InfoBlock from './InfoBlock';

const Container = styled.div`
  display: flex;
  padding: 100px;
  background: #fff;
  justify-content: center;
`;

const Info = styled.div`
margin-left: 5%;
  flex-direction: column;
`;

const h3 = styled.div`
      margin: 0;
      color: #4a535c;
    `

const Card = styled.div`
margin-top: 230px ;
margin-left:20px ;
      width: 40%;
      height: fit-content;
      min-width: 400px;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 0 17px rgba(1, 1, 1, 0.15);
      `

const Top = styled.div`
        background-image: url(https://avatars.githubusercontent.com/u/70345755?v=4);
        background-position: center center;
        background-size: 500px auto;
        background-repeat: no-repeat;
        height: 200px;
        background-color: white;
      `

const Bottom = styled.div`
        padding: 0px;
        color: #908d91;
  `
const p = styled.div`
          margin: 35px 0;       
  `
const ContentTop = styled.div`
          display: flex;
  `
const Avatar = styled.div`
            height: 96px;
            width: 96px;
            min-width: 96px;
            background-color: white;
            border-radius: 0%;
            display: inline-block;
            margin-right: 20px;
            background-image: url(https://avatars.githubusercontent.com/u/70345755?v=4);
            background-position: center center;
            background-size: 96px;      
  `
const Title = styled.div`
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            `
// const p = styled.div`
//       margin: 0;
//     `

const Review = () => {
  return (

    <Container>
      <Info>
        {reviewInfo.map((item) => (
          <InfoBlock item={item} key={item.id} />
        ))}
      </Info>
      <Card >
        <Bottom >
          <ContentTop>
            <Avatar></Avatar>
            <div className="test"></div>
            <Title>
              <p>"Company formation through Stripe Atlas is streamlining the shift toward remote work, helping founders all over the world participate in the opportunities abundant in Silicon Valley.”

                <b>Jessica Verrilli</b>, General Partner, GV</p>
            </Title>
          </ContentTop>
        </Bottom>
      </Card>

    </Container>
  )
}

export default Review