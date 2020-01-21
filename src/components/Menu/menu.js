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
import { Link } from 'react-router-dom';
class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        events: this.props.events,
        users: this.props.users,
        user: this.props.user,
    }
  }

  onClick(){
    this.setState({})
  }

  render() {
    return (
      <div className="menu">
        <div className="menu__profile">
        {/* eslint-disable-next-line jsx-a11y/alt-text*/}
          <img className="menu__profile__img" src={profile_img}/>
          <p className="menu__profile__name">{this.state.user.Nombre}</p>
          <p className="menu__profile__rol">{this.state.user.Rol}</p>
        </div>
        <div className="menu__line"></div>
        {this.state.users ?
          (<div className="menu__selectedUser"></div>):
          (<div ></div>)}
        <Link className="menu__link" to={{
            pathname: "/getUsers",
            state: { user: this.state.user}
          }}>
           <Button className="menu__button" onClick={this.onClick.bind(this)}>Administrar usuario</Button>
        </Link>
       
        <div className="menu__line"></div>
        {this.state.events ?
          (<div className="menu__selectedEvent"></div>):
          (<div></div>)}
        <Link className="menu__link" to={{
            pathname: "/events",
            state: { user: this.state.user}
          }}>
          <Button className="menu__button" onClick={this.onClick.bind(this)}>Administrar evento</Button>
        </Link>
        <div className="menu__line"></div>
        <Button href='/' className="menu__button">Salir</Button>
        <Link className="menu__link" to={{
            pathname: "/about",
            state: { user: this.state.user}
          }}>
          <Button className="menu__about" onClick={this.onClick.bind(this)}>Información</Button>
        </Link>
      </div>
    )
  }
}

export default Menu;