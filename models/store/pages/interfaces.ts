import type {
    I_ApiAboutPageData,
    I_ApiContactPageData,
    I_ApiNewsPageData,
    I_ApiShopPageData
} from "~/models/db/interfaces";

export interface I_AboutPageData {
    title: string,
    description: string,
    coverImage: string,
    firstText: string,
    firstImage: string,
    secondText: string,
    secondImage: string
}

export interface I_PageDataConfig {
    pageName: string,
    data: I_AboutPageData
}

export interface I_NewsPageData {
    title: string,
    description: string,
    coverImage: string
}

export interface I_ContactPageData {
    title: string,
    description: string,
    coverImage: string
}
export interface I_ShopPageData {
    title: string,
    description: string,
    coverImage: string
}

export interface I_PagesState {
    aboutUs: null | I_ApiAboutPageData,
    contact: null | I_ApiContactPageData,
    news: null | I_ApiNewsPageData,
    shop: null | I_ApiShopPageData
}