import React from 'react';
import './App.css';
import Home from '../Home/Home'
import Mission from '../Misson/Mission'
import Contact from '../Contact/Contact'
import 'tachyons'
import styled from "styled-components";
import WWA from '../WWA/WWA'
import { Switch, Route, withRouter } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App({location}) {
  return (
<Wrapper>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 300, exit: 300 }}
          classNames="fade"
        >
          <section className="route-section">
            <Switch location={location}>
            <Route path="/" exact component={Home} />
            <Route path="/WWA" exact component={WWA} />
            <Route path="/Mission" exact component={Mission} />
            <Route path="/Contact" exact component={Contact} />
            </Switch>
            </section>
            </CSSTransition>
      </TransitionGroup>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }
  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 300ms ease-in;
  }
  .fade-exit {
    opacity: 1;
  }
  .fade-exit.fade-exit-active { 
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
  div.transition-group {
    position: relative;
  }
  section.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
  }
`;

export default withRouter(App);