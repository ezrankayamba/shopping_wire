import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';

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
import './theme/main.css'
import { albumsOutline, cartOutline, homeOutline, personOutline } from 'ionicons/icons';
import Header from './components/Header';
import Categories from './pages/Category';
import Cart from './pages/Cart';
import Account from './pages/Account';
import { ApolloProvider } from '@apollo/client';
import api from './graphql';

const App: React.FC = () => (
  <ApolloProvider client={api}>
    <IonApp>
      <Header />
      <IonContent>
        <IonReactRouter>
          <IonTabs>
            <IonRouterOutlet>
              <IonContent>
                <Route path="/:tab(home)" component={Home} exact={true} />
                <Route path="/:tab(category)" component={Categories} exact={true} />
                <Route path="/:tab(cart)" component={Cart} exact={true} />
                <Route path="/:tab(account)" component={Account} exact={true} />
                <Route path="/" render={() => <Redirect to="/home" />} exact={true} />
              </IonContent>
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="home" href="/home">
                <IonIcon icon={homeOutline} />
                <IonLabel>Home</IonLabel>
              </IonTabButton>
              <IonTabButton tab="category" href="/category">
                <IonIcon icon={albumsOutline} />
                <IonLabel>Category</IonLabel>
              </IonTabButton>
              <IonTabButton tab="cart" href="/cart">
                <IonIcon icon={cartOutline} />
                <IonLabel>Cart</IonLabel>
              </IonTabButton>
              <IonTabButton tab="account" href="/account">
                <IonIcon icon={personOutline} />
                <IonLabel>Account</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </IonReactRouter>
      </IonContent>
    </IonApp>
  </ApolloProvider>

);

export default App;
