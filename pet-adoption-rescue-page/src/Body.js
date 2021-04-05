import React from "react"
import styled from "styled-components"
import animals  from "../src/Images/dogs-cats.jpeg"

function Body(){
    return(
        <StyledImage src={animals} width="1000" height="500" />
    )
}
export default Body;

const StyledImage = styled.img`
display: block;
  margin-left: auto;
  margin-right: auto;

`;

