import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

import LandingApp from './apps/landingApp';
import ProjectsApp from './apps/projectsApp';
import EduApp from './apps/projects/eduApp';
import UiuxApp from './apps/projects/uiuxApp';
import MiscApp from './apps/projects/miscApp';
import AboutApp from './apps/aboutApp';

import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar className='short' inverse collapseOnSelect fixedTop>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to='/home'>
                  <img src={logo} className='logo' alt='logo'/>
                  <h3 className='title'>Design Department</h3>
                </Link>
              </Navbar.Brand>
            <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <LinkContainer to='/home'>
                  <NavItem className='page' eventKey={1}>Home</NavItem>
                </LinkContainer>
                <LinkContainer to='/projects'>
                  <NavDropdown className='page' inverse eventKey={2} title="Projects">
                    <LinkContainer to='/edu'><MenuItem eventKey={2.1}>Design x Education</MenuItem></LinkContainer>
                    <LinkContainer to='/uiux'><MenuItem eventKey={2.2}>UI/UX Research</MenuItem></LinkContainer>
                    <LinkContainer to='/misc'><MenuItem eventKey={2.3}>Miscellaneous</MenuItem></LinkContainer>
                  </NavDropdown>
                </LinkContainer>
                <LinkContainer to='/about'>
                  <NavItem className='page' eventKey={3}>About</NavItem>
                </LinkContainer>
              </Nav>
            </Navbar.Collapse>
            <Nav pullRight>
              <NavItem eventKey={1} href="#">
                {/*Medium*/}
              </NavItem>
              <NavItem eventKey={2} href="#">
                {/*Insta or whatever*/}
              </NavItem>
            </Nav>
          </Navbar>
          <Route exact path='/' component={LandingApp} />
          <Route path='/home' component={LandingApp} />
          <Route path='/projects' component={ProjectsApp} />
          <Route path='/edu' component={EduApp} />
          <Route path='/uiux' component={UiuxApp} />
          <Route path='/misc' component={MiscApp} />
          <Route path='/about' component={AboutApp} />
        </div>
      </Router>
    );
  }
}
