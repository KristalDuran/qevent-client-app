/**
 * Filename: Header.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Header
 */
import React from 'react';
import './styles.scss';

import logo from './../../assets/img/logo.png';
import name from './../../assets/img/name.png';
import { Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin:props.isLogin,
      user:this.props.user,
    }
  }

  render() {
    return (
      <div className="header">
        <Button href='/' className="header__logo"><img alt='Qevent' src={logo}></img></Button>
        <Button href='/' className="header__name"><img alt='Qevent' src={name}></img></Button>
        {this.state.isLogin ? (
          <Button href="/" className='header__login'>Olvide contraseña</Button>
        ):(
          this.state.user ? 
          (
            <div>
              <input className='header__input' placeholder='Buscar evento'></input>
              <p className='header__user'>{this.state.user.Nombre}</p>
              <p className='header__role'>{this.state.user.Rol}</p>
            </div>
          ) :
          (
            <div>
              <input className='header__input' placeholder='Buscar evento'></input>
              <Button href="/login" className='header__login'>Iniciar Seción</Button>
              <Button href="/addUser" className='header__signin'>Registrarse</Button>
            </div>
          )
        )}
        <div className='header__line'></div>
      </div>
    )
  }
}

export default Header;