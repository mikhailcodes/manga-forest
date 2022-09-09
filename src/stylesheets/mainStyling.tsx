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
        paddingTop: Constants.statusBarHeight + 10,
        padding: 20,
        backgroundColor: props.colors === 'light' ? '#000' : '#fff',
        height: '100%',
        width: '100%',
        overflow: 'scroll',
    },
    headerContainer: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 20,
        alignItems: 'center',
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
        color: props.colors === 'light' ? '#fff' : brandColor,
        fontSize: h1,
        fontWeight: 'bold',
    },
    subtitle: {
        color: props.colors === 'light' ? '#fff' : brandColor,
        fontSize: h5,

    },
    paragraph: {
        color: props.colors === 'light' ? brandColor : '#000',
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
        borderBottomColor: props.colors === 'light' ? '#eee' : '#000',
        borderBottomWidth: 1,
    },
});

function useGlobalStyles() {
    const colors = useColorScheme();
    // We only want to recompute the stylesheet on changes in color.
    const styles = React.useMemo(() => getGlobalStyles({ colors }), [colors]);

    return styles;
}

export default useGlobalStyles;
