export interface I_CategoryConfigForm {
    image: string,
    type: string,
    name: string,
    description: string
}

export interface I_ChangeCategoryForm {
    id: string,
    data: I_CategoryConfigForm
}

export interface I_CategoryDropdownOptions {
    name: string,
    value: string
}