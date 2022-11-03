import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
 display: flex;
  padding: 100px;
  background: #f6f9fc;
  display: flex;
  position: relative;
  overflow: hidden;
  height: 345px;
`;

const Info = styled.div`

  margin-left: 10%;
  justify-content: left;
  flex-direction: column;
  position: absolute;
`;

const Title = styled.p`
  font-size: 30px;
  font-weight:bold;
  color: #0a2540;
  margin-bottom: 20px;
`;


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

const GetStarted = () => {
    return (
        <Container>
          <Info>
            <Title>Ready to get started?</Title>
            <ArrowBtn>Start your company<span className="arrow"></span></ArrowBtn>
    
            </Info>
        </Container>
    );
};

export default GetStarted;
