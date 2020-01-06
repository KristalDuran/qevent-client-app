/**
 * Filename: menu.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Menu
 */
import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';

import profile_img from '../../assets/img/prof_default.png';
class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        events: this.props.events,
        users: this.props.users,
    }
  }

  render() {
    return (
      <div className="menu">
        <div className="menu__profile">
        {/* eslint-disable-next-line jsx-a11y/alt-text*/}
          <img className="menu__profile__img" src={profile_img}/>
          <p className="menu__profile__name">Kristal Durán</p>
          <p className="menu__profile__rol">Administrador</p>
        </div>
        <div className="menu__line"></div>
        {this.state.users ?
          (<div className="menu__selectedUser"></div>):
          (<div></div>)}
        <Button href='/getUsers' className="menu__button">Administrar usuario</Button>
        <div className="menu__line"></div>
        {this.state.events ?
          (<div className="menu__selectedEvent"></div>):
          (<div></div>)}
        <Button href='/addEvent' className="menu__button">Administrar evento</Button>
        <div className="menu__line"></div>
        <Button href='/' className="menu__button">Salir</Button>
        <Button href='/about' className="menu__about">Información</Button>
      </div>
    )
  }
}

export default Menu;