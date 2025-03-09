import type {
    I_AboutPageData,
    I_ContactPageData,
    I_NewsPageData, I_PageDataConfig,
    I_ShopPageData
} from "~/models/store/pages/interfaces";
import type {I_ApiAllPagesData} from "~/models/db/interfaces";

export default {
    A_SET_ALL_PAGES_DATA(context): void {
        fetch("http://localhost:8000/pages")
            .then(res => res.json())
            .then((data: I_ApiAllPagesData) => context.commit("M_SET_ALL_PAGES_DATA", data))
    },
    async A_CHANGE_PAGE_DATA(context, payload: I_PageDataConfig): boolean {
        let result: boolean = false

        await fetch("http://localhost:8000/pages")
            .then(res => res.json())
            .then(async(data: I_ApiAllPagesData): void => {
                data[payload.pageName] = payload.data

                await fetch("http://localhost:8000/pages", {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body : JSON.stringify(data)
                }).then(res => res.json())
                    .then(() => result = true)
            })
        return result
    },
    async A_SET_ABOUT_PAGE_DATA(context, payload: I_AboutPageData): boolean {
        const { $store } = useNuxtApp()
        let result: boolean = false

        const data: I_PageDataConfig = {
            pageName: "aboutUs",
            data: payload
        }

        const response = $store.dispatch("A_CHANGE_PAGE_DATA", data)
        await response.then(res => {
            if(res) {
                context.commit("M_SET_ABOUT_PAGE_DATA", payload)
                result = true
            }
        })

        return result
    },
    async A_SET_NEWS_PAGE_DATA(context, payload: I_NewsPageData): boolean {
        const { $store } = useNuxtApp()
        let result: boolean = false

        const data: I_PageDataConfig = {
            pageName: "news",
            data: payload
        }

        const response = $store.dispatch("A_CHANGE_PAGE_DATA", data)
        await response.then(res => {
            if(res) {
                context.commit("M_SET_NEWS_PAGE_DATA", payload)
                result = true
            }
        })

        return result
    },
    async A_SET_CONTACT_PAGE_DATA(context, payload: I_ContactPageData): boolean {
        const { $store } = useNuxtApp()
        let result: boolean = false

        const data: I_PageDataConfig = {
            pageName: "contact",
            data: payload
        }

        const response = $store.dispatch("A_CHANGE_PAGE_DATA", data)
        await response.then(res => {
            if(res) {
                context.commit("M_SET_CONTACT_PAGE_DATA", payload)
                result = true
            }
        })

        return result
    },
    async A_SET_SHOP_PAGE_DATA(context, payload: I_ShopPageData): boolean {
        const { $store } = useNuxtApp()
        let result: boolean = false

        const data: I_PageDataConfig = {
            pageName: "shop",
            data: payload
        }

        const response = $store.dispatch("A_CHANGE_PAGE_DATA", data)
        await response.then(res => {
            if(res) {
                context.commit("M_SET_SHOP_PAGE_DATA", payload)
                result = true
            }
        })

        return result
    }
}