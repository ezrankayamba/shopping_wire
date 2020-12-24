import { IonImg, IonSlide, IonSlides } from '@ionic/react';
import React from 'react';
import CategoryList from '../components/CategoryList';

const Home: React.FC = () => {
  return (
    <>
      <IonSlides>
        <IonSlide>
          <IonImg src="http://placeimg.com/400/200/men"></IonImg>
        </IonSlide>
        <IonSlide><IonImg src="http://placeimg.com/400/200/women"></IonImg></IonSlide>
        <IonSlide><IonImg src="http://placeimg.com/400/200/werarables"></IonImg></IonSlide>
      </IonSlides>
      <CategoryList title="Exclusive Offer" />
      <CategoryList title="Best Selling" />
      <CategoryList title="Other Products" />
    </>
  );
};

export default Home;
