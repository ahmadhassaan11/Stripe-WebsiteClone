import React from 'react'
import styled from "styled-components";
import { reviewInfo } from '../data';
import InfoBlock from './InfoBlock';
import { mobile } from "../responsive"
import Card from './Card'

const Container = styled.div`
  display: flex;
  padding: 100px;
  background: #fff;
  justify-content: center;
  ${mobile({ height: "1596px", width: "390px", flexDirection: "column"})}
`;

const Info = styled.div`
margin-left: 5%;
max-width: 100%;
  flex-direction: column;
  ${mobile({  marginLeft: "-40%"  })}
`;

const CardBlock = styled.div`
margin-left: 5%;
width: 40%;
  flex-direction: row;
  ${mobile({  marginLeft: "-40%"  })}
`;

const Review = () => {
  return (

    <Container>
      <Info>
        {reviewInfo.map((item) => (
          <InfoBlock item={item} key={item.id}/>
        ))}
      </Info>
      <CardBlock><Card/></CardBlock>
      

    </Container>
  )
}

export default Review