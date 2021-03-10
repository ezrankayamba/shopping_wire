import { IonLabel } from '@ionic/react';
import React from 'react';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { Category } from '../types';
import SubCategoryItem from './SubCategoryItem';


const SubCategories: React.FC<{ category: Category }> = ({ category }) => {
    return (
        <div className="sub-categories ion-padding">
            <IonLabel>{category.name}</IonLabel>
            <div className="items">
                {category.subCategories.map((sub) => <Link to={`/sub-categories/${sub.id}/products`} key={sub.id} >
                    <SubCategoryItem subCategory={sub} />
                </Link>)}
            </div>
        </div>
    );
}

export default SubCategories;