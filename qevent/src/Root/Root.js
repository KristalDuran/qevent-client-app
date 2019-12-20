/**
 * Filename: Root.js
 * Author: kristalduran@gmail.com
 * Date: 15/12/2019
 * Description: Call roots 
 */
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MainApp from "../modules/MainApp/MainApp";
import { CookiesProvider } from 'react-cookie'
import store from './store/store'
// import CultutalEvents from './../components/CulturalEvents/index';
// import Form from './../components/Form/index';
// import QuienesSomos from '../components/QuienesSomos/quienessomos';
// import ListaAtractivos from '../components/ListaAtractivos/listaatractivos';
// import Tramites from '../components/Tramites/tramites';
// import AtractivosTuristicos from '../components/AtractivoTuristico/index';

export default class Root extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <CookiesProvider>
        <Provider store={store}>
          <Router>
              <Switch>
                {/* <Route path="/atractivoTuristico" component={AtractivosTuristicos} />
                <Route path="/events" component={CultutalEvents} />
                <Route path="/nosotros" component={QuienesSomos} />
                <Route path="/atractivos" component={ListaAtractivos} />
                <Route path="/contactanos" component={Form} />
                <Route path="/patentes" component={Tramites} /> */}
                <Route path="/" component={MainApp} />
              </Switch>
            </Router>
        </Provider>
      </CookiesProvider>
    );
  }
}
