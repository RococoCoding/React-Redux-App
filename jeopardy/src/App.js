import React from "react";
import styled from "styled-components";
import {connect} from "react-redux";
import {loadGame} from "./actions/actions";
import {Route, Switch, useHistory} from "react-router-dom";
import Board from "./components/board";

const StyledApp = styled.main`

` 

function App(props) {
  let history = useHistory();
  
  return (
    <StyledApp>
      <header>Jeopardy!</header>
      <Switch>
        <Route path='/round1'>
          <Board round={"round1"}/>
        </Route>
        <Route path='/'>
          <button onClick={()=>{
            history.push('/round1');
            props.loadGame();
          }}>Start Game</button>
        </Route>
      </Switch>
    </StyledApp>
  );
}

export default connect(()=>({}), {loadGame})(App);
