import React from "react"
import styled from "styled-components"

function NavBar(){

return (
    <StyledNavBar>
        <StyledLinks href="/">Home</StyledLinks>
        <StyledLinks href="/Adoption">Adoption</StyledLinks>
        <StyledLinks href="/Donations">Donations</StyledLinks>
        <StyledLinks href="/FAQ"> FAQ</StyledLinks>
        
    </StyledNavBar>
)
}
export default NavBar;

const StyledNavBar = styled.div`
display: flex; 
justify-content: flex-end;
display: inline-block;
float:right;
`;

const StyledLinks = styled.a`
  font-size: 32px;
  color: white !important;
  padding-left: 15px;
`;