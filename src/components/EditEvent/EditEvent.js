/**
 * Filename: HomePage.js
 * Author: email
 * Date: 
 * Description: Home page component 
 */
import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';

import addImg from './../../assets/img/add.png';
import Event from '../Event/index';
import Footer from '../Footer/index';
import Header from '../Header/index';
import EventSelected from '../EventSelected/index';
import { getEvents, getEvent } from '../../API/api-calls';
import PublicEvents from '../PublicEvents/index';
import Menu from '../Menu/index';


class EditEvent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      events: [],
      event:null,
      user: this.props.location.state.user,
      asisten:false,
    }
  }

  componentDidMount(){
    this.onGetEvents();
    if (this.state.user.Rol === 'Administrador') {
      this.setState({canEdit:true});
    }
    if (this.state.user.Rol === 'Asistente') {
      this.setState({asisten:true})
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

  
  onEditEvent(data){
    this.setState({edit:true, eventEdit: data})
  }

  onClick(){
    this.setState({edit:true})
  }

  render() {
    return (
      this.state.event ? (
        <EventSelected event={this.state.event} user={this.state.user}></EventSelected>
      ) : (
        this.state.edit ? (
          <PublicEvents event={this.state.eventEdit} user={this.state.user}></PublicEvents>
        ) : (
          <div className="eventsEdit">
            <Menu events={true} users={false} user={this.state.user}/>
            <Header user={this.state.user}/>
            <div className="eventsEdit__info">
              <p className='eventsEdit__info__titule'>Eventos actuales</p>
              {this.state.canEdit ?
              (
                <Button className='eventsEdit__info__img' onClick={this.onClick.bind(this)}><img alt='Agregar Evento' src={addImg}/></Button>
              )
              : (<div></div>)}
              <div className='eventsEdit__info__events'>
                {this.state.events.map( (items) => (
                  <Event event={items} onSelect={this.onSelect.bind(this)} onEdit={this.onEditEvent.bind(this)} admin={this.state.canEdit} asisten={this.state.asisten} onGetEvents={this.onGetEvents.bind(this)}></Event>
                ))}
              </div>
            </div>
            <Footer/>
          </div>
        )
      )
    )
  }
}

export default (EditEvent);