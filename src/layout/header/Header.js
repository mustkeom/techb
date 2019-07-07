import React from 'react';
import Container from '@material-ui/core/Container';

export default () => {
  return (
    <div className="header top">
      <Container maxWidth="lg">
        <ul className="navbar">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Javascript</a>
          </li>
          <li>
            <a href="/">Css</a>
          </li>
          <li>
            <a href="/">ReactJs</a>
          </li>
        </ul>
      </Container>
    </div>
  );
}