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
import AddUser from '../addUser/index';
import addImg from '../../../assets/img/add.png';
import { Button } from 'semantic-ui-react';
import { getUsers, getUser } from '../../../API/api-calls';

class GetUsers extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users:[],
      edit:false,
      newUser:false,
      user:this.props.location.state.user,
      cantEdit:false
    }
  }

  componentDidMount() {
    this.onGetUsers();
    if (this.state.user.Rol === 'Administrador') {
      this.setState({cantEdit:true})
    }
  }

  onGetUsers(){
    getUsers(
      response => {
        if (response.data) {
          console.log(response.data.content);
          this.setState({users:response.data.content});
        }
      },
      error => {
        //TODO
      }
    )
  }

  onClick(userInfo){
    console.log(userInfo.ID_usuario)
    getUser(userInfo.ID_usuario,
      response => {
        if (response.data.content) {
          this.setState({edit:true, userInfo:response.data.content[0]});
        }
      },
      error => {
        //TODO
      }
    );
  }

  onNewUser() {
    this.setState({edit:false, newUser:true});
  }

  onBack(){
    this.onGetUsers();
    this.setState({edit:false, userInfo:{}});
  }

  render() {
    return (
      this.state.edit || this.state.newUser ? (
        <AddUser onBack={this.onBack.bind(this)} userLogged={this.state.user} user={this.state.userInfo} newUser={this.state.newUser}></AddUser>
      ) : (
        <div className="users">
        <Menu events={false} users={true} user={this.state.user}/>
        <Header user={this.state.user}/>
        <div className="users__info">
          <p className='users__info__titule'>Usuarios actuales</p>
          {this.state.cantEdit ?
            (<Button className='users__info__img' onClick={this.onNewUser.bind(this)}><img alt='Agregar usuario' src={addImg}/></Button>)
            :(<div></div>)}
          {this.state.users.map( (items) => (
            <div className='users__info__data'>
              <p className='users__info__data__name'>{items.Nombre}</p>
              <p className='users__info__data__rol'>{items.Rol}</p>
              {this.state.cantEdit ?
              (<Button className='users__info__data__edit' onClick={this.onClick.bind(this, items)}>Editar</Button>)
              :(<div></div>)}
              <div className='users__info__data__line'></div>
            </div>
          ))}
        </div>
        <Footer/>
        </div>
      )
    )
  }
}

export default GetUsers;