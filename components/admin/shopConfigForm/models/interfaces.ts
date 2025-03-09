export interface I_ShopConfigForm {
    title: string,
    description: string,
    image: string,
    price: string
}

export interface I_ChangeShopForm {
    id: string,
    data: I_ShopConfigForm
}