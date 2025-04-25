import styled from "styled-components"
const NumberSelector = ({error,setError, selectedNum,setSelectedNum}) => {
    const arr = [1,2,3,4,5,6];
    

    const numberSelectorHandler = (value) => {
        setSelectedNum(value);
        setError("");
    };
    return (
    <NumberSelectorContainer>
        <p>{error}</p>
        <div className="flex">
            {arr.map((value, i) => (
            <Box 
            isSelected = {value === selectedNum}
            key = {i}
                onClick = {()=>numberSelectorHandler(value)}> 
                {value}
            </Box>
    ))}</div>
    <p>Select Number</p>

    </NumberSelectorContainer>
  );
};

export default NumberSelector;

const NumberSelectorContainer = styled.div`
display: flex;
flex-direction: column;
align-items: end;
.flex{
    display: flex;
    gap: 24px;
    padding-top:15px ;
    margin-right: 10px;
}
p{
   font-size :24px ;
   font-weight: 700px;
   color:#941F28;
   margin-right: 10px;
}
`;

const Box = styled.div`
   height : 72px;
   width: 72px;
   border: 4px solid #941F28;
   border-radius: 15px;
   display: grid;
   place-items: center;
   font-size: 24px;
   color: ${(props)=> props.isSelected ? "white" : "#941F28"};
   font-weight: 700;
   background-color: ${(props)=> props.isSelected ? "#941F28" : "white"};

   `;