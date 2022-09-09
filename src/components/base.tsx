import React from 'react';
import { Text, View, Pressable, Image, useColorScheme, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useGlobalStyles from '../stylesheets/mainStyling';
import placeholderIcon from '../assets/placeholder_icon.png';
import { SvgUri } from "react-native-svg";
import { useUserData } from '@nhost/react';


const TabBarIcon = (props: any) => {
    return (
        <Ionicons
            name={props.name}
            size={props.size ? props.size : 20}
            color={props.tintColor}
        />
    );
};

const AvatarIcon = (props: any) => {
    let url = `https://avatars.dicebear.com/api/big-ears-neutral/manga-forest-${props?.user_data.id}.svg?r=50&size=30`
    return (
        <SvgUri
            width={30}
            height={30}
            uri={url}
        />
    );
};

export const Avatar = (props: any) => {
    const { userData } = useUserData();
    return (
        <AvatarIcon user_data={userData}>
        </AvatarIcon>
    );
}

export const Header = () => {
    const colors = useColorScheme();
    const style = useGlobalStyles();
    const userData = useUserData();
    return (
        <>
            <View style={style.headerContainer} >
                <Image
                    source={placeholderIcon}
                    style={{ width: 40, height: 40 }}>
                </Image>

                <View style={style.headerRight}>
                    <Pressable style={{ marginHorizontal: 15 }}>
                        <TabBarIcon
                            name="ios-notifications"
                            size={25}
                            tintColor={colors === 'light' ? 'white' : 'black'} />
                    </Pressable>

                    <Pressable>
                        <AvatarIcon user_data={userData}>
                        </AvatarIcon>

                    </Pressable>
                </View>
            </View>
        </>
    );
};

export const SettingsList = (props: any) => {
    const { title } = props;
    const style = useGlobalStyles();
    const colors = useColorScheme();
    return (
        <>
            <TouchableOpacity
                style={style.itemList}>
                <Text style={style.subtitle}>{title}</Text>
                <TabBarIcon
                    name="chevron-forward-sharp"
                    size={25}
                    tintColor={colors === 'light' ? 'white' : 'black'} />
            </TouchableOpacity>
        </>
    );
};
