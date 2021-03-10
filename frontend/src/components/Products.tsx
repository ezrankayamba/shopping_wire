import { IonContent, IonPage } from "@ionic/react";
import React from "react"
import { useParams } from "react-router";
import { IdParam, SubCategory } from "../types";
import Header from "./Header";

export const Products: React.FC<{ subCategory: SubCategory }> = ({ subCategory }) => {
    const params: IdParam = useParams()
    console.log(params)
    return <IonPage>
        <Header />
        <IonContent>
            <div className="products-container">

            </div>
        </IonContent>
    </IonPage>
}


export default Products;