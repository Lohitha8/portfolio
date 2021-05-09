import './App.css';
import React, { Component, Fragment } from "react";
import Home from './components/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Body from './components/Body';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import { withRouter } from "react-router";
import Skills from './components/skills';

const HeaderWithRouter = withRouter(Header);

function App() {
  return (
    <div>
      <Router>
        <Fragment fluid className='home'>
          <HeaderWithRouter />
          <Route path='/About' component={About} />
          <Route path='/Skills' component={Skills} />
          <Route path='/Resume' component={Resume} />
          <Route path='/Projects' component={Projects} />
          <Route path='/Contact' component={Contact} />
          <Route exact path='/' component={Body} />

        </Fragment>
      </Router>
    </div>

  );
}

export default App;
