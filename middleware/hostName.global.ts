export default defineNuxtRouteMiddleware((to, from) => {
    if(process.client) {
        const storage = useLocalStorage()
        const location = computed(() => window?.location.host)

        if(location.value?.includes('localhost')) {
            storage.setItem('host', '/db.json')
        } else {
            storage.setItem('host', 'https://sargis133.github.io/barber_shop/db.json')
        }
    }

})