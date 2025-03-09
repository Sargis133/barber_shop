import type {I_NewsState} from "~/models/store/news/interfaces";
import type {I_ApiNewsData} from "~/models/db/interfaces";

export default {
    M_SET_ALL_NEWS(state: I_NewsState, payload: I_ApiNewsData[]) {
        state.news = payload
    }
}