import { useQuery } from "@apollo/client";
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonGrid, IonIcon, IonImg, IonItem, IonLabel, IonRow, IonSlide, IonSlides } from "@ionic/react";
import { add } from "ionicons/icons";
import React from "react"
import { BACKEND_URL } from "../config";
import { GET_PRODUCTS_BY_TAG } from "../graphql/Products";
import { Product } from "../types";
import { numFmt } from "../utils";


const CategoryList: React.FC<{ title: string; }> = ({ title }) => {
    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        slidesPerView: 1.75,
        spaceBetween: 10
    };
    const style = {
        height: '120px'
    }
    const { loading, error, data } = useQuery(GET_PRODUCTS_BY_TAG, { variables: { name: title } })
    if (loading) {
        return <IonLabel>Loading...</IonLabel>
    }
    if (error) {
        return <IonLabel>Error occured fetching data...</IonLabel>
    }


    const products: Product[] = data.productsByTag
    // console.log(title, data.productsByTag)
    console.log(title, products)


    return <IonGrid className="ion-no-padding category-list">
        <IonRow className="ion-align-items-center">
            <IonCol>{title}</IonCol>
            <IonCol size="auto">
                <IonButton fill="clear" size="small" mode="ios">
                    See all
                </IonButton>
            </IonCol>
        </IonRow>
        <IonRow>
            <IonCol>
                <IonSlides options={slideOpts}>
                    {products.map(p => <IonSlide key={p.id}>
                        <IonCard className="ion-no-margin">
                            <IonCardContent className="ion-no-padding">
                                <IonImg src={`${BACKEND_URL}/${p.images[0].imgFile}`} style={style}></IonImg>
                            </IonCardContent>
                            <IonCardHeader>
                                <p>{p.name}</p>
                            </IonCardHeader>
                            <IonItem lines="none">
                                <IonLabel>TZS {numFmt(p.price)}</IonLabel>
                                <IonButton fill="outline" slot="end">
                                    <IonIcon icon={add} />
                                </IonButton>
                            </IonItem>
                        </IonCard>
                    </IonSlide>)}
                </IonSlides>
            </IonCol>
        </IonRow>
    </IonGrid>
}

export default CategoryList;