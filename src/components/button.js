import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  background: #2196f3;
  box-shadow: 0px 4px 12px #4fc3f752;
  border-radius: 4px;
  color: white;
  margin: 0 1em;
  padding: 1rem;
  border: none;
  cursor: pointer;

  &:hover {
    background: #1487e3;
  }
  &:focus {
    outline: 2px solid black;
  }
`;

export default function Button({ children, ...props }) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
