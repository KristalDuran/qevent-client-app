/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss'
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Header from '../Header/index';
import Footer from '../Footer/index';
// import { Link } from 'react-router-dom';

class PublicEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  onClickAdd(){
    // this.setState({});
  }
  render() {
    return (
      <div className="public">
        <Header/>
        <div className="public__info">
          <p className='public__info__titule'>Creación de eventos</p>
          <input className="public__info__input" placeholder='Nombre del Evento'></input>
          <input className="public__info__input" placeholder='Ubicación del Evento'></input>
          <input className="public__info__input" placeholder='DD/MM/YYY'></input>
          <input className="public__info__input" placeholder='HH:MM'></input>
          <input className="public__info__input__big" placeholder='Descripción general'></input>
          <div className='public__info__buttons'>
            <Button className='public__info__buttons__button'>Imagen</Button>
            <Link to="/">
            <Button className='public__info__buttons__button' >Incluir invitado</Button>
            </Link>
            <Button className='public__info__buttons__button'>Publicar evento</Button>
            <Button className='public__info__buttons__button'>Cancelar</Button>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default PublicEvents;