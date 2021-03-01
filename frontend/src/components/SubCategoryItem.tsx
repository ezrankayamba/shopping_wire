import { IonImg } from "@ionic/react"
import React from "react"
import { BACKEND_URL } from "../config"
import { SubCategory } from "../types"

const SubCategoryItem: React.FC<{ subCategory: SubCategory; }> = ({ subCategory }) => {
    return <div>
        {subCategory.image ?
            <IonImg src={`${BACKEND_URL}/media/${subCategory.image}`}></IonImg> : subCategory.name}
    </div>
}

export default SubCategoryItem;