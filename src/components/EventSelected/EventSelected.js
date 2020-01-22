/**
 * Filename: EventSelected.js
 * Author: email
 * Description: Event Selected page component 
 */
import React from 'react';
import './styles.scss';
import jsPDF from 'jspdf';

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
import { getEvent, likeEvent, dislikeEvent, shareEvent, getGuest, addInscription, publicEvent, idInscript, getCommentsEvent, getInscritosEvent } from '../../API/api-calls';

class EventSelected extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: this.props.event,
      evaluate:false,
      like:false,
      guests:null,
      user:this.props.user,
      text:`Te invito a participar de la actividad: ${this.props.event.NombreEvento}, por realizar este ${this.props.event.Fecha}, en ${this.props.event.Ubicacion}. Para más info visita el sitio web http://localhost:8100/home`,
      isAdmin:false,
      isPast:false,
      comments:[],
      stringButton:'Inscribirme',
      inscritos: []
    }
  }

  componentDidMount(){
    this.onGetGuest();
    if (this.state.user) {
      if (this.state.user.Rol === 'Administrador') {
        this.setState({isAdmin:true});
      }
    }
    this.setStateEvent();
    this.getComments();
    this.setInscript();
    this.getInscritos();
  }


  getComments(){
    getCommentsEvent(
      this.state.event.ID_evento,
      response => {
        if (response) {
          this.setState({comments:response.data.content});
        }
      },
      error => {
        //TODO
      }
    );
  }

  getInscritos(){
    getInscritosEvent(
      this.state.event.ID_evento,
      response => {
        if (response) {
          this.setState({inscritos:response.data.content});
        }
      },
      error => {
        //TODO
      }
    );
  }

  onGetGuest(){
    if(this.props.event){
      getGuest(
        this.props.event.ID_evento,
        response => {
          if (response) {
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
    const date = new Date(this.state.event.Fecha);
    const currentDate = new Date();
    if (currentDate > date) {
      this.setState({isPast:true})
    }
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

  onClick(){
    if (this.state.stringButton === 'Inscribirme') {
      if (this.state.user) {
        addInscription(
          {idUsuario: this.state.user.ID_usuario, idEvent: this.state.event.ID_evento},
          response => {
            if (response) {
              const doc = new jsPDF();
              doc.text(`\n\nComprobante de participación en el evento titulado ${this.state.event.NombreEvento}\n 
              Fecha del evento: ${this.state.event.Fecha}\n
              Hora del evento: ${this.state.event.Hora}\n
              Lugar del evento: ${this.state.event.Ubicacion}\n
              Tipo del evento: ${this.state.event.Tipo}\n`, 10, 10);
              doc.save('Comprobante de inscripción.pdf');
              this.setInscript();
            }
          },
          error => {
            console.log('Debe estar registrado en el sistema antes de inscribirse');
          });
      }else{
        console.log('Debe estar registrado en el sistema antes de inscribirse');
      }
    }else{
      const doc = new jsPDF();
      doc.text(`\n\nComprobante de participación en el evento titulado ${this.state.event.NombreEvento}\n 
      Fecha del evento: ${this.state.event.Fecha}\n
      Hora del evento: ${this.state.event.Hora}\n
      Lugar del evento: ${this.state.event.Ubicacion}\n
      Tipo del evento: ${this.state.event.Tipo}\n`, 10, 10);
      doc.save('Comprobante de inscripción.pdf');
    }
    
  }

  onClickPublic(){
    publicEvent(
      this.state.event.ID_evento,
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
        console.log('Debe estar registrado en el sistema antes de inscribirse');
      });
  }

  setInscript(){
    if (this.state.user) {
      idInscript(
        this.state.user.ID_usuario,
        this.state.event.ID_evento,
        response => {
          if (response.data) {
            if (response.data.content[0].EstaInscrito) {
              this.setState({stringButton:'Descargar pdf'})
            }
            
          }
        },
        error => {
          //TODO
        }
      ) 
    }
  }

  render() {
    return (
      <div className="eventSelected">
        <div className="eventSelected__info">
          <div className="eventSelected__info__data">
            <p className="eventSelected__info__data__name">{this.state.event.NombreEvento}</p>
            {this.state.event.img ? (
              <img className="eventSelected__info__data__img" alt='Evento' src={this.state.event.FuenteEvento}></img>
            ) : (
              <img className="eventSelected__info__data__img" alt='Evento' src={iconDefault}></img>
            )}
            <p className="eventSelected__info__data__date">Fecha: {this.state.event.Fecha}</p>
            <p className="eventSelected__info__data__time">Hora: {this.state.event.Hora}</p>
            <p className="eventSelected__info__data__address">Lugar: {this.state.event.Ubicacion}</p>
            <p className="eventSelected__info__data__type">Tipo: {this.state.event.Tipo}</p>
            
            <div className="eventSelected__info__data__buttons">
              <Button href={`whatsapp://send?text=${this.state.text}`} className="eventSelected__info__data__buttons__shares" onClick={this.onClickShares.bind(this)}><img alt='Compartir Evento' src={shares}></img></Button>
              <p className="eventSelected__info__data__buttons__number">{this.state.event.shares}</p>
              {this.state.like ?
              (<Button className="eventSelected__info__data__buttons__like" onClick={this.onClickDislike.bind(this)}><img alt='' src={likeRed}></img></Button>) :
              (<Button className="eventSelected__info__data__buttons__like" onClick={this.onClickLike.bind(this)}><img alt='Me gusta' src={like}></img></Button>)
              }
              <p className="eventSelected__info__data__buttons__number">{this.state.event.likes}</p>
              {this.state.event.EPublico && (this.state.user.Rol === 'Administrador') ?
              (<Button className="eventSelected__info__data__buttons__button" onClick={this.onClickPublic.bind(this)}>Publicar</Button>):
              
              (this.state.isPast ? 
              (<Button className="eventSelected__info__data__buttons__button" onClick={this.onClickEvaluate.bind(this)}>Evaluar</Button>):
              (<Button className="eventSelected__info__data__buttons__button" onClick={this.onClick.bind(this)}>{this.state.stringButton}</Button>))}
            </div>
          </div>
          <p className="eventSelected__info__description">{this.state.event.DescEvento}</p>
          {this.state.guests ? (
            this.state.guests.map((guest) => (
            <div className="eventSelected__info__guest">
              <p className="eventSelected__info__guest__title">Expositor</p>
              {this.state.event.img ? (
                <img className="eventSelected__info__guest__img" alt='Expositor' src={guest.Fuente}></img>
              ) : (
                <img className="eventSelected__info__guest__img" alt='Expositor' src={iconPerson}></img>
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
          {this.state.event.ValorPromedio ?
          (
            <div className="eventSelected__info__inscription">
              <p className="eventSelected__info__inscription__title">Resultados de evaluaciones</p>
              <p className="eventSelected__info__inscription__average">Promedio de evaluación del evento: {this.state.event.ValorPromedio}</p>
              <p className="eventSelected__info__inscription__average">Comentarios generales</p>
              <div className="eventSelected__info__inscription__comments">
                {this.state.comments.map((comment) => (
                  <div>
                    <div className="eventSelected__info__inscription__comments__line"></div>
                    <p className="eventSelected__info__inscription__comments__comment">{comment.descripcion}</p>
                  </div>
                ))}
                <div className="eventSelected__info__inscription__comments__line"></div>
              </div>
            </div>
          ):(
            <div className="eventSelected__info__inscription">
              <p className="eventSelected__info__inscription__restriction">Restricciones: <br/><br/>{this.state.event.restriccions}</p>
            </div>
          )}
          {this.state.isAdmin ?
            (
              <div className="eventSelected__info__inscriptions">
                <p className="eventSelected__info__inscriptions__title">Incripciones</p>
                <div className="eventSelected__info__inscriptions__person">
                  <p className="eventSelected__info__inscriptions__person__name">Nombre completo</p>
                  <p className="eventSelected__info__inscriptions__person__name">Correo electrónico</p>
                </div>
                {this.state.inscritos.map((person) => (
                  <div className="eventSelected__info__inscriptions__person">
                    <p className="eventSelected__info__inscriptions__person__name">{person.Nombre}</p>
                    <p className="eventSelected__info__inscriptions__person__email">{person.Correo}</p>
                </div>
              ))}
              <div className="eventSelected__info__inscriptions__person__line"></div>
            </div>
            ):
            (<div></div>)}
        </div>
        {this.state.evaluate ? (<Evaluate onClickEvaluate={this.onClickEvaluate.bind(this)} event={this.state.event}></Evaluate>):<div></div>}
        <Header user={this.state.user}></Header>
        <Footer></Footer>
      </div>
    )
  }
}

export default (EventSelected);