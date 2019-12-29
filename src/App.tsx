import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { AppPage } from './declarations';

import Home from './pages/Home';
import List from './pages/List';
import Header from './components/Header/index';
import Login from './components/Login/index';
import Guest from './components/Guest/index';
import PublicEvents from './components/PublicEvents/index';
import AddUser from './components/User/addUser/index';
import GetUsers from './components/User/getUsers/index';
import GetUser from './components/User/getUser/index';
import { home, list } from 'ionicons/icons';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonSplitPane contentId="main">
        <IonRouterOutlet id="main">
          <Route path="/addUser" component={AddUser} exact={true} />
          <Route path="/getUser" component={GetUser} exact={true} />
          <Route path="/getUsers" component={GetUsers} exact={true} />
          <Route path="/login" component={Login} exact={true} />
          <Route path="/addEvent/guest" component={Guest} exact={true}/>
          <Route path="/addEvent" component={PublicEvents}exact={true} />
          <Route path="/home" component={Home} exact={true} />
          <Route path="/home/list" component={List} exact={true} />
          <Route path="/event" render={() => <Redirect to="/addEvent"/> } exact={true} />
          <Route path="/" render={() => <Redirect to="/addEvent/guest"/> } exact={true} />
        </IonRouterOutlet>
      </IonSplitPane>
    </IonReactRouter>
  </IonApp>
);

export default App;
