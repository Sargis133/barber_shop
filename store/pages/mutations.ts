import type {I_AboutPageData, I_ContactPageData, I_NewsPageData, I_PagesState} from "~/models/store/pages/interfaces";
import type {I_ApiAllPagesData} from "~/models/db/interfaces";

export default {
    M_SET_ALL_PAGES_DATA(state: I_PagesState, payload: I_ApiAllPagesData): void {
        state.aboutUs = payload.aboutUs
        state.contact = payload.contact
        state.news = payload.news
        state.shop = payload.shop
    },
    M_SET_ABOUT_PAGE_DATA(state: I_PagesState, payload: I_AboutPageData) {
        state.aboutUs = payload
    },
    M_SET_NEWS_PAGE_DATA(state: I_PagesState, payload: I_NewsPageData) {
        state.news = payload
    },
    M_SET_CONTACT_PAGE_DATA(state: I_PagesState, payload: I_ContactPageData) {
        state.contact = payload
    },
    M_SET_SHOP_PAGE_DATA(state: I_PagesState, payload: I_ShopPageData) {
        state.shop = payload
    }
}