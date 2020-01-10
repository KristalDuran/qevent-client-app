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
  // name:'Evento Uno', place:'Zarcero, Alajuela', date:'29 Octubre, 2020', likes: '30', share:'3',time:'3:00 p.m', 
  // description: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas', 
  // type:'Conferencia', restriccions: 'Restricciones: <br/> * Mayor de edad <br/> * Idioma españo', guest:{name:'Chris Duran', 
  // img:'', address: 'Costa Rica', email:'chris@gmail.com', phone:'+506 786565',
  // description:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat mas',}},
  
  onSelect(data){
    console.log(data);
    if (data !== null) {
      getEvent(
        data.ID_evento,
        response => {
          if (response.data) {
            console.log(response.data.content)
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