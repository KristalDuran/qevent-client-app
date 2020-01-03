/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import Menu from '../../Menu/index';

class GetUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:{name:'Luis Rojas', rol:'Cliente', direction:'Zarcero, Alajuela', email:'luisrojas@gmail.com'}
    }
  }

  render() {
    return (
      <div className="user">
        <Header/>
        <Menu events={false} users={true}/>
        <div className="user__info">
          <p className='user__info__titule'>Datos usuario</p>
            <div className='user__info__data'>
              <input className="user__info__data__input" placeholder={this.state.user.name}></input>
              <input className="user__info__data__input" placeholder={this.state.user.rol}></input>
              <input className="user__info__data__input" placeholder={this.state.user.direction}></input>
              <p className="user__info__data__email">{this.state.user.email}</p>
              <Button className='user__info__data__button'>Guardar</Button>
              <Button className='user__info__data__button'>Eliminar</Button>
            </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default GetUser;