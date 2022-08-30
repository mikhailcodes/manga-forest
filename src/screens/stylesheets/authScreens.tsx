import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    full_width: {
        width: "100%",
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'flex-start',
        paddingTop: 50,
        paddingLeft: 10,
        paddingRight: 10,
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
    },
    heading: {
        color: '#fff',
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    error: {
        color: 'red',
    },
    brand_text: {
        color: '#a3ff65',
    },
    divider: {
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        width: '100%',

    },
    divider_text: {
        color: '#6f6f6f',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    divider_bar: {
        width: "43%",
        overflow: 'hidden',
        height: 0.5,
        backgroundColor: '#6f6f6f',
        marginHorizontal: 10,
    },
    backButton: {
        marginBottom: 15,
    }
});
