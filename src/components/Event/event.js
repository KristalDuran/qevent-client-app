/**
 * Filename: event.js
 * Description: Event page component 
 */
import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';
import eventDefault from '../../assets/img/eventIcon.png';
class Event extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        event: this.props.event
    }
  }

  onSelect(){
    console.log('click');
    this.props.onSelect(this.state.event)
  }

  render() {
    return (
      <div className="event">
        {this.state.event ? (
          <div className="event__info">
            {this.props.event.img ? (
              <img className="event__info__img" src={this.props.event.img}></img>
            ) : (
              <img className="event__info__img" src={eventDefault}></img>
            )}
            <p className="event__info__name">{this.props.event.name}</p>
            <p className="event__info__type">{this.props.event.type}</p>
            <p className="event__info__place">{this.props.event.place}</p>
            <p className="event__info__date">{this.props.event.date}</p>
            <Button className="event__info__button" onClick={this.onSelect.bind(this)}>Detalles</Button>
          </div>
        ): (
          <p className='event__message'>Aun no hay eventos publicados</p>
        )}
      </div>
    )
  }
}

export default (Event);