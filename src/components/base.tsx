import React from 'react';
import { Text, View, Pressable, Image, useColorScheme, TouchableOpacity, Dimensions, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import useGlobalStyles from '../stylesheets/mainStyling';
import { SvgUri } from "react-native-svg";
import { useUserData } from '@nhost/react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';

import { carouselItems, categoriesItems } from '../data/mockData';

import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';


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
            width={props.size ? props.size : 30}
            height={props.size ? props.size : 30}
            uri={url}
        />
    );
};

export const Avatar = (props: any) => {
    const userData = useUserData();
    return (
        <AvatarIcon user_data={userData} size="80">
        </AvatarIcon>
    );
}

export const Header = () => {
    const colors = useColorScheme();
    const style = useGlobalStyles();
    const userData = useUserData();
    return (
        <View style={style.headerContainer} >
            <View style={style.headerRight}>
                <Pressable style={{ marginHorizontal: 15 }}>
                    <TabBarIcon
                        name="ios-notifications"
                        size={25}
                        tintColor={colors === 'light' ? 'black' : '#4EC300'} />
                </Pressable>

                <Pressable>
                    <AvatarIcon user_data={userData}>
                    </AvatarIcon>

                </Pressable>
            </View>
        </View>
    );
};

export const SettingsList = (props: any) => {
    const { title, onPress } = props;
    const style = useGlobalStyles();
    const colors = useColorScheme();
    return (
        <>
            <TouchableOpacity
                onPress={onPress}
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

export const MainSlider = (props: any) => {
    const style = useGlobalStyles();
    const colors = useColorScheme();
    const userData = useUserData();
    const isCarousel = React.useRef(null)
    const SLIDER_WIDTH = Dimensions.get('window').width;
    const ITEM_WIDTH = Dimensions.get('window').width;



    const CarouselCardItem = ({ item, index }) => {
        return (
            <View style={style.SlideContainer} key={index}>
                <ImageBackground source={{ uri: item.image }} resizeMode="cover" style={style.SlideImage}>
                    <LinearGradient
                        colors={colors === 'light' ? ['#00000000', '#ffffff'] : ['#00000000', '#000000']}
                        style={style.SlideGradient}>
                        <Text style={style.SlideHeader}>{item.title}</Text>
                    </LinearGradient>
                </ImageBackground>

            </View>
        )
    }

    return (
        <>
            <View style={style.headerContainerAbsolute} >
                <View style={style.headerRight}>
                    <Pressable style={{ marginHorizontal: 15 }}>
                        <TabBarIcon
                            name="ios-notifications"
                            size={25}
                            tintColor={colors === 'light' ? 'black' : '#4EC300'} />
                    </Pressable>

                    <Pressable>
                        <AvatarIcon user_data={userData}>
                        </AvatarIcon>
                    </Pressable>
                </View>
            </View>
            <Carousel
                layout="stack"
                layoutCardOffset={18}
                ref={isCarousel}
                loop={true}
                autoplay={true}
                autoplayDelay={4000}
                autoplayInterval={10000}
                data={carouselItems}
                activeAnimationType="timing"
                renderItem={CarouselCardItem}
                sliderWidth={SLIDER_WIDTH}
                itemWidth={ITEM_WIDTH}
                useScrollView={true}
            />
        </>
    );

}

export const CategoryPills = (props: any) => {
    const style = useGlobalStyles();
    const colors = useColorScheme();

    return (
        <ScrollView style={style.categoryPills}
            horizontal={true}
            showsHorizontalScrollIndicator={false}>

            {categoriesItems.map(({ title }) => (
                <TouchableOpacity style={style.categoryPillItem}>
                    <Text style={style.categoryPillText}>{title}</Text>
                </TouchableOpacity>
            ))}

        </ScrollView>
    );
}


const CollectionCarousel = (props: any) => {
}

const CollectionListVertical = (props: any) => {
}

export const CollectionRow = (props: any) => {

}
