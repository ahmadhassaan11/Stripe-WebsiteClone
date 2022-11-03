import React from 'react'
import atlas from '../images/atlas.svg'
import styled from 'styled-components'
import { mobile } from "../responsive"

const Container = styled.div`
display: flex;
  position: relative;
  overflow: hidden;
    height: 200px;
    ${mobile({ height: "47px" })}

`;
const Wrapper = styled.div`
  margin-left: 10%;
  justify-content: left;
  flex-direction: row;
  position: absolute;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
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

const Navbar2 = () => {

    return (
        <Container>
            <Wrapper>
                <BottomNav>
                    <img src={atlas} />   <Logo style={{ color: "#ff7600", marginTop: "5px", marginLeft: "15px" }}> Atlas</Logo>

                    <Right>
                        <MenuItem style={{ marginLeft: "500px" }}>overview</MenuItem>
                        <MenuItem style={{ color: "#ff7600" }}>guides</MenuItem>
                        <MenuItem style={{ color: "#ff7600" }}>docs</MenuItem>
                    </Right>
                </BottomNav>
            </Wrapper>
        </Container>
    )
}

export default Navbar2
