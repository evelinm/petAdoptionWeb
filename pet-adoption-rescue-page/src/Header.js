import React from "react"
import styled from "styled-components";
import NavBar from "../src/NavBar"
import Body from "../src/Body"


function Header(){
    return (
        <div>
        <StyledHeader>
        <StyledTitle>831 Pawdyguard Rescue 501c3  <i className="fas fa-cat"></i></StyledTitle>
        <NavBar/>
        </StyledHeader>
        <Body/>
        </div>

    );

}
export default Header;

const StyledTitle = styled.div`
display: inline-block;
`;

const StyledHeader = styled.div`
  background-color: black;
  font-size: 32px;
  color: white;
  height: 80px;
  padding-left: 30px;
  padding-top: 30px;
  padding-right:30px;
  

`;

