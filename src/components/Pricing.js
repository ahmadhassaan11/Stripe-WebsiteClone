import React from 'react'
import styled from 'styled-components';
import { reviewInfo } from '../data';
import InfoBlock from './InfoBlock';
import TitleBlock from './TitleBlock';
import { mobile } from "../responsive"

const Container = styled.div`
 display: flex;
  padding: 100px;
  background: #FFF;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 874px;
  ${mobile({ height: "1000px" })}
`;

const Info = styled.div`

  margin-left: 10%;
  justify-content: left;
  flex-direction: column;
  position: absolute;
  ${mobile({ marginLeft: "-20%" })}

`;

const InfoB = styled.div`

 display:grid;
 grid-template-rows:1fr 1fr ;
 grid-template-columns:1fr 1fr ;
 column-gap: 12px;
 overflow: hidden;
`;

const Pricing = () => {
  return (
    <Container>
      <Info>
        <TitleBlock
          title={"Pricing"}
          heading={"Set up your company for $500"}
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

export default Pricing