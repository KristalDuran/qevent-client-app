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

class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="user">
        <Header/>
        <div className="user__info">
          <p className='user__info__titule'>Registrar de Usuario</p>
          <input className="user__info__input" placeholder='Nombre Completo'></input>
          <input className="user__info__input" placeholder='Correo Electrónico'></input>
          <input className="user__info__input" placeholder='Direción'></input>
          <input className="user__info__input" placeholder='Contraseña'></input>
          <input className="user__info__input" placeholder='Confirmar Contraseña'></input>
          <div className='user__info__buttons'>
            <Button className='user__info__buttons__button'>Registrar</Button>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default AddUser;