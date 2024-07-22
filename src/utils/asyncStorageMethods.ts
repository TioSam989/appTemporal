import AsyncStorage from "@react-native-async-storage/async-storage";

export const StoreText = async (key: string, text: string) => {
    try {
        await AsyncStorage.setItem(key, text)
    } catch (error) {
        console.error('Error storing text:', error)
    }
}

export const getData = async (key: string) => {
    try {
        const item = await AsyncStorage.getItem('user');
        if (item) {
            return item;
        } else {
            return false;
        }
    } catch (e) {
        // error reading value
        console.log(e);
    }
};

export const RetrieveText = async (key: string) => {
    try {
        const text = await AsyncStorage.getItem(key);
        if (text !== null) {
            return text
        }
    } catch (error) {
        console.error('Error retrieving text:', error)
    }
}

export const RemoveSpecificItem = async (key: string) => {
    try {
        console.log({ key })
        await AsyncStorage.removeItem(key)
    } catch (error) {
        console.error('Erro ao remover o item:', error)
    }
};