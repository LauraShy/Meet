import React from 'react';
import { Row } from 'react-bootstrap';
import meet_logo from './images/meet_logo.png';

function Header(props) {
  return (
    <header className="header">
      <Row>
        <img src={meet_logo} className="meet-logo" alt="meet-logo"></img>
      </Row>
    </header>
  );
}

export default Header;