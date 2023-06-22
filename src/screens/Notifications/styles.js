import { StyleSheet, } from 'react-native'
import { Metrics } from '../../theme'

const styles = StyleSheet.create({

    header: {
        height: 146,
    },
    logosyles: {
        height: 110,
    },
    logoImagestyles: {
        width: 180,
        height: 180,
    },
    notificationscreen: {
        backgroundColor: "#ffffff",
        borderBottomWidth: 0.5,
        borderBottomColor: "#BC8A48",
        marginHorizontal: Metrics.ratio(10),
        paddingVertical: 3,
        marginVertical: Metrics.ratio(10)
    },
    notificationitems: {
        fontSize: 17,
        color: '#1C3C54',
        textTransform: 'capitalize',
        width: 140
    },
    text_1: {
        color: '#1C3C54',
        fontSize: 15,
        width: 140
    },
    text_2: {
        color: '#BC8A48',
        fontSize: 15,
        paddingLeft: 10
    },
    buttonmainstyle: {
        backgroundColor: '#1C3C54',
        width: 28,
        height: 28,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#BC8A48',
        justifyContent: "center",
        alignItems: "center"
    },
    child_1: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5
    },
    buttonstyle: {
        fontSize: 16
    }
})

export default styles