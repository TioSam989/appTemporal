import React, { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, StyleSheet, View, Easing } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Text } from 'react-native-paper';

const SplashScreen = () => {
    const translateY = useRef(new Animated.Value(Dimensions.get('screen').height)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        // Combine animations using Animated.parallel
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
        ]).start();
    }, [translateY, opacity]);

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
            <LinearGradient
                // Background Linear Gradient
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
