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
import loginBackground from './../../assets/img/loginBackground.png';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="login">
        <img className="login__backgound" src={loginBackground}/>
        <Header isLogin={true} ></Header>
        <div className="login__info">
          <p className="login__info__titule">Login</p>
          <input className="login__info__inputName" placeholder='Usuario'></input>
          <input className="login__info__inputPassword" placeholder='Contraseña'></input>
          <Button href='/welcome' className="login__info__button">Ingresar</Button>
        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default (Login);