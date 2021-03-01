import { gql } from '@apollo/client';

export const GET_PRODUCTS_BY_TAG = gql`
    query getProductsByTag($name:String!){
        productsByTag(name: $name) {
        id
        name
        description
        price
        units
        category {
            id
            name
        }
        tags {
            id
            name
        }
        images{
            id,
            imgFile,
            orderNum
        }
        }
    }
    `
export const GET_BANNERS = gql`
    query getBanners{
        allBanners{
            id
            description
            orderNum
            imgFile
        }
    }
    `
export const GET_CATEGORIES = gql`
    query {
        allCategories{
            products {
                id
            }
            name
            id
            subCategories{
                id
                name
                image
            }
            icon
        }
    }
  `