import type {I_ApiUserData} from "~/models/db/interfaces";

const hostName = useLocalStorage().getItem('host')

export default {
    A_ADMIN_IS_LOGGED(): boolean {
        const admin = useCookie("admin")

        if(!admin.value) admin.value = ""

        return admin.value !== ""
    },
    A_ADMIN_LOGOUT(): void {
        const admin = useCookie("admin")
        admin.value = ""
    },
    async A_ADMIN_LOGIN(context, payload): boolean {
        let response: boolean = false
        await fetch(`${hostName}/users`).then(res => res.json())
            .then((data: I_ApiUserData[]) => {
                const findAdmin: I_ApiUserData[] = data.filter((users: I_ApiUserData): I_ApiUserData => users.login === payload.email && users.password === payload.password)

                if (findAdmin.length !== 0) {
                    const adminData = useCookie("admin")
                    adminData.value = JSON.stringify(findAdmin[0])
                    response = true
                }
            })
        return response
    }
}