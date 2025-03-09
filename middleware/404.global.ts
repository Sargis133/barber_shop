export default defineNuxtRouteMiddleware((to, from) => {
    const { $store } = useNuxtApp()

    if(to.matched.length === 0) {
       return $store.getters.getLayoutType ? '/client' : '/admin'
    }
})