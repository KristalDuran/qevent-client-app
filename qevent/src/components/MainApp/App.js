/**
 * Filename: App.js
 * Author:
 * Date: 
 * Description: App
 */
import HomePage from "../../modules/HomePage/index";
import PropTypes from "prop-types";
import React from "react";
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
        <HomePage/>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default (App);
