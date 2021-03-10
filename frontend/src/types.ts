export interface Image {
    imgFile: string,
    id: number,
    orderNum: number
}

export interface Banner {
    imgFile: string,
    id: number,
    orderNum: number,
    description: string
}

export interface Product {
    name: string,
    price: number,
    id: number,
    images: Image[],
    units: string,
    description: string
}
export interface SubCategory {
    id: number,
    name: string,
    image: Image
}
export interface Category {
    id: number,
    name: string,
    icon: string,
    products: Product[],
    subCategories: SubCategory[]
}

export interface IdParam {
    id: string
}