/**
 * Filename: event.js
 * Description: Event page component 
 */
import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';
import eventDefault from '../../assets/img/eventIcon.png';
import more from '../../assets/img/moreIMG.png';
import edit from '../../assets/img/editIMG.png';
import deleteImg from '../../assets/img/deleteIMG.png';
import PublicEvents from '../PublicEvents';
import { getEvent } from '../../API/api-calls';
class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        event: this.props.event,
        admin: this.props.admin,
        edit:false,
    }
  }

  onSelect(){
    console.log('click');
    this.props.onSelect(this.state.event)
  }

  onSelectEdit(){
    getEvent(
      this.state.event.ID_evento,
      response => {
        if (response.data) {
          console.log(response.data.content)
          this.props.onEdit(response.data.content[0]);
        }
      },
      error => {
        //TODO
      }
    );
    
  }

  onSelectDelete(){

  }

  render() {
    return (
      this.state.edit ? (
        <PublicEvents event={this.state.event}></PublicEvents>
      ) : (
        <div className="event">
          {this.state.event ? (
            <div className="event__info">
              {this.props.event.img ? (
                <img className="event__info__img" src={this.props.event.img}></img>
              ) : (
                <img className="event__info__img" src={eventDefault}></img>
              )}
              <p className="event__info__name">{this.props.event.Nombre}</p>
              <p className="event__info__type">{this.props.event.Tipo}</p>
              <p className="event__info__place">{this.props.event.Ubicacion}</p>
              <p className="event__info__date">{this.props.event.Fecha}</p>
              
              {this.state.admin ? (
                <div className="event__info__options">
                  <Button className="event__info__options__img" onClick={this.onSelect.bind(this)}><img src={more}></img></Button>
                  <Button className="event__info__options__img" onClick={this.onSelectEdit.bind(this)}><img src={edit}></img></Button>
                  <Button className="event__info__options__img" onClick={this.onSelectDelete.bind(this)}><img src={deleteImg}></img></Button>
                </div>
              ) :
              (<Button className="event__info__button" onClick={this.onSelect.bind(this)}>Detalles</Button>)}
              
            </div>
          ): (
            <p className='event__message'>Aun no hay eventos publicados</p>
          )}
        </div>
      )
    )
  }
}

export default (Event);