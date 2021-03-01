import { IonLabel } from '@ionic/react';
import React from 'react';
import { Category } from '../types';
import SubCategoryItem from './SubCategoryItem';


const SubCategories: React.FC<{ category: Category }> = ({ category }) => {
    return (
        <div className="sub-categories ion-padding">
            <IonLabel>{category.name}</IonLabel>
            <div className="items">
                {category.subCategories.map((sub) => <SubCategoryItem key={sub.id} subCategory={sub} />)}
            </div>
        </div>
    );
}

export default SubCategories;