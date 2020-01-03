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
import Header from '../Header/index';
import Footer from '../Footer/index';
import Menu from '../Menu/index';

class Guest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="guest">
        <Header/>
        <Menu events={true} users={false}/>
        <div className="guest__info">
          <p className='guest__info__titule'>Agregar Invitado</p>
          <input className="guest__info__input" placeholder='Nombre Completo'></input>
          <input className="guest__info__input" placeholder='Correo Electrónico'></input>
          <input className="guest__info__input" placeholder='Número contacto'></input>
          <input className="guest__info__input__big" placeholder='Descripción'></input>
          <div className='guest__info__buttons'>
            <Button className='guest__info__buttons__button'>Imagen</Button>
            <Button className='guest__info__buttons__button'>Agregar</Button>
            <Button href='/addEvent' className='guest__info__buttons__button'>Volver</Button>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Guest;