/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';
import Header from '../../Header/index';
import Footer from '../../Footer/index';
import Menu from '../../Menu/index';
import { addUser, editUser } from '../../../API/api-calls';

class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: this.props.user,
      user: this.props.user || {},
    }
  }

  onChangeName(e){
    const user = { ... this.state.user, name: e.currentTarget.value};
    this.setState({user});
    e.currentTarget.value = this.state.user;
  }

  onChangeEmail(e){
    const user = { ... this.state.user, email: e.currentTarget.value};
    this.setState({user});
    e.currentTarget.value = this.state.user;
  }

  onChangeAddress(e){
    const user = { ... this.state.user, address: e.currentTarget.value};
    this.setState({user});
    e.currentTarget.value = this.state.user;
  }

  onChangePassword(e){
    const user = { ... this.state.user, password: e.currentTarget.value};
    this.setState({user});
  }

  onChangeConfirmPassword(e){
    const user = { ... this.state.user, confirmPassword: e.currentTarget.value};
    this.setState({user});
  }

  onSave(){
    if (this.state.user.password === this.state.user.confirmPassword) {
      console.log('correcto')
      addUser(this.state.user,
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
  }

  onChangeUser(){
    editUser(this.state.user,
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

  render() {
    return (
      <div className="user">
        <Menu events={false} users={true}/>
        <Header/>
        <div className="user__info">
          {this.state.edit ? 
            (<p className='user__info__titule'>Editar Usuario</p>) :
            (<p className='user__info__titule'>Registrar de Usuario</p>)
          }
          <input className="user__info__input" placeholder='Nombre Completo' value={this.state.user.name || ''} onChange={this.onChangeName.bind(this)}></input>
          <input className="user__info__input" placeholder='Correo Electrónico' value={this.state.user.email || ''} onChange={this.onChangeEmail.bind(this)}></input>
          <input className="user__info__input" placeholder='Direción' value={this.state.user.address || ''} onChange={this.onChangeAddress.bind(this)}></input>
          {this.state.edit ? 
            (<div></div>) :
            (<div className="user__info__password">
              <input className="user__info__input" placeholder='Contraseña' type="password" onChange={this.onChangePassword.bind(this)}></input>
              <input className="user__info__input" placeholder='Confirmar Contraseña' type="password" onChange={this.onChangeConfirmPassword.bind(this)}></input>
            </div>)
          }
          <div className='user__info__buttons'>
            {this.state.edit ? 
              (<div className='user__info__buttons'>
                <Button className='user__info__buttons__button' >Guardar Cambios</Button>
                <Button className='user__info__buttons__button'>Eliminar Usuario</Button>
              </div>) :
              (<Button className='user__info__buttons__button' onClick={this.onSave.bind(this)}>Registrar</Button>)
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