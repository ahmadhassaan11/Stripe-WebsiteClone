import React from 'react'
import { useGlobalContext } from '../context'
import styled from 'styled-components';
import { mobile } from "../responsive"

const Container = styled.div`
 display: flex;
  padding: 100px;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 874px;
`;

const Info = styled.div`
top: 0px;
  margin-left: 10%;
  justify-content: left;
  flex-direction: column;
  position: absolute;
  ${mobile({  marginLeft: "-20%"  })}
`;

const Heading = styled.div`
color: #0a2540;
margin-bottom: 0px;
margin-top: 0px;
font-weight: bold;
font-size: 50px;
${mobile({  maxWidth: "60%"  })}
`;

const Desc = styled.p`
color: #425466;
    margin: 20px 0px;
    width: 682px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
${mobile({  maxWidth: "50%"  })}

  `;

const HeroSvg = styled.div`
  position: absolute;
  width: 300vh;
  height: 65%;
  top: 150px;
  left: 0;
`
const ArrowBtn = styled.div`
   display: flex;
   width: 180px;
  color: white;
  background-color: #ff7600;
  padding: 3px 12px 6px 16px;
  border-radius: 20px;
  transition: all .3s linear;
  font-weight: bold;
  cursor: pointer;
  align-items: center;
  font-size: 14px;
  text-align:center ;
  
  
  & > .arrow {
    width: 6px;
  height: 6px;
  border-right: 2px solid white;
  border-bottom: 2px solid white;
  position: relative;
  transform: rotate(-45deg);
  margin: 0 6px;
  transition: all .3s ease;
  }
  
  & > .arrow::before {
    display: block;
  background-color: currentColor;
  width: 3px;
  transform-origin: bottom right;
  height: 2px;
  position: absolute;
  opacity: 0;
  bottom: calc(-2px / 2);
  transform: rotate(45deg);
  transition: all .3s ease;
  content: "";
  right: 0;
  }
  &:hover > .arrow {
  transform: rotate(-45deg) translate(4px, 4px);
  border-color: text-hover-color;
}
&:hover > .arrow::before {
  opacity: 1;
  width: 8px;
}

&:hover {
  background-color: #0a2540;
  color: #fff;
}
`
const Hero = () => {
  const { closeSubmenu } = useGlobalContext()
  return (

    <Container onMouseOver={closeSubmenu}>
      <Info>
        <Heading>
          Turn your idea into a startup
        </Heading>
        <Desc> Stripe Atlas is a powerful, safe, and easy-to-use platform for forming a company. By removing lengthy paperwork, legal complexity, and numerous fees, Stripe Atlas helps you launch your startup from anywhere in the world.</Desc>
        <ArrowBtn>Start your company<span className="arrow"></span></ArrowBtn>
      </Info>
      <HeroSvg className='hero' />
    </Container>
  )
}

export default Hero
