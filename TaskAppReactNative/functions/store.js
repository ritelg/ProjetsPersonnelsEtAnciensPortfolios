import AsyncStorage from '@react-native-async-storage/async-storage'

export const setData = (key, value) => {
    try {
        AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
    }
}

export const getData = async (key) => {
    try {
        const data = await AsyncStorage.getItem(key)
        if(data !== null) {
            return JSON.parse(data)
        }
        return null
    } catch(e) {
    }
}

