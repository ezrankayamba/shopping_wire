import React from 'react';
import Banners from '../components/Banners';
import CategoryList from '../components/CategoryList';

const Home: React.FC = () => {

  return (
    <div className="ion-padding">
      <Banners />
      <CategoryList title="Exclusive Offer" />
      <CategoryList title="Best Selling" />
      <CategoryList title="Other Products" />
    </div>
  );
};

export default Home;
