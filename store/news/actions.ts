import type {I_ChangedNewsConfigForm, I_NewsConfigForm} from "~/components/admin/newsConfigForm/models/interfaces";
import type {I_ApiNewsData} from "~/models/db/interfaces";

const hostName = useLocalStorage().getItem('host')

export default {
    A_SET_ALL_NEWS(context): void {
        fetch(`${hostName}`).then(res => {
            if(res.ok) {
                return res.json()
            }
        }).then((data: I_ApiNewsData[]) => {
            console.log(data, 'x')
            context.commit("M_SET_ALL_NEWS", data.news)
        })
            .catch((err) => console.log(err))
    },
    async A_SET_NEW_NEWS(context, payload: I_NewsConfigForm): boolean {
        let added: boolean = false

        await fetch(`${hostName}/news`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_ALL_NEWS")

                added = true
            }
        })
        return added
    },
    async A_CHANGE_NEWS_DATA(context, payload: I_ChangedNewsConfigForm): boolean {
        let changed: boolean = false

        await fetch(`${hostName}/news/${payload.id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload.data)
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_ALL_NEWS")

                changed = true
            }
        })
        return changed
    },
    async A_GET_NEWS(context, payload: string): null | I_ApiNewsData {
        let result: null | I_ApiNewsData = null

        await fetch(`${hostName}/news/${payload}`).then(res => {
            if(res.ok) return res.json()
        }).then((data: I_ApiNewsData) => result = data)

        return result
    },
    async A_DELETE_NEWS(context, payload: string): boolean {
        let deleted: boolean = false

        await fetch(`${hostName}/news/${payload}`, {
            method: "DELETE"
        }).then(res => {
            if (res.ok) {
                const {$store} = useNuxtApp()
                $store.dispatch("A_SET_ALL_NEWS")

                deleted = true
            }
        })

        return deleted
    }
}