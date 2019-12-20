/**
 * Filename: event.controller.ts
 * Author: 
 * Date: 
 * Description: Index file in the project
 */
import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root/index';
import './assets/styles/styles.scss'; 
require('./favicon.ico'); 

render(
  <AppContainer>
    <Root/>
  </AppContainer>,
  document.getElementById('app')
);

