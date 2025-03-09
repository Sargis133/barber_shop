import type {I_ApiProductData} from "~/models/db/interfaces";
import type {I_ShopState} from "~/models/store/shop/interfaces";

export default {
    M_SET_ALL_PRODUCTS(state: I_ShopState, payload: I_ApiProductData[]) {
        state.products = payload
    }
}