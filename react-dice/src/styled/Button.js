import styled from "styled-components";
export const Button = styled.button`
min-width: 220px;
border-radius: 15px;
color: white;
border-color: #941F28;
background-color:#941F28;
padding-top: 10px;
padding-right: 18px;
padding-bottom: 10px;
padding-left: 18px;
font-family: 'Pixelify Sans';
font-size: 20px;
cursor: pointer;
transition: 0.4s background ease-in;

&:hover{
   background-color: white;
   border: 5px #941F28 solid;
   color: #941F28;
   transition: 0.3s background ease-in;
}
`;