import { StyleSheet } from 'react-native';
import React, { useEffect } from 'react';
import { useColorScheme, } from 'react-native';
import Constants from 'expo-constants';

let brandColor = '#4EC300';
let h1 = 40,
    h2 = 28,
    h3 = 24,
    h4 = 20,
    h5 = 16,
    p = 14,
    p2 = 12,
    p3 = 10;

const getGlobalStyles = (props: any) => StyleSheet.create({
    viewContainer: {
        paddingTop: 10,
        paddingHorizontal: 20,
        backgroundColor: props.colors === 'dark' ? '#000' : '#fff',
        width: '100%',
        flex: 1,
    },
    headerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
        backgroundColor: 'transparent',
    },
    headerContainerAbsolute: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'transparent',
        position: 'absolute',
        zIndex: 90,
        marginTop: Constants.statusBarHeight + 10,
        paddingHorizontal: 20,
    },
    headerRight: {
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    tabStyles: {
        paddingBottom: 10,
        width: '80%',
        alignSelf: 'center',
        marginBottom: 40,
        borderRadius: 20,
        position: 'absolute',
        bottom: 0,
    },
    headingContainer: {
        marginBottom: 30,
    },
    title: {
        color: props.colors === 'dark' ? '#fff' : brandColor,
        fontSize: h1,
        fontWeight: 'bold',
    },
    subtitle: {
        color: props.colors === 'dark' ? '#fff' : brandColor,
        fontSize: h5,

    },
    paragraph: {
        color: props.colors === 'dark' ? brandColor : '#000',
        fontSize: p,
    },
    pageContainer: {
        marginTop: 10,
    },
    itemList: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20,
        paddingBottom: 10,
        borderBottomColor: props.colors === 'dark' ? '#eee' : '#000',
        borderBottomWidth: 1,
    },
    avatarContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        marginVertical: 10,
    },
    backButton: {
        marginRight: 10,
    },
    horizontalFlex: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',

    },
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
        color: brandColor,
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
    image: {
        flex: 1,
        justifyContent: "center",
        width: "120%",
        resizeMode: "contain",
    },
    largeImageContainer: {
        height: "100%",
        width: "100%",
        resizeMode: "cover",
        display: "flex",
        flexDirection: "column-reverse",
    },
    headingText: {
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "10%",
        marginBottom: "5%",
        color: "#fff",
    },
    view: {
        marginVertical: 15,
    },
    input: {
        height: 60,
        width: '100%',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6f6f6f',
        padding: 10,
        paddingLeft: 20,
        backgroundColor: 'transparent',
        color: '#fff',
        position: 'relative',
        textTransform: 'lowercase',

    },
    label: {
        color: '#6f6f6f',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    icon: {
        position: 'absolute',
        right: 20,
        top: 42,
    },
    primary_button: {
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: brandColor,
    },
    secondary_button: {
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: '#ffffff',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#000',
    },
    light_text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#fff',
    },
    oauthButton: {
        paddingVertical: 15,
        marginVertical: 15,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#6f6f6f',
        position: 'relative',
    },
    oauthText: {
        fontSize: 16,
        lineHeight: 21,
        letterSpacing: 0.25,
        color: '#6f6f6f',
    },
    btn_icon: {
        position: 'absolute',
        left: 20,
        top: "65%",
    },
    SlideContainer: {
        backgroundColor: props.colors === 'dark' ? '#000' : '#fff',
        borderRadius: 8,
        width: '100%',
        shadowColor: "#000",
        position: 'absolute',
        height: 500,
    },
    SlideImage: {
        backgroundColor: props.colors === 'dark' ? '#000' : '#fff',
        width: '100%',
        height: 400,
    },
    SlideHeader: {
        color: props.colors === 'dark' ? '#fff' : '#000',
        fontSize: 28,
        fontWeight: "bold",
    },
    SlideBody: {
        color: "#222",
        fontSize: 18,
    },
    SlideGradient: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column-reverse',
        paddingHorizontal: 20,
        paddingVertical: 60,
    },
    categoryPills: {
        display: 'flex',
        flexDirection: 'row',
    },
    categoryPillItem: {
        backgroundColor: props.colors === 'dark' ? '#808080' : brandColor,
        width: 100,
        borderRadius: 10,
        paddingVertical: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    categoryPillText: {
        color: props.colors === 'dark' ? '#fff' : '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    }
});

function useGlobalStyles() {
    const colors = useColorScheme();
    // We only want to recompute the stylesheet on changes in color.
    const styles = React.useMemo(() => getGlobalStyles({ colors }), [colors]);
    return styles;
}

export default useGlobalStyles;
