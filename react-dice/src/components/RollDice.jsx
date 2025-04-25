
import styled from "styled-components";

const RoleDice = ({roleDice, currentDice}) => {
    

    

    return (
        <DiceContainer>
            <div className="dice" onClick = {roleDice}>
                <img src={`/images/dice_${currentDice}.png`} alt="dice idk" />
            </div>
            <p>Click on dice to roll!</p>
        </DiceContainer>
    );

};

export default RoleDice;

const DiceContainer = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
align-items: center;
.dice{
    cursor: pointer;
}

p{
    font-size: 24px;
    color: #941F28;
    margin-top: 10px;
}
`;
