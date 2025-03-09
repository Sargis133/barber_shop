export default defineNuxtRouteMiddleware(async (to, from) => {
    const { $store } = useNuxtApp()

    const adminIsLogged = await $store.dispatch("A_ADMIN_IS_LOGGED")

    if(adminIsLogged && to.path === "/admin/login") {
        return navigateTo("/admin")
    } else if(!adminIsLogged && to.path === "/admin") {
        return navigateTo("/admin/login")
    }
})