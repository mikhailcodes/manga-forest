
import * as SecureStore from 'expo-secure-store';


export const useSecureStore = async (key: string, initialValue: string) => {
    await SecureStore.setItemAsync(key, initialValue);
    return true
}

export const getSecureStore = async (key: string) => {
    let result = await SecureStore.getItemAsync(key);
    return result;
}

export const removeSecureStore = async (key: string) => {
    let result = await SecureStore.deleteItemAsync(key);
    return result;
}
