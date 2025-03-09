import type {
    I_AboutPageData,
    I_ContactPageData,
    I_NewsPageData,
    I_PagesState,
    I_ShopPageData
} from "~/models/store/pages/interfaces";

export default {
    getAboutPageData:(state: I_PagesState): I_AboutPageData => {
        return state.aboutUs
    },
    getNewsPageData:(state: I_PagesState): I_NewsPageData => {
        return state.news
    },
    getContactPageData:(state: I_PagesState): I_ContactPageData => {
        return state.contact
    },
    getShopPageData:(state: I_PagesState): I_ShopPageData => {
        return state.shop
    }
}