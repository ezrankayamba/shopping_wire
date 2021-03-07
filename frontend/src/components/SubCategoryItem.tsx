import { IonImg, IonLabel } from "@ionic/react"
import React from "react"
import { BACKEND_URL } from "../config"
import { SubCategory } from "../types"

const SubCategoryItem: React.FC<{ subCategory: SubCategory; }> = ({ subCategory }) => {
    return <div className="d-flex column">
        <IonLabel>{subCategory.name}</IonLabel>
        <IonImg src={`${BACKEND_URL}/media/${subCategory.image}`}></IonImg>
    </div>
}

export default SubCategoryItem;