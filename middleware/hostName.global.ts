export default defineNuxtRouteMiddleware((to, from) => {
    if(process.client) {
        const storage = useLocalStorage()
        const location = computed(() => window?.location.host)

        if(location.value?.includes('localhost')) {
            storage.setItem('host', 'http://localhost:8000')
        } else {
            storage.setItem('host', 'https://sargis133.github.io')
        }
    }

})