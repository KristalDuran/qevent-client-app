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
      user: this.props.user,
      isClient: false
    }
  }

  onSelect(data){
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
      if (this.props.location.state.user) {
        this.setState({user:this.props.location.state.user})
      }
    } 
  }else{
    if (this.state.user) {
      if (this.state.user.Rol === 'Cliente') {
        this.setState({isClient:true})
      }
      if (this.state.user.Rol === 'Asistente') {
        this.setState({asisten:true})
      }
    }
  }
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

  onChange(event){
    if (event.target.value === '') {
      this.onGetEvents();
    }else{
      getEventFilter(
        event.target.value,
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
  }

  render() {
    return (
      this.state.event ? (
        <EventSelected event={this.state.event} user={this.state.user}></EventSelected>
      ) : (
      <div className="events">
        <div className="events__info">
          
          <p className="events__info__titule">Eventos</p>
          <div className="events__info__eventsList">
            {this.state.events.map((event) => (
              (this.state.isClient || !this.state.user) && event.EPublico ?
              (<div></div>):
              (<Event event={event} onSelect={this.onSelect.bind(this)} admin={false} asisten={false} user={this.state.user} onGetEvents={this.onGetEvents.bind(this)}></Event>)
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