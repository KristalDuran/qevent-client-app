/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss'
import { Button } from 'semantic-ui-react';

// import { Link } from 'react-router-dom';

class PublicEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="public">
        <p className='public__titule'>Creación de eventos</p>
        <input className="public__input" placeholder='Nombre del Evento'></input>
        <input className="public__input__big" placeholder='Descripción general'></input>
        <input className="public__input" placeholder='Ubicación del Evento'></input>
        <input className="public__input" placeholder='DD/MM/YYY'></input>
        <input className="public__input" placeholder='HH:MM'></input>
        <div className='public__buttons'>
          <Button className='public__buttons__button'>Imagen</Button>
          <Button className='public__buttons__button'>Incluir invitado</Button>
          <Button className='public__buttons__button'>Publicar evento</Button>
          <Button className='public__buttons__button'>Cancelar</Button>
        </div>
      </div>
    )
  }
}

export default PublicEvents;