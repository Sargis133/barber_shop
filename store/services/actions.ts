import type {I_ChangeTypeForm, I_TypeConfigForm} from "~/components/admin/typeConfigForm/models/interfaces";
import type {I_CategoryConfigForm} from "~/components/admin/categoryConfigForm/models/interfaces";
import type {I_ChangeServiceForm, I_ServiceConfigForm} from "~/components/admin/serviceConfigForm/models/interfaces";
import type {I_ApiCategoryData, I_ApiServiceData, I_ApiTypeData} from "~/models/db/interfaces";

const hostName = useLocalStorage().getItem('host')

export default {
    A_SET_TYPES(context): void {
        fetch(`${hostName}/types`).then(res => {
            if (res.ok) return res.json()
        })
            .then((data: I_ApiTypeData[]) => context.commit("M_SET_TYPES", data))
    },
    A_SET_CATEGORIES(context): void {
        fetch(`${hostName}/categories`)
            .then(res => {
                if (res.ok) return res.json()
            })
            .then((data: I_ApiCategoryData[]) => context.commit("M_SET_CATEGORIES", data))
    },
    A_SET_SERVICES(context): void {
        fetch(`${hostName}/services`)
            .then(res => {
                if (res.ok) return res.json()
            })
            .then((data: I_ApiServiceData[]) => context.commit("M_SET_SERVICES", data))
    },
    async A_SET_NEW_TYPE(context, payload: I_TypeConfigForm): boolean {
        let added: boolean = false
        await fetch(`${hostName}/types`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_TYPES")

                added = true
            }
        })
        return added
    },
    async A_CHANGE_TYPE_DATA(context, payload: I_ChangeTypeForm): boolean {
        let changed: boolean = false
        await fetch(`${hostName}/types/${payload.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload.data)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_TYPES")

                changed = true
            }
        })
        return changed
    },
    async A_DELETE_TYPE(context, payload: string): boolean {
        let deleted: boolean = false

        await fetch(`${hostName}/types/${payload}`, {
            method: "DELETE"
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_TYPES")

                deleted = true
            }
        })

        return deleted
    },
    async A_SET_NEW_CATEGORY(context, payload: I_CategoryConfigForm): boolean {
        let added: boolean = false

        await fetch(`${hostName}/categories`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_CATEGORIES")

                added = true
            }
        })
        return added
    },
    async A_CHANGE_CATEGORY_DATA(context, payload: I_ChangeCategoryForm): boolean {
        let changed: boolean = false

        await fetch(`${hostName}/categories/${payload.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload.data)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_CATEGORIES")

                changed = true
            }
        })
        return changed
    },
    async A_DELETE_CATEGORY(context, payload: string): boolean {
        let deleted: boolean = false

        await fetch(`${hostName}/categories/${payload}`, {
            method: "DELETE"
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_CATEGORIES")

                deleted = true
            }
        })

        return deleted
    },
    async A_SET_NEW_SERVICE(context, payload: I_ServiceConfigForm): boolean {
        let added: boolean = false
        await fetch(`${hostName}/services`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_SERVICES")

                added = true
            }
        })
        return added
    },
    async A_CHANGE_SERVICE_DATA(context, payload: I_ChangeServiceForm): boolean {
        let changed: boolean = false
        await fetch(`${hostName}/services/${payload.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload.data)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_SERVICES")

                changed = true
            }
        })
        return changed
    },
    async A_DELETE_SERVICE(context, payload: string): boolean {
        let deleted: boolean = false

        await fetch(`${hostName}/services/${payload}`, {
            method: "DELETE"
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_SERVICES")

                deleted = true
            }
        })

        return deleted
    },
    async A_GET_CATEGORIES_BY_TYPE(context, payload: string): I_ApiCategoryData[] {
        const categories: I_ApiCategoryData[] = []
        await fetch(`${hostName}/categories`).then(res => {
            if (res.ok) {
                return res.json()
            }
        })
            .then((data: I_ApiCategoryData[]) => data.forEach((item: I_ApiCategoryData) => item.type === payload ? categories.push(item) : ""))

        return categories
    },
    async A_GET_TYPE_DATA(context, payload: string): I_ApiTypeData {
        let typeData: I_ApiTypeData = {}
        await fetch(`${hostName}/types/${payload}`).then(res => {
            if(res.ok) return res.json()
        })
            .then((data: I_ApiTypeData) => typeData = data)
        return typeData
    },
    async A_GET_CATEGORY_DATA(context, payload: string): I_ApiCategoryData {
      let result: I_ApiCategoryData = {}
      await fetch(`${hostName}/categories/${payload}`).then(res => {
          if(res.ok) return res.json()
      })
          .then((data: I_ApiCategoryData) => result = data)
        return result
    },
    async A_GET_SERVICES_BY_CATEGORY(context, payload: string): I_ApiServiceData[] {
        let services: I_ApiServiceData[] = []

        await fetch(`${hostName}/services`).then(res => {
            if(res.ok) return res.json()
        })
            .then((data: I_ApiServiceData[]) => services = data.filter((service: I_ApiServiceData) => service.category === payload))
        return services
    },
    async A_GET_SERVICE_BY_ID(context, payload: string): I_ApiServiceData {
        let service = {}
        await fetch(`${hostName}/services/${payload}`).then(res => res.json())
            .then(data => service = data)
            .catch((err) => console.log(err))
        return service
    }
}