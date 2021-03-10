import { useQuery } from "@apollo/client";
import { IonButton, IonCard, IonCardContent, IonCol, IonGrid, IonImg, IonLabel, IonRow, IonSlide, IonSlides } from "@ionic/react";
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
        spaceBetween: 0
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


    return <IonGrid className="ion-padding category-list">
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
                <IonSlides options={slideOpts} >
                    {products.map(p => <IonSlide key={p.id}>
                        <IonCard className="category-box ion-no-margin">
                            <IonImg src={`${BACKEND_URL}/media/${p.images[0].imgFile}`} style={style}></IonImg>
                            <IonCardContent>
                                <p>{p.name}</p>
                                <IonLabel><small>TZS {numFmt(p.price)}</small></IonLabel>
                            </IonCardContent>
                        </IonCard>
                    </IonSlide>)}
                </IonSlides>
            </IonCol>
        </IonRow>
    </IonGrid>
}

export default CategoryList;