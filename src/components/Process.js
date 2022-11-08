import React from 'react'
import styled from 'styled-components';
import { reviewInfo } from '../data';
import InfoBlock from './InfoBlock';
import TitleBlock from './TitleBlock';
import { mobile } from "../responsive"

const Container = styled.div`
 display: flex;
  padding: 100px;
  background: #f6f9fc;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 775px;
`;

const Info = styled.div`

  margin-left: 10%;
  justify-content: left;
  flex-direction: row;
  position: absolute;
  ${mobile({  marginLeft: "-20%"  })}

`;

const InfoB = styled.div`

 display:grid;
 grid-template-rows:1fr 1fr 1fr ;
 grid-template-columns:1fr 1fr 1fr ;
 column-gap: 12px;
 overflow: hidden;
 width:60% ;
`;


const Process = () => {
  return (
    <Container>
      <Info>
        <TitleBlock
          title={"What's the process?"}
          heading={"Start your company in a few clicks"}
          desc={"With Stripe Atlas, your company can be set up within days. We help with all the paperwork."}
        />
        <InfoB>
          {reviewInfo.map((item) => (
            <InfoBlock item={item} key={item.id} />
          ))}
        </InfoB>
      </Info>
    </Container>
  )
}

export default Process