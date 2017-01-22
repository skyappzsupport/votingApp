import React from 'react';
import { Link } from 'react-router';

export default class Footer extends React.Component {
  render() {
    return (
      <div className="blue-grey darken-4">
        <div className="container section teal-text">
          <div className="col s6">
            <h5>A Free Code Camp Challenge</h5>
            <h4>written by <strong>Daniel Deutsch</strong></h4>
          </div>
        </div>
        <div className="footer-copyright">
          <div className="container">
            <a href="https://github.com/DDCreationStudios" target="_blank">
              Github /
            </a>
            <a
              href="https://www.freecodecamp.com/ddcreationstudios"
              target="_blank"
            >
              FreeCodeCamp /
            </a>
            <a href="http://codepen.io/ddcreationstudios/" target="_blank">
              CodePen /
            </a>
            <a
              href="https://www.linkedin.com/in/daniel-deutsch-b95611127"
              target="_blank"
            >
              LinkedIn /
            </a>
            <a href="http://ddcreationstudios.at/" target="_blank">Site</a>
          </div>
        </div>
      </div>
    );
  }
}