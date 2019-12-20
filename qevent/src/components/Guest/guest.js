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

class Guest extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="guest">
        <p className='guest__titule'>Agregar Invitado</p>
        <input className="guest__input" placeholder='Nombre Completo'></input>
        <input className="guest__input" placeholder='Correo Electrónico'></input>
        <input className="guest__input" placeholder='Número contacto'></input>
        <input className="guest__input__big" placeholder='Descripción'></input>
        <div className='guest__buttons'>
          <Button className='guest__buttons__button'>Imagen</Button>
          <Button className='guest__buttons__button'>Agregar</Button>
          <Button className='guest__buttons__button'>Volver</Button>
        </div>
      </div>
    )
  }
}

export default Guest;