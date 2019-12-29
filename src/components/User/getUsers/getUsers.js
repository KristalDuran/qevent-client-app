/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss';
// import { Link } from 'react-router-dom';
import Header from '../../Header/index';
import Footer from '../../Footer/index';

class GetUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users:[{name:'Luis Rojas', rol:'Cliente'},{name:'Andrea Durán', rol:'Administrador'},{name:'Ronny Araya', rol:'Cliente'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'}]
    }
  }

  render() {
    return (
      <div className="user">
        <Header/>
        <div className="user__info">
          <p className='user__info__titule'>Usuarios actuales</p>
          {this.state.users.map( (items) => (
            <div className='user__info__data'>
              <p className='user__info__data__name'>{items.name}</p>
              <p className='user__info__data__rol'>{items.rol}</p>
              <p className='user__info__data__edit'>Editar</p>
              <div className='user__info__data__line'></div>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default GetUsers;