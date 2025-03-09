import type {I_ApiCategoryData, I_ApiServiceData, I_ApiTypeData} from "~/models/db/interfaces";

export interface I_ServicesState {
    types: I_ApiTypeData[],
    categories: I_ApiCategoryData[],
    services: I_ApiServiceData[]
}