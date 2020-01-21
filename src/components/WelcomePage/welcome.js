/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React from 'react';
import './styles.scss'

import Header from '../Header/index';
import Footer from '../Footer/index';
import Menu from '../Menu/index';
import logo from '../../assets/img/logoL.png';
import name from '../../assets/img/nameL.png';

class Welcome extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user:this.props.user
    }
  }

  onClickAdd(){
    // this.setState({});
  }
  render() {
    return (
      <div className="welcome">
        <Menu events={false} users={false} user={this.state.user}/>
        <Header user={this.state.user}/>
        <div className="welcome__info">
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Welcome;