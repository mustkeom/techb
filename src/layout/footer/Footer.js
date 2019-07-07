import React from 'react';
import Container from '@material-ui/core/Container';

export default () => {
  return (
    <div className="header footer">
      <Container maxWidth="lg">
        <ul className="navbar">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us</a>
          </li>
        </ul>
      </Container>
    </div>
  );
}