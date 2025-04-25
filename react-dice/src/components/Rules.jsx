import React from 'react'
import styled from 'styled-components'
const Rules = () => {
  return (
    <RulesContainer>
        <h2>Da rules:</h2>
        <div className="text">
            <p>If you gamble right, you get the points. If not then -2. hahaha</p>
        </div>
    </RulesContainer>
  )
}

export default Rules

const RulesContainer = styled.div`
max-width: 800px;
margin: 0 auto;
border-radius: 15px;
margin-top: 15px;
 background-color :#941F28;
 color: white;
 padding: 12px;
 h2{
    font-size: 24px;
 }
 .text{
    font-size: 20px;
    margin-top: 10px;
 }

`;