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
/*
  onClick(){
    this.setState({})
  }*/
  onClick(){
    this.setState({menu:!this.state.events});
  }

  render() {
    return (
      <div className="menu">
<<<<<<< HEAD
        
        
=======
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
>>>>>>> 1b81bfd92c7f3bd260e91b75d3985a08b805f19e
        <Link className="menu__link" to={{
            pathname: "/home",
            state: { user: this.state.events}
          }}>
           <Button className="menu__button" onClick={this.onClick.bind(this)}>Ver Eventos</Button>
        </Link>
        <div className="menu__line"></div>

        <Link className="menu__link" to={{
            pathname: "/getUsers",
            state: { user: this.state.user}
          }}>
           <Button className="menu__button" onClick={this.onClick.bind(this)}>Ver mis eventos</Button>
        </Link>
        <div className="menu__line"></div>
        
        <Link className="menu__link" to={{
            pathname: "/getUsers",
            state: { user: this.state.user}
          }}>
           <Button className="menu__button" onClick={this.onClick.bind(this)}>Generar código QR</Button>
        </Link>
        <div className="menu__line"></div>
        
      </div>
    )
  }
}

export default Menu;