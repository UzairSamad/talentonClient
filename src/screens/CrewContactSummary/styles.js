import { StyleSheet } from 'react-native'
import { Colors, Metrics } from '../../theme';

const styles = StyleSheet.create({
    cardview: {
        backgroundColor: '#F0F6FD',
        padding: 20,
    },
    card: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    name: {
        paddingBottom: 5,
        color: '#1C3C54',
        fontSize: 15,
    },
    pilot: {
        color: '#1C3C54',
        fontSize: 11,
        paddingTop: 0,
    },
    city: {
        color: '#1C3C54',
        fontSize: 16,
        paddingTop: 3,
    },
    cardimg: {
        width: 110,
        height: 110,
        borderColor: '#0D6E53',
        borderWidth: 2,
        borderRadius: 10,
    },
    Youtubeicon: { width: 23, height: 23, marginRight: 4 },
    icon: { width: 23, height: 23 },
    stars: { width: 33, height: 33, marginLeft: 10 },
    closeicon: {
        alignSelf: 'flex-end',
        backgroundColor: '#B50404',
        height: 22,
        width: 22,
        justifyContent: 'center',
    },
    addtxt: {
        borderRadius: 5,
        backgroundColor: '#BC8A48',
        height: 17,
        width: 40,
        justifyContent: 'center',
    },
    view: {
        backgroundColor: '#F0F6FD',
        paddingHorizontal: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    txtname: {
        flex: 1,
        paddingLeft: 15,
        color: '#1C3C54',
        fontSize: 13,
    },
    addicon: {
        borderWidth: 1.5,
        height: 30,
        width: 30,
        borderRadius: Metrics.ratio(20),
        alignItems: 'center',
        justifyContent: 'center'
    },
    summary: { flexDirection: 'row', justifyContent: 'space-between' },
    summarytxt: { color: '#1C3C54', fontSize: 14, },
    summarytxt1: { color: '#1C3C54', fontSize: 16, fontWeight: 'bold' },
    valuetxt: { color: '#BC8A48', fontSize: 14 },
    value: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderColor: 'rgba(188, 138, 72,0.3)',
        borderBottomWidth: 1.5,
    },
    personalNote: {
        height: 70,
        width: '100%',
        borderColor: '#CBCBCB',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: Colors.white
    },
    btn: {
        borderRadius: 5,
        height: 35,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#BC8A48',
        borderWidth: 1,
    },
    callerimage: {
        borderRadius: 5,
        height: 100,
        width: 100,
        borderWidth: 1,
        borderColor: '#0D6E53'
    },
    child_1: {
        padding: 8,
        width: 90,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#CBCBCB',
        marginTop: 10,
    },
    dotsthree: {
        marginRight: 10,
    },
});

export default styles