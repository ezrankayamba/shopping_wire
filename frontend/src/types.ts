export interface Image {
    imgFile: string,
    id: number,
    orderNum: number
}

export interface Product {
    name: string,
    price: number,
    id: number,
    images: Image[],
    units: string,
    description: string
}