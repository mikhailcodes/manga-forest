
import * as SecureStore from 'expo-secure-store';

const useSecureStore = async (key: string, initialValue: string) => {
    await SecureStore.setItemAsync(key, initialValue);
    return true
}

export const getSecureStore = async (key: string) => {
    let result = await SecureStore.getItemAsync(key);
    return result;
}

const removeSecureStore = async (key: string) => {
    let result = await SecureStore.deleteItemAsync(key);
    return result;
}

export const storeData = (key: any, data: any) => {
    const toJSON = JSON.stringify(data);
    useSecureStore(key, toJSON)
}

export const isAnEmail = (email: string) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}
