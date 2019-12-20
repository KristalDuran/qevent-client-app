/**
 * Filename: Footer.js
 * Author: kristalduran97@gmail.com
 * Date: 08/31/2019
 * Description: Footer component 
 */
import React from 'react';
import './styles.scss'

import logo from './../../assets/img/logoCircule.png';

class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="footer">
        <p className="footer__phone">+506 888888</p>
        <p className="footer__email">info@qevent.com</p>
        <p className="footer__copyRight">Todos los derechos reservados © 2019</p>
        <img className="footer__logo" src={logo}></img>
      </div>
    )
  }
}

export default Footer;