import { IonContent, IonPage } from '@ionic/react';
import React from 'react';
import Header from '../components/Header';

const About: React.FC = () => {
    return <IonPage>
        <Header />
        <IonContent>
            Content!!!!!!!!!!!
        </IonContent>
    </IonPage>
}

export default About;