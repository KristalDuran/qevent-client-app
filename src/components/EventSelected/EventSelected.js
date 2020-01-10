/**
 * Filename: EventSelected.js
 * Author: email
 * Description: Event Selected page component 
 */
import React from 'react';
import './styles.scss';

import iconDefault from './../../assets/img/Event-icon.png';
import search from './../../assets/img/search.png';
import back from './../../assets/img/back.png';
import likeRed from './../../assets/img/likeRed.png';
import iconPerson from './../../assets/img/icon-person.png';
import like from './../../assets/img/like.png';
import Footer from '../Footer/index';
import Header from '../Header/index';
import Evaluate from '../Evaluate/index';
import { Button } from 'semantic-ui-react';

class EventSelected extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: this.props.event,
      evaluate:false
    }
  }

  onGetEvents(){
    this.setState({events:[{name:'Evento Uno', place:'Zarcero, Alajuela', date:'29 Octubre, 2020', time:'3:00 p.m', type:'Conferencia'}]})
  }

  setStateEvent(){
    // por fecha saber si es futuro, actual o pasado

  }

  onClickEvaluate(){
    console.log('siiii')
    this.setState({evaluate:true})
    console.log('siiii')
  }

  render() {
    return (
      <div className="eventSelected">
        <div className="eventSelected__info">
          <div className="eventSelected__info__data">
            <Button className="eventSelected__info__data__back" href='/'><img src={back}></img></Button>
            <p className="eventSelected__info__data__name">{this.state.event.Nombre}</p>
            <p className="eventSelected__info__data__date">{this.state.event.Fecha}</p>
            <p className="eventSelected__info__data__time">{this.state.event.Hora}</p>
            <p className="eventSelected__info__data__address">{this.state.event.Ubicacion}</p>
            <p className="eventSelected__info__data__type">{this.state.event.Tipo}</p>
            {this.state.event.img ? (
              <img className="eventSelected__info__data__img" src={this.state.event.FuenteEvento}></img>
            ) : (
              <img className="eventSelected__info__data__img" src={iconDefault}></img>
            )}
            <div className="eventSelected__info__data__buttons">
              <Button className="eventSelected__info__data__buttons__search"><img src={search}></img></Button>
              <p className="eventSelected__info__data__buttons__number">{this.state.event.share}</p>
              <Button className="eventSelected__info__data__buttons__like"><img src={like}></img></Button>
              <p className="eventSelected__info__data__buttons__number">{this.state.event.likes}</p>
              <Button className="eventSelected__info__data__buttons__button" onClick={this.onClickEvaluate.bind(this)}>Evaluar</Button>
            </div>
          </div>
          <p className="eventSelected__info__description">{this.state.event.DescInvit}</p>
          {this.state.event.NombreInvit ? (
            <div className="eventSelected__info__guest">
              <p className="eventSelected__info__guest__title">Expositor</p>
              {this.state.event.img ? (
                <img className="eventSelected__info__guest__img" src={this.state.event.Fuenteinvit}></img>
              ) : (
                <img className="eventSelected__info__guest__img" src={iconPerson}></img>
              )}
              <p className="eventSelected__info__guest__name">{this.state.event.NombreInvit}</p>
              <p className="eventSelected__info__guest__address">{this.state.event.NombreInvit}</p>
              <p className="eventSelected__info__guest__email">{this.state.event.Correoinvit}</p>
              <p className="eventSelected__info__guest__phone">{this.state.event.Numeroinvit}</p>
              <p className="eventSelected__info__guest__description">{this.state.event.Descinvit}</p>
            </div>
          ): (
            <div className="eventSelected__info__guest">
              <p className="eventSelected__info__guest__description">Si desea conocer informacion sobre el invitado especial contactese al siguiente correo electrónico: info@qevent.com</p>
            </div>
          )}
          <div className="eventSelected__info__inscription">
            <p className="eventSelected__info__inscription__title">Datos personales para enviar la incripción de participación</p>
            <input className="eventSelected__info__inscription__input" placeholder='Número de identidad'></input>
            <input className="eventSelected__info__inscription__input" placeholder='Correo electrónico'></input>
            <input className="eventSelected__info__inscription__input" placeholder='Nombre completo'></input>
            <input className="eventSelected__info__inscription__input" placeholder='Número de teléfono'></input>
            <Button className="eventSelected__info__inscription__button">Enviar inscripción</Button>
    <p className="eventSelected__info__inscription__restriction">Restricciones: <br/><br/>{this.state.event.restriccions}</p>
          </div>
        </div>
        {this.state.evaluate ? (<Evaluate></Evaluate>):<div></div>}
        <Header></Header>
        <Footer></Footer>
      </div>
    )
  }
}

export default (EventSelected);