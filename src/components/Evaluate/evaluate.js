/**
 * Filename: evaluate.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: evaluate
 */
import React from 'react';
import './styles.scss'

import { Button } from 'semantic-ui-react';
import { evaluateEvent } from '../../API/api-calls';

class Evaluate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      event:this.props.event,
      number:0,
      comment:'',
    }
  }

  evaluate(){
    evaluateEvent(
      {id:this.state.event.ID_evento, number:this.state.number, comment:this.state.comment},
      response => {
        if (response) {
          this.props.onClickEvaluate();
        }
      },
      error => {
        //TODO
      }
    );
  }

  onClick(number){
    this.setState({number:number})
  }

  onChange(event){
    this.setState({comment:event.target.value})
  }

  render() {
    return (
      <div className="evaluate">
        <p className="evaluate__title">Evaluar el evento</p>
        <div className="evaluate__buttons">
          <Button className="evaluate__buttons__button" onClick={this.onClick.bind(this, 1)}>1</Button>
          <Button className="evaluate__buttons__button" onClick={this.onClick.bind(this, 2)}>2</Button>
          <Button className="evaluate__buttons__button" onClick={this.onClick.bind(this, 3)}>3</Button>
          <Button className="evaluate__buttons__button" onClick={this.onClick.bind(this, 4)}>4</Button>
          <Button className="evaluate__buttons__button" onClick={this.onClick.bind(this, 5)}>5</Button>
        </div>
        <p className="evaluate__comment">Realizar un comentario</p>
        <input className="evaluate__input" onChange={this.onChange.bind(this)} placeholder='Comentario'></input>
        <Button className="evaluate__button" onClick={this.evaluate.bind(this)}>Enviar evaluación</Button>
      </div>
    )
  }
}

export default Evaluate;