import { StyleSheet } from "react-native";
import { Colors, Fonts } from "../../theme";
export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        color: Colors.white,
        marginLeft: 4,
        fontSize: Fonts.size.size_15
    }
})