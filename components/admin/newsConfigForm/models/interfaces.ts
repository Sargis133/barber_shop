export interface I_NewsConfigForm {
    title: string,
    description: string,
    image: string,
    date: string,
    time: string
}
export interface I_ChangedNewsConfigForm {
    id: string,
    data: I_NewsConfigForm
}