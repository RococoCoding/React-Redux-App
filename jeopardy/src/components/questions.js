import React from "react";
import styled from "styled-components";

const StyledQ = styled.div`
  h3 {
    font-weight: bold;
  }
`

export default function Questions(props) {
  const {question, category} = props;
  function selectQuestion() {

  }
  return (
    <StyledQ onClick={selectQuestion}>
      <h3>{category}</h3>
      <p>{question}</p>
    </StyledQ>
  )
}