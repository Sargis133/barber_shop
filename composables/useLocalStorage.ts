export const useLocalStorage = () => {

    const setItem = (key: string, value: string): void => {
        localStorage?.setItem(key, value)
    }
    const getItem = (key: string): string => {
        let result: string = ''
        if(process.client) {
            result = localStorage?.getItem(key)
        }
        return result
    }

    return {
        setItem,
        getItem
    }
}