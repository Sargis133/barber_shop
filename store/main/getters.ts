import type {I_MainState} from "~/models/store/main/interfaces";

export default {
    getLayoutType:(state: I_MainState): boolean => {
        return state.clientLayout
    }
}