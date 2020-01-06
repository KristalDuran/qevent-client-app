/**
 * Filename: evaluate.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: evaluate
 */
import React from 'react';
import './styles.scss'

import Header from '../Header/index';
import Footer from '../Footer/index';
import Menu from '../Menu/index';
import logo from '../../assets/img/logoL.png';
import name from '../../assets/img/nameL.png';
import { Button } from 'semantic-ui-react';

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event:this.props.event
    }
  }

  evaluate(){

  }

  render() {
    return (
      <div className="evaluate">
        <p className="evaluate__title">Evaluar el evento</p>
        <div className="evaluate__buttons">
          <Button className="evaluate__buttons__button">1</Button>
          <Button className="evaluate__buttons__button">2</Button>
          <Button className="evaluate__buttons__button">3</Button>
          <Button className="evaluate__buttons__button">4</Button>
          <Button className="evaluate__buttons__button">5</Button>
        </div>
        <p className="evaluate__comment">Realizar un comentario</p>
        <input className="evaluate__input" placeholder='Comentario'></input>
        <Button className="evaluate__button">Enviar evaluación</Button>
      </div>
    )
  }
}

export default Welcome;