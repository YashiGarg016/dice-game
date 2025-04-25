import styled from "styled-components";
import { Button } from "../styled/Button";

const Startgame = ({toggle}) => {
  return (
    <Container>
      <div><img 
       src="/images/cutedices.png"/></div>
      
       <div className="content">
        <h1 style={{color: '#941F28'}}>
          EPIC DICE GAME
        </h1>
        <Button
        onClick={toggle}
        > Play Now </Button>
       </div>
    </Container>
  )
}

export default Startgame;

const Container = styled.div`
max-width:1180px;
display: flex;
margin: 0 auto;
height: 100vh;
align-items: center;
justify-content: center;

.content {
  font-size: 40px;
  white-space: nowrap;
}
`;
