/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss';
// import { Link } from 'react-router-dom';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import Menu from '../../Menu/index';
import addImg from '../../../assets/img/add.png';
import { Button } from 'semantic-ui-react';

class GetUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users:[{name:'Luis Rojas', rol:'Cliente'},{name:'Andrea Durán', rol:'Administrador'},{name:'Ronny Araya', rol:'Cliente'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'},{name:'Luis Rojas', rol:'Client'}]
    }
  }

  render() {
    return (
      <div className="users">
        <Header/>
        <Menu events={false} users={true}/>
        <div className="users__info">
          <p className='users__info__titule'>Usuarios actuales</p>
          <Button href='/addUser' className='users__info__img'><img src={addImg}/>
          </Button>
          {this.state.users.map( (items) => (
            <div className='users__info__data'>
              <p className='users__info__data__name'>{items.name}</p>
              <p className='users__info__data__rol'>{items.rol}</p>
              <Button href='/addUser' className='users__info__data__edit'>Editar</Button>
              <div className='users__info__data__line'></div>
            </div>
          ))}
        </div>
        <Footer/>
      </div>
    )
  }
}

export default GetUsers;