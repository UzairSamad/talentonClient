import { StyleSheet } from 'react-native'
import { Fonts, Metrics } from '../../theme'

const styles = StyleSheet.create({
    headerview: {
        height: Metrics.scaleVertical(320),
        backgroundColor: '#ffffff',
    },
    header: {
        height: Metrics.scaleVertical(50),
        backgroundColor: "#1d3c54",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    callerimage: {
        borderRadius: 15,
        height: Metrics.scaleVertical(300),
        width: Metrics.scaleHorizontal(350),
        borderWidth: 3,
        borderColor: '#0D6E53',
        marginHorizontal: 20
    },
    headerImageStyle: {
        height: 55, width: 55
    },
    flexView: {
        flexDirection: 'row', justifyContent: 'space-between', marginTop: 3
    },
    starsView: {
        flexDirection: 'row', justifyContent: 'space-between', width: 40,
    },
    heading_2: {
        color: '#1C3C54',
        fontSize: Fonts.size.size_13,
        marginVertical: 10,
    },
    headerStyle: {
        height: Metrics.scaleVertical(300), width: Metrics.scaleHorizontal(400), marginTop: 20, justifyContent: 'center', alignItems: 'center'
    },
    planIconStyle: {
        position: 'absolute', top: Metrics.scaleVertical(100), bottom: 0, right: -10
    },
    headerButton: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: "center", flex: 1, position: 'absolute', bottom: 10, width: Metrics.scaleHorizontal(300)
    },
    HeaderBottomStyle: {
        paddingHorizontal: 20, flexDirection: 'row', justifyContent: 'space-between'
    },
    HeaderBottomIcon: {
        flexDirection: 'row', alignItems: 'center'
    },
    box: {
        width: 80,
        height: 35,
        backgroundColor: '#F3F7FC',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#BC8A48',
        marginBottom: 5,
    },
    boxtext: {
        color: '#1C3B54',
        fontSize: Fonts.size.size_11,
        textAlign: 'center',
    },
    ratingimage: {
        height: 18,
        width: 18,
    },
    moreview: {
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 30
    },
    more: {
        backgroundColor: "white",
        borderWidth: 2,
        borderColor: "lightgray",
        paddingHorizontal: 25,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    moretxt: {
        fontSize: 13,
        color: "#c29152"
    },
    visatable: {
        flexDirection: "row",
        paddingHorizontal: 10,
    },
    visatxt: {
        color: "#434343",
        fontSize: Fonts.size.size_17,
        paddingLeft: 10,
    },
    child_1: {
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderWidth: 1,
        borderColor: '#C9C3C3',
        borderRadius: 20,
        marginTop: 10,
        margin: 20,
    },
    modalVisabtn: {
        backgroundColor: "#1E3D54",
        marginHorizontal: 10,
        marginTop: 10,
        height: Metrics.scaleVertical(40),
        width: Metrics.scaleHorizontal(110),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#c29152'
    },
    txt: {
        fontSize: Fonts.size.size_15,
        color: "white"
    },
    heading1: {
        color: '#BC8A48',
        fontSize: Fonts.size.size_12,
    },
    heading3: {
        color: '#BC8A48',
        fontSize: Fonts.size.size_14,
    },
    salaryView: {
        flexDirection: 'row', justifyContent: 'space-between', paddingBottom: 10
    },
    DocImage: {
        width: 35,
        height: 35,
    },
    vidImage: {
        width: 35,
        height: 35,
        marginRight: 10,
    },
    planceIcon: {
        marginRight: 10,
    },
    dotsthree: {
        marginRight: 30,
    },
    subheadning: {
        color: '#1C3C54',
        fontSize: Fonts.size.size_13,
    },
    subheadning_2: {
        color: '#BC8A48',
        fontSize: Fonts.size.size_13,
    },
    MainHeading: {
        color: '#BC8A48',
        fontSize: Fonts.size.size_15,
    },
    buttonmainstyle1: {
        backgroundColor: '#1d3c54',
        width: 100,
        height: 35,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#C09255'
    },
    flexCenter: {
        justifyContent: 'center', alignItems: 'center'
    },
    flexView1: {
        flexDirection: 'row', justifyContent: 'space-evenly'
    },
    buttonmainstyle2: {
        backgroundColor: '#0D6E53',
        width: Metrics.scaleHorizontal(100),
        height: 35,
        marginLeft: 10,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#C09255'
    },
    buttonmainstyle: {
        backgroundColor: '#0D6E53',
        width: Metrics.scaleHorizontal(90),
        height: 40,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#C09255'
    },
    Modalbuttonmainstyle: {
        backgroundColor: '#0D6E53',
        width: Metrics.scaleHorizontal(90),
        height: 30,
        borderRadius: 5,
        marginTop: 5,
        borderWidth: 1,
        borderColor: '#C09255'
    },
    heading: {
        color: '#1C3C54',
        fontSize: Fonts.size.size_21,
        marginTop: 10
    },
    BottomModal: {
        height: 330,
        borderRadius: 10,
        borderColor: '#E6AF67',
        borderWidth: 2,
        position: 'absolute',
        bottom: 70, left: 0, right: 0,
        backgroundColor: "#ffffff",
        paddingVertical: 25,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    modalimage1: {
        width: Metrics.scaleHorizontal(70),
        height: 70,
    },
    modalimage2: {
        width: Metrics.scaleHorizontal(50),
        height: 50,
        margin: 5,
    },
    modalimage3: {
        width: Metrics.scaleHorizontal(120),
        height: 120,
    },
    ModalHeading1: {
        textTransform: 'capitalize',
        color: "#1E3D54",
        fontSize: Fonts.size.size_17,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    ModalSubHeading1: {
        textTransform: 'capitalize',
        color: "#1C3C54",
        fontSize: Fonts.size.size_15,
        textAlign: 'center',
    },
    ModalView1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginVertical: 10
    },
    modalView: {
        height: 400,
        backgroundColor: "#fff",
        paddingHorizontal: 10,
        paddingBottom: 20,
        justifyContent: 'center',
        borderRadius: 18,
        borderWidth: 3,
        borderColor: '#707070',
    },

    content: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
    },
    card: {
        width: Metrics.scaleHorizontal(330),
    },
    bottomButton: {
        justifyContent: 'center', alignItems: 'center', marginTop: 10, paddingHorizontal: 35, flexDirection: 'row', justifyContent: 'space-between'
    },
    thumbUpStyle: {
        height: 75, width: Metrics.scaleHorizontal(50)
    },
    thumbRightStyle: {
        height: 50, width: Metrics.scaleHorizontal(50)
    },
    modalCenterView: {
        alignItems: 'center', justifyContent: 'center'
    },
    modalCenterText1: {
        color: "#BC8A48", fontSize: Fonts.size.size_11, marginTop: 0
    },
    confirmTextStyle: {
        textTransform: 'uppercase', fontWeight: 'bold', color: "#1E3D54", fontSize: Fonts.size.size_14, marginTop: 0
    },
    modalImageStyleView: {
        flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    nowTextStyle: {
        color: "#BC8A48", fontSize: Fonts.size.size_11, marginLeft: 10,
    },
    nextTextStyle: {
        textTransform: 'uppercase', fontWeight: 'bold', color: "#1E3D54", fontSize: Fonts.size.size_14, marginLeft: 10
    },
    thumbrightView: {
        alignItems: 'center', justifyContent: 'flex-end', marginRight: 10,
    },
    listTextStyle: {
        color: "#BC8A48", fontSize: Fonts.size.size_11
    },
    maybeTextStyle: {
        textTransform: 'uppercase', fontWeight: 'bold', color: "#1E3D54", fontSize: Fonts.size.size_14,
    },
    modalOKView: {
        justifyContent: 'center', alignItems: 'center', marginTop: 20
    },
    modalFLexView: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
    },
    modalProfileImageView: {
        alignItems: 'center', marginBottom: 10
    },
    modalProfileImage: {
        borderWidth: 1, borderColor: '#0D6E53', width: 72, height: 70, borderRadius: 2
    },
    modalBorderStyle: {
        borderBottomColor: '#E6AF67', borderBottomWidth: 1, marginHorizontal: 20, marginVertical: 10
    },
    modalProfileImageView1: {
        alignItems: 'center', borderColor: '#0D6E53', width: 72, borderRadius: 5, borderWidth: 2
    },
    modalSecoundheadingView: {
        alignItems: 'center', justifyContent: 'center', marginTop: -20, paddingHorizontal: 30, marginBottom: 10
    },
    modalSecounView: {
        justifyContent: 'center', alignItems: 'center', marginTop: 10
    }
})

export default styles
