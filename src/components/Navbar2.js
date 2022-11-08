import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive"
import atlas from '../images/atlas.svg'

const Container = styled.div`
display:flex;
 margin-top: 10px;
  position: relative;
  overflow: hidden;
    height: 50px;
    ${mobile({ height: "57px", marginLeft: "-30px" })}

`;
const Wrapper = styled.div`
  margin-left: 15%;
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
justify-content: center;
margin-left: 30% ;
justify-content: flex-end;
${mobile({ flex: 2, justifyContent: "center", marginBottom: "40px", marginLeft: "60%"  })}
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



const Navbar2 = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                {/* <img src={atlas} /> */}
                  <Logo style={{ color: "#ff7600", marginTop: "5px", marginLeft: "5px" }}> Atlas</Logo>
                </Left>

                <Right>
                    <MenuItem >overview</MenuItem>
                    <MenuItem style={{ color: "#ff7600" }}>guides</MenuItem>
                    <MenuItem style={{ color: "#ff7600" }}>docs</MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar2