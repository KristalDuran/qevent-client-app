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
    }
  }

  componentDidMount() {
    this.onGetUsers();
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

  render() {
    return (
      this.state.edit ? (
        <AddUser user={this.state.userInfo}></AddUser>
      ) : (
        <div className="users">
        <Menu events={false} users={true}/>
        <Header/>
        <div className="users__info">
          <p className='users__info__titule'>Usuarios actuales</p>
          <Button href='/addUser' className='users__info__img'><img src={addImg}/>
          </Button>
          {this.state.users.map( (items) => (
            <div className='users__info__data'>
              <p className='users__info__data__name'>{items.Nombre}</p>
              <p className='users__info__data__rol'>{items.Rol}</p>
              <Button className='users__info__data__edit' onClick={this.onClick.bind(this, items)}>Editar</Button>
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