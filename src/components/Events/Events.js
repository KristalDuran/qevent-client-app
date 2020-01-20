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
import { getEvents, getEvent, getEventFilter } from '../../API/api-calls';

class Events extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      eventEdit: null,
      edit:false,
      event:null,
      user: this.props.user
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
  if (this.props.location) {
    if (this.props.location.state) {
      this.setState({user:this.props.location.state.user})
    } 
  }
}

  onGetEvents(){
    getEvents(
      response => {
        if (response.data) {
          console.log('siiiiiiiiiiiiiiiiiií')
          this.setState({events:response.data.content});
        }
      },
      error => {
        //TODO
      }
    );
  }

  onChange(event){
    getEventFilter(
      event.target.value,
      response => {
        if (response.data) {
          console.log(response.data)
          
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
        <EventSelected event={this.state.event} user={this.state.user}></EventSelected>
      ) : (
      <div className="events">
        <div className="events__info">
          <img className="events__info__background" alt='Atras' src={background}/>
          <div className="events__info__search">
            <input className="events__info__search__input" placeholder='Lugar del evento' onChange={this.onChange.bind(this)}></input>
            <input className="events__info__search__input" placeholder='Fecha del evento'></input>
            <input className="events__info__search__input" placeholder='Nombre del evento'></input>
            <input className="events__info__search__input" placeholder='Tipo de evento'></input>
          </div>
          <p className="events__info__titule">Eventos</p>
          <div className="events__info__eventsList">
            {this.state.events.map((event) => (
              <Event event={event} onSelect={this.onSelect.bind(this)} admin={false} user={this.state.user} onGetEvents={this.onGetEvents.bind(this)}></Event>
            ))}
          </div>
        </div>
        <Header user={this.state.user}></Header>
        <Footer></Footer>
      </div>
        
      )
    )
  }
}

export default (Events);