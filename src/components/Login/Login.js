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
import { login } from '../../API/api-calls';
import Welcome from '../WelcomePage';
import Events from '../Events';

class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userName:'',
      password:'',
      user:null
    }
  }

  onLogin(){
    login(
      this.state.userName,
      this.state.password,
      response => {
        if (response) {
          this.setState({user:response.data.content[0]});
          if (this.state.user.Rol === 'Cliente') {
            this.setState({client:true});
          }
        }
      },
      error => {
        //TODO
      }
    )
  }

  onChangeUser(event){
    this.setState({userName:event.target.value});
  }
  
  onChangePassword(event){
    this.setState({password:event.target.value});
  }

  render() {
    return (
      this.state.user ? 
      (
        !this.state.client ?
        (<Welcome user={this.state.user}></Welcome>) :
        (<Events user={this.state.user}></Events>)
      ) :  
      (
        <div className="login">
          <img className="login__backgound" alt='' src={loginBackground}/>
          <Header isLogin={true} ></Header>
          <div className="login__info">
            <p className="login__info__titule">Login</p>
            <input className="login__info__inputName" placeholder='Usuario' onChange={this.onChangeUser.bind(this)}></input>
            <input className="login__info__inputPassword" placeholder='Contraseña' onChange={this.onChangePassword.bind(this)}></input>
            <Button className="login__info__button" onClick={this.onLogin.bind(this)}>Ingresar</Button>
<<<<<<< HEAD
=======
            <Button href='/singin' className="login__info__button">Registrarme</Button>
>>>>>>> 1b81bfd92c7f3bd260e91b75d3985a08b805f19e
          </div>
          <Footer></Footer>
        </div>
      )
    )
  }
}

export default (Login);