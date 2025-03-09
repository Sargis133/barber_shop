import type {I_ServicesState} from "~/models/store/services/interfaces";
import type {I_ApiCategoryData, I_ApiServiceData, I_ApiTypeData} from "~/models/db/interfaces";

export default {
    getServicesTypes:(state: I_ServicesState): I_ApiTypeData[] => {
        return state.types
    },
    getServicesCategories: (state: I_ServicesState): I_ApiCategoryData[] => {
        return state.categories
    },
    getServicesData: (state: I_ServicesState): I_ApiServiceData[] => {
        return state.services
    }
}