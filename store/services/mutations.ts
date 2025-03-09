import type {I_ApiCategoryData, I_ApiServiceData, I_ApiTypeData} from "~/models/db/interfaces";
import type {I_ServicesState} from "~/models/store/services/interfaces";

export default {
    M_SET_TYPES(state: I_ServicesState, payload: I_ApiTypeData[]) {
        state.types = payload
    },
    M_SET_CATEGORIES(state: I_ServicesState, payload: I_ApiCategoryData[]) {
        state.categories = payload
    },
    M_SET_SERVICES(state: I_ServicesState, payload: I_ApiServiceData[]) {
        state.services = payload
    }
}