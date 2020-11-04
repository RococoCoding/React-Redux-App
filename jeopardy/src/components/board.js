import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {useHistory} from "react-router-dom";
import Question from "./questions";

const StyledBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-column-gap: 1%;
  grid-row-gap: 1%;
  width: 100%;
  margin: 2%;
`

function Board(props) {
  let history = useHistory;
  if (props.questions) {
    return (
      <StyledBoard>
        {props.questions.map((question, idx) => {
          return (
          <Question 
            key={idx}
            question={question.question}
            category={question.category.title}
          > 
          </Question>
        )})}
      </StyledBoard>
    )
  }
  else return (<div>Loading Board...</div>)
}

export default connect((state)=>{return {questions: state.questions}}, {})(Board);