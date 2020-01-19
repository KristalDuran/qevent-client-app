/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss'
import { Button } from 'semantic-ui-react';

import Header from '../Header/index';
import Footer from '../Footer/index';
import Menu from '../Menu/index';
import {addEvent} from '../../API/api-calls';

class PublicEvents extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event: this.props.event || {},
      user:this.props.user
    }
  }

  componentDidMount(){
    console.log(this.props.event)
  }

  onChangeName(e){
    const event = { ... this.state.event, NombreEvento: e.currentTarget.value};
    this.setState({event});
    e.currentTarget.value = this.state.event;
  }

  onChangeAddress(e){
    const event = { ... this.state.event, Ubicacion: e.currentTarget.value};
    this.setState({event});
    e.currentTarget.value = this.state.event;
  }

  onChangeDate(e){
    const event = { ... this.state.event, Fecha: e.currentTarget.value};
    this.setState({event});
    e.currentTarget.value = this.state.event;
  }

  onChangeTime(e){
    const event = { ... this.state.event, Hora: e.currentTarget.value};
    this.setState({event});
    e.currentTarget.value = this.state.event;
  }

  onChangeDescription(e){
    const event = { ... this.state.event, DescEvento: e.currentTarget.value};
    this.setState({event});
    e.currentTarget.value = this.state.event;
  }

  onChangeType(e){
    const event = { ... this.state.event, Tipo: e.currentTarget.value};
    this.setState({event});
    e.currentTarget.value = this.state.event;
  }

  onChangeGuests(e){
    const event = { ... this.state.event, Guests: e.currentTarget.value};
    this.setState({event});
    e.currentTarget.value = this.state.event;
  }

  onChangeImg(e){
    const event = { ... this.state.event, FuenteEvento: e.currentTarget.value};
    this.setState({event});
    e.currentTarget.value = this.state.event;
  }

  onAddEvent(){
    addEvent(this.state.event,
      response => {
        if (response.data) {
          this.setState({edit:false});
        }
      },
      error => {
        //TODO
      }
    );
  }

  onClickAdd(){
    // this.setState({});
  }

  onBack(){
  }

  render() {
    return (
      <div className="public">
        <Menu events={true} users={false}/>
        <Header user={this.state.user}/>
        <div className="public__info">
          {this.state.event ? (
            <p className='public__info__titule'>Editar eventos</p>
          ):(
            <p className='public__info__titule'>Creación de eventos</p>
          )}
          <input className="public__info__input" placeholder='Nombre del Evento' value={this.state.event.NombreEvento || ''} onChange={this.onChangeName.bind(this)}></input>
          <input className="public__info__input" placeholder='Ubicación del Evento' value={this.state.event.Ubicacion || ''} onChange={this.onChangeAddress.bind(this)}></input>
          <input className="public__info__input" placeholder='Tipo' value={this.state.event.Tipo || ''} onChange={this.onChangeType.bind(this)}></input>
          <input className="public__info__input" placeholder='DD/MM/YYY' value={this.state.event.Fecha || ''} onChange={this.onChangeDate.bind(this)}></input>
          <input className="public__info__input" placeholder='HH:MM' value={this.state.event.Hora || ''} onChange={this.onChangeTime.bind(this)}></input>
          <input className="public__info__input__big" placeholder='Descripción general' value={this.state.event.DescEvento || ''} onChange={this.onChangeDescription.bind(this)}></input>
          <div className='public__info__buttons'>
            <Button href="/" className='public__info__buttons__button'>Imagen</Button>
            {this.state.event ? (
              <Button href="/addEvent/guest" className='public__info__buttons__button' >Editar invitados</Button>
            ):(
              <Button href="/addEvent/guest" className='public__info__buttons__button' >Incluir invitados</Button>
            )}
            <Button href="/events" className='public__info__buttons__button'>Publicar evento</Button>
            <Button href="/events" className='public__info__buttons__button'>Cancelar</Button>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default PublicEvents;