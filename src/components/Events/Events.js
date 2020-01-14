/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss';

import background from './../../assets/img/backgroundEvent.png';
import Event from '../Event/index';
import Footer from '../Footer/index';
import Header from '../Header/index';
import EventSelected from '../EventSelected/index';
import { getEvents, getEvent } from '../../API/api-calls';
import PublicEvents from '../PublicEvents';

class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      eventEdit: null,
      edit:false,
      event:null
    }
  }

  onSelect(data){
    console.log(data);
    if (data !== null) {
      getEvent(
        data.ID_evento,
        response => {
          if (response.data) {
            this.setState({event:response.data.content[0]});
          }
        },
        error => {
          //TODO
        }
      );
    }
  }

componentDidMount(){
  this.onGetEvents();
}

  onGetEvents(){
    getEvents(
      response => {
        if (response.data) {
          this.setState({events:response.data.content});
        }
      },
      error => {
        //TODO
      }
    );
  }

  render() {
    return (
      this.state.event ? (
        <EventSelected event={this.state.event}></EventSelected>
      ) : (
      <div className="events">
        <div className="events__info">
          <img className="events__info__background" src={background}/>
          <div className="events__info__search">
            <input className="events__info__search__input" placeholder='Lugar del evento'></input>
            <input className="events__info__search__input" placeholder='Fecha del evento'></input>
            <input className="events__info__search__input" placeholder='Nombre del evento'></input>
            <input className="events__info__search__input" placeholder='Tipo de evento'></input>
          </div>
          <p className="events__info__titule">Eventos</p>
          <div className="events__info__eventsList">
            {this.state.events.map((event) => (
              <Event event={event} onSelect={this.onSelect.bind(this)} admin={false}></Event>
            ))}
          </div>
        </div>
        <Header></Header>
        <Footer></Footer>
      </div>
        
      )
    )
  }
}

export default (Events);