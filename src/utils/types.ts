export type ProductType =  {
    image: {
         thumbnail: string
         mobile: string
         tablet: string
         desktop: string
    },
    name: string
    category: string
    price: number
}


export type CartProductType = {
    name: string
    category: string
    price: number
    quantity: number
}