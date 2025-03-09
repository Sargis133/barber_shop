import {createStore} from "vuex";
import main from "./main/store"
import auth from "./auth/store"
import services from "./services/store"
import pages from "./pages/store"
import news from "./news/store"
import shop from "./shop/store"

export const store = createStore({
    modules: {
        main,
        auth,
        services,
        pages,
        news,
        shop
    }
})