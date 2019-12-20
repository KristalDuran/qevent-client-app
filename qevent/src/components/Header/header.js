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
// import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="header">
        <img className="header__logo" src={logo}></img>
        <img className="header__name" src={name}></img>
        <input className='header__input' placeholder='Buscar evento'></input>
        <p className='header__login'>Iniciar Seción</p>
        <p className='header__signin'>Registrarse</p>
        <div className='header__line'></div>
      </div>
    )
  }
}

export default Header;