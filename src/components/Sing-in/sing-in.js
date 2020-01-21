/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss';
import { Button } from 'semantic-ui-react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import { addUser } from '../../API/api-calls';

class Singin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentDidMount(){
  }

  onChangeName(e){
    const user = { ...this.state.user, Nombre:e.currentTarget.value };
    this.setState({user});
    e.currentTarget.value = this.state.user;
  }

  onChangeUserName(e){
    const user = { ...this.state.user, NombreUsuario:e.currentTarget.value };
    this.setState({user});
    e.currentTarget.value = this.state.user;
  }

  onChangeEmail(e){
    const user = { ...this.state.user, Correo:e.currentTarget.value };
    this.setState({user});
    e.currentTarget.value = this.state.user;
  }

  onChangeRol(e){
  }

  onChangePassword(e){
    const user = { ...this.state.user, Contrasena:e.currentTarget.value };
    this.setState({user});
  }

  onChangeConfirmPassword(e){
    const user = { ...this.state.user, confirmPassword:e.currentTarget.value, Rol: 'Cliente' };
    this.setState({user});
  }

  onSave(){
    
    if (this.state.user.Contrasena === this.state.user.confirmPassword) {
      addUser(this.state.user,
        response => {
          if (response.data) {
            this.setState({edit:false});
            this.props.onBack();
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
      <div className="user">
        <Header/>
        <div className="user__info">
          <p className='user__info__titule'>Registrar de Usuario</p>
          <input className="user__info__input" placeholder='Nombre Completo' value={this.state.user.Nombre || ''} onChange={this.onChangeName.bind(this)}></input>
          <input className="user__info__input" placeholder='Nombre de usuario' value={this.state.user.NombreUsuario || ''} onChange={this.onChangeUserName.bind(this)}></input>
          <input className="user__info__input" placeholder='Correo Electrónico' value={this.state.user.Correo || ''} onChange={this.onChangeEmail.bind(this)}></input>
          {/* <input className="user__info__input" placeholder='Rol' value={this.state.user.Rol || ''} onChange={this.onChangeRol.bind(this)}></input> */}
          <div className="user__info__password">
            <input className="user__info__input" placeholder='Contraseña' type="password" onChange={this.onChangePassword.bind(this)}></input>
            <input className="user__info__input" placeholder='Confirmar Contraseña' type="password" onChange={this.onChangeConfirmPassword.bind(this)}></input>
          </div>
          <div className='user__info__buttons'>
            <Button href='/' className='user__info__buttons__button' onClick={this.onSave.bind(this)}>Registrar</Button>
            <Button href='/' className='user__info__buttons__button'>Cancelar</Button>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Singin;