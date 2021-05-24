import React from "react";
import styled from "styled-components";
const Label = styled.label`
  display: block;
  text-align: left;
`;

const StyledInput = styled.input`
  box-shadow: 0px 2px 2px #a3a3a329;
  border-radius: 4px;
  padding: 0.75rem 1rem;
  border: 1px solid #cccccc;
  display: "block";
  &:focus {
    border-color: black;
  }
`;
export default function Input({ children, ...props }) {
  const id = children?.toLowerCase().replace(" ", "-");
  return (
    <>
      <Label htmlFor={id}>{children}</Label>
      <StyledInput id={id} {...props} />
    </>
  );
}
