import { View } from "react-native"
import { Button, Text } from "react-native-paper"
import { useSelector } from "react-redux"
import { IRootState } from "../redux"
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

const StepsCarouselScreen = () => {

    const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>()
    const passedCarousel = useSelector<IRootState, boolean>(state => state.passedCarousel)

    const handleEndButtonPress = () => {
        navigation.navigate('home')
    }

    return (
        <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center', gap: 5 }} >
            <Text>
                CAROUSEL SCREEN
            </Text>
            <Button
                mode={'outlined'}
                onPress={handleEndButtonPress}
            >
                proximo
            </Button>
        </View>
    )
}

export default StepsCarouselScreen