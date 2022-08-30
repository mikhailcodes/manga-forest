import * as Font from 'expo-font';

export default useFonts = async () =>
    await Font.loadAsync({
        Montserrat: require('../src/assets/Montserrat-Medium.ttf'),
    });
