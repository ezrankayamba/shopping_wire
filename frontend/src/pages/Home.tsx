import { IonContent } from '@ionic/react';
import React from 'react';
import Banners from '../components/Banners';
import CategoryList from '../components/CategoryList';
import Header from '../components/Header';

const Home: React.FC = () => {

  return (
    <>
      <Header />
      <IonContent>
        <Banners />
        <CategoryList title="Exclusive Offer" />
        <CategoryList title="Best Selling" />
        <CategoryList title="Other Products" />
      </IonContent>
    </>
  );
};

export default Home;
