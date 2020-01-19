/**
 * Filename: EventSelected.js
 * Author: email
 * Description: Event Selected page component 
 */
import React from 'react';
import './styles.scss';

import iconDefault from './../../assets/img/Event-icon.png';
import shares from './../../assets/img/search.png';
import back from './../../assets/img/back.png';
import likeRed from './../../assets/img/likeRed.png';
import iconPerson from './../../assets/img/icon-person.png';
import like from './../../assets/img/like.png';
import Footer from '../Footer/index';
import Header from '../Header/index';
import Evaluate from '../Evaluate/index';
import { Button } from 'semantic-ui-react';
import { getEvent, likeEvent, dislikeEvent, shareEvent, getGuest } from '../../API/api-calls';

class EventSelected extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: this.props.event,
      evaluate:false,
      like:false,
      guests:null,
      user:this.props.user,
    }
  }

  componentDidMount(){
    this.onGetGuest();
  }

  onGetGuest(){
    if(this.props.event){
      getGuest(
        this.props.event.ID_evento,
        response => {
          if (response) {
            console.log(response.data.content)
            this.setState({guests:response.data.content});
          }
        },
        error => {
          //TODO
        }
      );
    }
  }

  setStateEvent(){
    // por fecha saber si es futuro, actual o pasado

  }

  onClickLike(){
    likeEvent({id:this.state.event.ID_evento,userId:2},
      response => {
        if (response) {
          getEvent(
            this.state.event.ID_evento,
            responseGet => {
              if (responseGet.data) {
                this.setState({event:responseGet.data.content[0], like:true});
              }
            },
            error => {
              //TODO
            }
          );
        }
      },
      error => {
        //TODO
      });
    // this.setState({evaluate:true})
  }

  onClickDislike(){
    dislikeEvent({id:this.state.event.ID_evento,userId:2},
      response => {
        if (response) {
          getEvent(
            this.state.event.ID_evento,
            responseGet => {
              if (responseGet.data) {
                this.setState({event:responseGet.data.content[0], like:false});
              }
            },
            error => {
              //TODO
            }
          );
        }
      },
      error => {
        //TODO
      });
    // this.setState({evaluate:true})
  }

  onClickShares(){
    shareEvent({id:this.state.event.ID_evento},
      response => {
        if (response) {
          getEvent(
            this.state.event.ID_evento,
            responseGet => {
              if (responseGet.data) {
                this.setState({event:responseGet.data.content[0]});
              }
            },
            error => {
              //TODO
            }
          );
        }
      },
      error => {
        //TODO
      });
    // this.setState({evaluate:true})
  }
  onClickEvaluate(){
    this.setState({evaluate:!this.state.evaluate})
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
              <Button className="eventSelected__info__data__buttons__shares" onClick={this.onClickShares.bind(this)}><img src={shares}></img></Button>
              <p className="eventSelected__info__data__buttons__number">{this.state.event.shares}</p>
              {this.state.like ?
              (<Button className="eventSelected__info__data__buttons__like" onClick={this.onClickDislike.bind(this)}><img src={likeRed}></img></Button>) :
              (<Button className="eventSelected__info__data__buttons__like" onClick={this.onClickLike.bind(this)}><img src={like}></img></Button>)
              }
              <p className="eventSelected__info__data__buttons__number">{this.state.event.likes}</p>
              <Button className="eventSelected__info__data__buttons__button" onClick={this.onClickEvaluate.bind(this)}>Evaluar</Button>
            </div>
          </div>
          <p className="eventSelected__info__description">{this.state.event.DescEvento}</p>
          {this.state.guests ? (
            this.state.guests.map((guest) => (
            <div className="eventSelected__info__guest">
              <p className="eventSelected__info__guest__title">Expositor</p>
              {this.state.event.img ? (
                <img className="eventSelected__info__guest__img" src={guest.Fuente}></img>
              ) : (
                <img className="eventSelected__info__guest__img" src={iconPerson}></img>
              )}
              <p className="eventSelected__info__guest__name">{guest.Nombre}</p>
              <p className="eventSelected__info__guest__address">{guest.NombreInvit}</p>
              <p className="eventSelected__info__guest__email">{guest.Correo}</p>
              <p className="eventSelected__info__guest__phone">{guest.Numero}</p>
              <p className="eventSelected__info__guest__description">{guest.Descripcion}</p>
            </div>
            ))
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
        {this.state.evaluate ? (<Evaluate onClickEvaluate={this.onClickEvaluate.bind(this)} event={this.event}></Evaluate>):<div></div>}
        <Header user={this.state.user}></Header>
        <Footer></Footer>
      </div>
    )
  }
}

export default (EventSelected);