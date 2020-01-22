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
import menu from './../../assets/img/menu.png';
import { Button } from 'semantic-ui-react';
import Menu from './../Menu/index';

// import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLogin:props.isLogin,
      user:this.props.user,
      menu:false,
    }
  }

  onClick(){
    this.setState({menu:!this.state.menu});
  }

  render() {
    return (
      <div className="header">
        <Button href='/' className="header__logo"><img alt='Qevent' src={logo}></img></Button>
        <Button href='/' className="header__name"><img alt='Qevent' src={name}></img></Button>
        {this.state.user ? 
          (
            <div>
              {this.state.menu ? 
              (
                <Menu></Menu>
              ) :  
              (
                <div></div>
              )}
              <Button onClick={this.onClick.bind(this)} className="header__menu"><img alt='Qevent' src={menu}></img></Button>
            </div>
          ) :
          (
            <div>
            </div>
          )
        }
        <div className='header__line'></div>
      </div>
    )
  }
}

export default Header;