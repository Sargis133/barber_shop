export interface I_TypeConfigForm {
    image: string,
    name: string,
    description: string
}

export interface I_ChangeTypeForm {
    id: string,
    data: I_TypeConfigForm
}