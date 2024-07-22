import React, { useEffect, useRef, useState } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native-paper';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CheckHasPassedByCarouselStart } from '../utils/functions';
import { useDispatch } from 'react-redux';


const SplashScreen: React.FC = () => {
    const dispatch = useDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()

    const [nextRoute, setNextRoute] = useState<string>()
    const [timing, setTiming] = useState<number>(5000)

    const translateY = useRef(new Animated.Value(Dimensions.get('screen').height)).current
    const opacity = useRef(new Animated.Value(0)).current

    const skipTiming = () => setTiming(0)

    const checkNextRoute = async () => {
        const passedByCarousel = await CheckHasPassedByCarouselStart()
        dispatch({ type: 'SET_PASSED_CAROUSEL', payload: passedByCarousel ? true : false })

        if (passedByCarousel) {
            setNextRoute('login')
        } else {
            setNextRoute('stepsCarousel')
        }
    }

    useEffect(() => {
        Animated.parallel([
            Animated.timing(translateY, {
                toValue: 0,
                duration: 3000,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 1,
                duration: 3000,
                easing: Easing.out(Easing.ease),
                useNativeDriver: true,
            })
        ]).start()
    }, [translateY, opacity])

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            if (nextRoute) navigation.navigate('stepsCarousel')
        }, timing)

        return () => clearTimeout(timeoutId)
    }, [nextRoute, timing])

    useEffect(() => {
        checkNextRoute()
    }, [])

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <LinearGradient
                colors={['#a6baf0', '#4067c7']}
                style={styles.background}
            />
            <Animated.View style={[styles.animatedView, { transform: [{ translateY }], opacity }]}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{
                        width: Dimensions.get('screen').width * 0.5,
                        height: Dimensions.get('screen').width * 0.5,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                    }}
                />
                <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10 }}>
                    <Text variant={'titleLarge'}>
                        NOME APP
                    </Text>
                    <Text variant={'labelLarge'}>
                        Slogan
                    </Text>
                </View>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: '100%',
    },
    animatedView: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
    },
});

export default SplashScreen;
