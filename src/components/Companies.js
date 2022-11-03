import React, { useState } from 'react'
import styled from 'styled-components';
import TitleBlock from './TitleBlock';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

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
`;
const ImgContainer = styled.div`
  height: 100%;
  width: 80%;
  flex: 1;
`;

const Image = styled.img`
position: relative;
margin-top: 200px;
width: 100%;
height: 304px;
left: calc(65% - 1080px/2);
border-radius: 10px;
box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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

      <Carousel>
        <ImgContainer>
          <Image src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg" />

        </ImgContainer>
        <ImgContainer>
          <Image src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-mont-st-michel.jpg" />

        </ImgContainer>
        <ImgContainer>
          <Image src="https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-chateau-de-chenonceau.jpg" />

        </ImgContainer>
      </Carousel>

      
    </Container>
  )
}

export default Companies