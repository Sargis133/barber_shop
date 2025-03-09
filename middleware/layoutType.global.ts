export default defineNuxtRouteMiddleware((to, from) => {
    const { $store } = useNuxtApp()


    // IF PATH CHANGED MANUAL
    const isClientPath: boolean = to.path.startsWith('/client')

    if(isClientPath) {
        $store.dispatch("A_CHANGE_LAYOUT_STATE", true)
    } else {
        $store.dispatch("A_CHANGE_LAYOUT_STATE", false)

        if(to.path === '/') {
            return navigateTo('/admin')
        }
    }

    // CHECK SELECTED LAYOUT
    const isClientLayout = computed<boolean>(() => $store.getters.getLayoutType)

    watch(isClientLayout, (newV: boolean) => {
        if(newV) {
            return navigateTo("/client")
        } else {
            return navigateTo("/admin")
        }
    })

})