/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss'

import Header from '../Header/index';
import Footer from '../Footer/index';
import Menu from '../Menu/index';
// import { Link } from 'react-router-dom';
import logo from '../../assets/img/logoL.png';
import name from '../../assets/img/nameL.png';
class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name:'Kristal Durán'
    }
  }

  onClickAdd(){
    // this.setState({});
  }
  render() {
    return (
      <div className="welcome">
        <Header/>
        <Menu events={false} users={false}/>
        <div className="welcome__info">
          <p className='welcome__info__title'>Bienvenido {this.state.name}, esperemos
          sea de gran ayuda la aplicacion!</p>
          <img className="welcome__info__logo" src={logo}/>
          <img className="welcome__info__name" src={name}/>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Welcome;