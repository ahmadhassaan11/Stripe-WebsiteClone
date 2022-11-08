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

      {/* <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Second slide&bg=282c34"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=Third slide&bg=20232a"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}


    </Container>
  )
}

export default Companies