import React from "react"
import styled from "styled-components";


function Header(){
    return (
        <div>
        <StyledHeader>
        831 Pawdyguard Rescue 501c3
        </StyledHeader>
      
        </div>

    );

}
export default Header;



// Styled component named StyledButton
const StyledHeader = styled.div`
  background-color: black;
  font-size: 32px;
  color: white;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
