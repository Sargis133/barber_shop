import type {I_ChangeShopForm, I_ShopConfigForm} from "~/components/admin/shopConfigForm/models/interfaces";
import type {I_ApiProductData} from "~/models/db/interfaces";

export default {
    A_SET_ALL_PRODUCTS(context): void {
        fetch("http://localhost:8000/products").then(res => {
            if(res.ok) return res.json()
        }).then((data: I_ApiProductData[]) => context.commit("M_SET_ALL_PRODUCTS", data))
    },
   async A_CHANGE_PRODUCT_DATA(context, payload: I_ChangeShopForm): boolean {
        let changed: boolean = false

        await fetch(`http://localhost:8000/products/${payload.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload.data)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_ALL_PRODUCTS")

                changed = true
            }
        })
        return changed
    },
    async A_SET_NEW_PRODUCT(context, payload: I_ShopConfigForm): boolean {
        let added: boolean = false

        await fetch("http://localhost:8000/products", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_ALL_PRODUCTS")

                added = true
            }
        })
        return added
    },
    async A_GET_PRODUCT(context, payload: string): I_ApiProductData {
        let result: I_ApiProductData = {}

        await fetch(`http://localhost:8000/products/${payload}`).then(res => {
            if(res.ok) return res.json()
        }).then((data: I_ApiProductData) => result = data)

        return result
    },
    async A_DELETE_PRODUCT(context, payload: string): boolean {
        let deleted: boolean = false

        await fetch(`http://localhost:8000/products/${payload}`, {
            method: "DELETE"
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_ALL_PRODUCTS")

                deleted = true
            }
        })

        return deleted
    }
}