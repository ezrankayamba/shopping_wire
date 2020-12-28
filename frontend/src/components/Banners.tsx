import { useQuery } from '@apollo/client';
import { IonImg, IonLabel, IonSlide, IonSlides } from '@ionic/react';
import React from 'react';
import { BACKEND_URL } from '../config';
import { GET_BANNERS } from '../graphql/Products';
import { Banner } from '../types';

const Banners: React.FC = () => {
    const { loading, error, data } = useQuery(GET_BANNERS)
    if (loading) {
        return <IonLabel>Loading ...</IonLabel>
    }
    if (error) {
        return <IonLabel>Error fetching banners</IonLabel>
    }
    const banners: Banner[] = data.allBanners
    return (
        <IonSlides>
            {banners.map(b => <IonSlide key={b.id}>
                <IonImg src={`${BACKEND_URL}/media/${b.imgFile}`}></IonImg>
            </IonSlide>)}
        </IonSlides>
    );
}

export default Banners;