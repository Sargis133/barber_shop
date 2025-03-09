import type {I_ApiNewsData} from "~/models/db/interfaces";

export interface I_NewsState {
    news: null | I_ApiNewsData[]
}