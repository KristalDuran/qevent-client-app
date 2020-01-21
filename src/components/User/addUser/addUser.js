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
import { addUser, editUser, deleteUser } from '../../../API/api-calls';

class AddUser extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      edit: this.props.user,
      user: this.props.user || {},
      adminRol:false,
      clientRol:false,
      asistentRol:false,
      userLogged: this.props.userLogged
    }
  }

  componentDidMount(){
    if (this.state.user.Rol === 'Administrador') {
      this.setState({ adminRol:true})
    }else
    if (this.state.user.Rol === 'Cliente') {
      this.setState({ clientRol:true})
    }else
    if (this.state.user.Rol === 'Asistente') {
      this.setState({ asistentRol:true})
    }

    if (this.props.location) {
      this.setState({userLogged: this.props.location.state.userLogged})
    }
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
    let rol = ''
    if (e.target.selectedIndex === 0) {
      rol = 'Administrador'
      this.setState({ adminRol:true})
    }
    if (e.target.selectedIndex === 1) {
      rol = 'Cliente'
      this.setState({ clientRol:true})
    }
    if (e.target.selectedIndex === 2) {
      rol = 'Asistente'
      this.setState({ asistentRol:true})
    }
    const user = { ...this.state.user, Rol: rol };
    this.setState({user});
    e.currentTarget.value = this.state.user;
  }

  onChangePassword(e){
    const user = { ...this.state.user, Contrasena:e.currentTarget.value };
    this.setState({user});
  }

  onChangeConfirmPassword(e){
    const user = { ...this.state.user, confirmPassword:e.currentTarget.value };
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

  onChangeUser(){
    editUser(this.state.user,
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

  onDeleteUser(){
    deleteUser(this.state.user.ID_usuario,
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

  render() {
    return (
      <div className="user">
        <Menu events={false} users={true} user={this.state.userLogged}/>
        <Header user={this.state.userLogged}/>
        <div className="user__info">
          {this.state.edit ? 
            (<p className='user__info__titule'>Editar Usuario</p>) :
            (<p className='user__info__titule'>Registrar de Usuario</p>)
          }
          <input className="user__info__input" placeholder='Nombre Completo' value={this.state.user.Nombre || ''} onChange={this.onChangeName.bind(this)}></input>
          <input className="user__info__input" placeholder='Nombre de usuario' value={this.state.user.NombreUsuario || ''} onChange={this.onChangeUserName.bind(this)}></input>
          <input className="user__info__input" placeholder='Correo Electrónico' value={this.state.user.Correo || ''} onChange={this.onChangeEmail.bind(this)}></input>
          <select className="user__info__input" onChange={this.onChangeRol.bind(this)}>
            <option value="admin" selected={this.state.adminRol}>Administrador</option>
            <option value="client" selected={this.state.clientRol}>Cliente</option>
            <option value="asistent" selected={this.state.asistentRol}>Asistente</option>
          </select>
          {/* <input className="user__info__input" placeholder='Rol' value={this.state.user.Rol || ''} onChange={this.onChangeRol.bind(this)}></input> */}
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
                <Button href='/getUsers' className='user__info__buttons__button' onClick={this.onChangeUser.bind(this)}>Guardar Cambios</Button>
                <Button href='/getUsers' className='user__info__buttons__button' onClick={this.onDeleteUser.bind(this)}>Eliminar Usuario</Button>
              </div>) :
              (<Button href='/getUsers' className='user__info__buttons__button' onClick={this.onSave.bind(this)}>Registrar</Button>)
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