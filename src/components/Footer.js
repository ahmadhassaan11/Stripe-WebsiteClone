import { ChatBubble, NearMe } from "@material-ui/icons";
import styled from "styled-components";
// import { mobile } from "../responsive";
// import { Link } from "react-router-dom";

const Container = styled.div`
 display: flex;
  padding: 100px;
  background: #fff;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 960px;
`;

const Info = styled.div`

  margin-left: 10%;
  justify-content: left;
  flex-direction: column;
  position: absolute;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
    width: 40%;
    float: left;
  `;

const Logo = styled.p`
 font-size: 30px;
  font-weight:bold;
  color: #0a2540;
  margin-bottom: 20px;`;

const Desc = styled.p`
    margin: 20px 0px;
    display: flex ;
    color: #0a2540;
  `;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 60%;
  `;

const ListItem = styled.li`
  width: 30%;
  
display:grid;
grid-template-rows:1fr 1fr ;
grid-template-columns:1fr 1fr ;
column-gap: 12px;
overflow: hidden;
color: #0a2540;
  
  &:hover{
      color: #8c9eb1;
      cursor: pointer;   
  }
  `;

const Footer = () => {
  return (
    <Container>
      <Info>
        <Left>
          <Logo>stripe
          </Logo>
          <Desc>
            <NearMe />  Portugal
          </Desc>
          <Desc>
            <ChatBubble />  English (United States)
          </Desc>

          <Desc>© 2022 Stripe, Inc.</Desc>
        </Left>

        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>

          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>

          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>

        </List>
      </Info>
    </Container>
  );
};

export default Footer;
