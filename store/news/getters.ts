import type {I_NewsState} from "~/models/store/news/interfaces";
import type {I_ApiNewsData} from "~/models/db/interfaces";

export default {
    getAllNews:(state: I_NewsState): I_ApiNewsData[] => {
        return state.news
    }
}