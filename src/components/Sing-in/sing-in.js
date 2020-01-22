/**
 * Filename: principal.js
 * Author: kristalduran97@gmail.com
 * Date: 15/12/2019
 * Description: Principal
 */
import React, { Component } from "react";
import './styles.scss';
import { Button } from 'semantic-ui-react';
import Header from '../Header/index';
import Footer from '../Footer/index';
import { addUser } from '../../API/api-calls';

import QrReader from "react-qr-reader";

class Singin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: this.props.location.state.user,
      delay: 300,
      result: "No result"
    };
    this.handleScan = this.handleScan.bind(this);
  }

  componentDidMount(){
    console.log(this.state.user)
  }


  handleScan(data) {
    if (data) {
      this.setState({
        result: data
      });
    }
  }
  handleError(err) {
    console.error(err);
  }


  render() {
    return (
      <div className="user">
        <Header user={this.state.user}/>
        <div className="user__QR">
          <QrReader
          delay={this.state.delay}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: "100%" }}
          />
          <p>{this.state.result}</p>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default Singin;