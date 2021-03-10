import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import { albumsOutline, cartOutline, homeOutline, personOutline } from 'ionicons/icons';
import React from 'react';
import { Redirect, Route } from 'react-router';
import Account from './Account';
import Cart from './Cart';
import Categories from './Category';
import Home from './Home';

const MainTabPage: React.FC = () => {
  return <IonTabs>
    <IonRouterOutlet>
      <Route path="/tabs/:tab(home)" component={Home} exact={true} />
      <Route path="/tabs/:tab(category)" component={Categories} exact={true} />
      <Route path="/tabs/:tab(cart)" component={Cart} exact={true} />
      <Route path="/tabs/:tab(account)" component={Account} exact={true} />
      <Redirect from="/tabs" to="/tabs/home" exact={true} />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/tabs/home">
        <IonIcon icon={homeOutline} />
        <IonLabel>Home</IonLabel>
      </IonTabButton>
      <IonTabButton tab="category" href="/tabs/category">
        <IonIcon icon={albumsOutline} />
        <IonLabel>Category</IonLabel>
      </IonTabButton>
      <IonTabButton tab="cart" href="/tabs/cart">
        <IonIcon icon={cartOutline} />
        <IonLabel>Cart</IonLabel>
      </IonTabButton>
      <IonTabButton tab="account" href="/tabs/account">
        <IonIcon icon={personOutline} />
        <IonLabel>Account</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
};

export default MainTabPage;
