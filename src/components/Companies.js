import React, { useState } from 'react'
import styled from 'styled-components';
import TitleBlock from './TitleBlock';
import Carousel from 'react-bootstrap/Carousel';
import { mobile } from "../responsive"

const Container = styled.div`
 display: flex;
  padding: 100px;
  background: #fff;
  
  display: flex;
  position: relative;
  overflow: hidden;
  height: 1124px;
`;

const Info = styled.div`

  margin-left: 10%;
  justify-content: left;
  flex-direction: column;
  position: absolute;
  ${mobile({  marginLeft: "-20%"  })}

`;
const ImgContainer = styled.div`
  height: 100%;
  justify-content: center;
  flex: 1;
`;

const Image = styled.img`
position: absolute;
margin-top: 0px;
width: 1080px;
height: 591px;
left: calc(50% - 1080px/2);
top: 350px;
border-radius: 10px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0);
${mobile({  marginTop: "0px", width: "358px", height: "195px", marginLeft: "93%"  })}
`;
const Companies = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Container>
      <Info>
        <TitleBlock
          title={"Start a US company from anywhere in the world"}
          heading={"Trusted by entrepreneurs in more than 140 countries"}
          desc={"From New York to New Delhi, thousands of people have started their businesses with Stripe Atlas."}
        />
      </Info>

      <ImgContainer>
        <Image src={"https://i.ibb.co/yWCYTfh/bmc.png"} />
      </ImgContainer>

      {/* <Carousel>
        <ImgContainer>
          <Image src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />

        </ImgContainer>
        <ImgContainer>
          <Image src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg" />

        </ImgContainer>
        <ImgContainer>
          <Image src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-chateau-de-chenonceau.jpg" />

        </ImgContainer>
      </Carousel> */}



    </Container>
  )
}

export default Companies