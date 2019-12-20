/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';

import Header from '../Header/index';
import Footer from '../Footer/index';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="login">
        <Header></Header>
        <img className="login__backgound"></img>
        <div className="login__info">
          <p className="login__titule">Login</p>
          <input className="login__inputName"></input>
          <input className="login__inputPassword"></input>
          <Button className="login__button">Ingresar</Button>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default (Login);