import { IonContent, IonLabel } from '@ionic/react';
import { useQuery } from "@apollo/client";
import React, { useState } from 'react';
import { GET_CATEGORIES } from '../graphql/Products';
import { Category } from "../types"
import SubCategories from '../components/SubCategories';
import MyIcon from '../components/MyIcon';
import Header from '../components/Header';

const Categories: React.FC = () => {
  const [active, setActive] = useState(0)
  const { data, loading, error } = useQuery(GET_CATEGORIES)


  if (loading) {
    return <p>Loading ...</p>
  }

  if (error) {
    return <p>Error loading</p>
  }

  const categoryList = data.allCategories;
  let category: Category = categoryList.find((cat: Category) => cat.id === active) || categoryList[0]

  return (
    <>
      <Header />
      <IonContent>
        <div className="split-container">
          <div className="tabs">
            {categoryList.map((cat: Category) => <div key={cat.id} className={`button-icon-top${category.id === cat.id ? " active" : ""}`} onClick={() => setActive(cat.id)}>
              <MyIcon name={cat.icon} />
              <IonLabel>{cat.name}</IonLabel>
            </div>)
            }
          </div>
          <div className="tab-content">
            <SubCategories category={category} />
          </div>
        </div>
      </IonContent>
    </>
  );
};

export default Categories;
