import React from "react";
import { Image, Text, View } from 'react-native'
import { ButtonView } from "../../components";
import { Colors, Images } from "../../theme";
import { NavigationService } from "../../utils";
import styles from "./styles";
import Icon from 'react-native-vector-icons/Feather'

const HeaderRightIcon = ({ isVectorIcon = true, vectorIconName = "phone-call", image, customContainerStyle, customImageStyle, iconSize = 20, onPress = () => null, iconColor = Colors.white }) => {
    return (
        <ButtonView style={[styles.container, customContainerStyle]} onPress={() => onPress()} >
            {isVectorIcon && <Icon name={vectorIconName} size={iconSize} color={iconColor} style={{
                transform: [{ rotate: "-90deg" }],
            }} />}
            {!isVectorIcon && <Image source={image} style={[customImageStyle]} />}
        </ButtonView>
    )
}

export default HeaderRightIcon