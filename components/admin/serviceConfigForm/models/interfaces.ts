export interface I_ServiceConfigForm {
    type: string,
    category: string,
    image: string,
    name: string,
    description: string,
    price: string,
    discount: string
}

export interface I_ChangeServiceForm {
    id: string,
    data: I_ServiceConfigForm
}