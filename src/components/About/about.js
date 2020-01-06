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

class About extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div className="about">
        
        <Menu events={false} users={false}/>
        <Header/>
        <div className="about__info">
          <p className='about__info__title'>Información!</p>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default About;