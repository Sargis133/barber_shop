import type {I_ShopState} from "~/models/store/shop/interfaces";
import type {I_ApiProductData} from "~/models/db/interfaces";

export default {
    getAllProducts:(state: I_ShopState): I_ApiProductData[] => {
        return state.products
    }
}