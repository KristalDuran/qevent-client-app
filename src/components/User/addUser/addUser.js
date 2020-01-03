/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import Menu from '../../Menu/index';

class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: this.props.edit,
      name: this.props.name,
      email: this.props.email,
      address: this.props.address,
    }
  }

  render() {
    return (
      <div className="user">
        <Header/>
        <Menu events={false} users={true}/>
        <div className="user__info">
          {this.state.edit ? 
            (<p className='user__info__titule'>Editar Usuario</p>) :
            (<p className='user__info__titule'>Registrar de Usuario</p>)
          }
          <input className="user__info__input" placeholder='Nombre Completo' value={this.state.name}></input>
          <input className="user__info__input" placeholder='Correo Electrónico' value={this.state.email}></input>
          <input className="user__info__input" placeholder='Direción' value={this.state.address}></input>
          {this.state.edit ? 
            (<div></div>) :
            (<div className="user__info__password">
              <input className="user__info__input" placeholder='Contraseña'></input>
              <input className="user__info__input" placeholder='Confirmar Contraseña'></input>
            </div>)
          }
          <div className='user__info__buttons'>
            {this.state.edit ? 
              (<div className='user__info__buttons'>
                <Button className='user__info__buttons__button'>Guardar Cambios</Button>
                <Button className='user__info__buttons__button'>Eliminar Usuario</Button>
              </div>) :
              (<Button className='user__info__buttons__button'>Registrar</Button>)
            }
            <Button href='/getUsers' className='user__info__buttons__button'>Cancelar</Button>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default AddUser;