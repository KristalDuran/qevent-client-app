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
      user: this.props.location.state.user
    }
  }

  componentDidMount(){
    console.log(this.state.user)
  }
  
  render() {
    return (
      <div className="user">
        <Header user={this.state.user}/>
        <div className="user__QR">
          
        </div>
        <Footer/>
      </div>
    )
  }



  
}

export default Singin;