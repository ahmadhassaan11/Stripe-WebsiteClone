import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"
import { FaBars } from 'react-icons/fa'
import atlas from '../images/atlas.svg'
import { useGlobalContext } from '../context'

const Container = styled.div`
 margin-top: 10px;
  display: flex;
  position: relative;
  overflow: hidden;
    height: 50px;
    ${mobile({ height: "57px"})}

`;
const Wrapper = styled.div`
  margin-left: 10%;
  justify-content: left;
  flex-direction: row;
  position: absolute;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
`;


const Left = styled.div`
    flex:1;
    text-align: Left;
`;

const Logo = styled.h3`
    font-weight: bold;
    ${mobile({ fontSize: "16px" })}
`;


const Right = styled.div`
flex:1;
display: flex;
align-items:center;
margin-left: 30% ;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const BottomNav = styled.div`
flex:1;
display: flex;
align-items:right;
margin-left: 30%;
margin-top:60px ;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
    font-size: 14px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
    margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}

    &:hover{

color: grey; 
}
`

const Button = styled.button`

  font-size: 1rem;
  margin-left: 30% ;
  padding: 6px 12px 6px 6px;
  border-radius: 1rem;
  border-color: transparent;
  color: white;
  background: #ff7600;
  cursor: pointer;
  transition: all 0.3s linear;
  min-width: 90px;
justify-content: flex-end;
align-items:right ;

&:hover{

    background-color: black; 
}
`;

const ArrowBtn = styled.div`
   display: flex;
   margin-left: 40% ;
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


const Navbarr = () => {
    const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()
    const displaySubmenu = (e) => {
        const page = e.target.textContent
        const tempBtn = e.target.getBoundingClientRect()
        const center = (tempBtn.left + tempBtn.right) / 2
        const bottom = tempBtn.botton - 3
        openSubmenu(page, { center, bottom })
    }

    const handleSubmenu = (e) => {
        if (!e.target.classList.contains('menu')) {
            closeSubmenu()
        }
    }
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>stripe</Logo>
                </Left>

                <Right onMouseOver={handleSubmenu} onClick={openSidebar}>
                    <MenuItem className='menu' onMouseOver={displaySubmenu}>products</MenuItem>
                    <MenuItem className='menu' onMouseOver={displaySubmenu}>solutions</MenuItem>
                    <MenuItem className='menu' onMouseOver={displaySubmenu}>developers</MenuItem>
                    <MenuItem className='menu' onMouseOver={displaySubmenu}>resources</MenuItem>
                    <MenuItem className='menu' onMouseOver={displaySubmenu}>pricing</MenuItem>
                </Right>
                {/* <Button>Sign In</Button> */}
                <ArrowBtn>SignIn<span className="arrow"></span></ArrowBtn>
            </Wrapper>
        </Container>
    )
}

export default Navbarr