import { IonImg, IonSlide, IonSlides } from '@ionic/react';
import React from 'react';
import Banners from '../components/Banners';
import CategoryList from '../components/CategoryList';

const Home: React.FC = () => {

  return (
    <>
      <Banners />
      <CategoryList title="Exclusive Offer" />
      <CategoryList title="Best Selling" />
      <CategoryList title="Other Products" />
    </>
  );
};

export default Home;
