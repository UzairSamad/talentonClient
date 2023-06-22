import React, { useLayoutEffect } from "react";
import { View, Text, FlatList } from "react-native";
import { AppButton, HeaderBack, HeaderRightIcon } from "../../common";
import { Colors, Images, Metrics } from "../../theme";
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Notifications = ({ navigation }) => {

    useLayoutEffect(() => {
        navigation.setOptions({
            headerLeft: () => <HeaderBack />,
            headerRight: () => <HeaderRightIcon image={Images.icon.home} />
        });
    }, []);

    const Data = [
        { clintName: 'Candidate 333P', interViewDate: "Interview date", date: '4-5-22. at 9:00am PST', interViewType: "Interview vedio", interVlaue: 'Confirmed' },
        { clintName: 'Candidate 222P', interViewDate: "Interview date", date: '4-7-22 at 10:30am PST', interViewType: "Interview phone", interVlaue: 'Don’t pass' },
        { clintName: 'Candidate 333P', interViewDate: "Interview date", date: '4-5-22. at 9:00am PST', interViewType: "Interview vedio", interVlaue: 'Confirmed' },
        { clintName: 'Candidate 333P', interViewDate: 'Free try start', date: '5-3-2022', interViewType: "Hiring", interVlaue: 'In-process' },
        { clintName: 'Candidate 333P', interViewDate: 'Free try end', date: '5-4-2022', interViewType: "Hiring", interVlaue: 'Don’t pass' },
        { clintName: 'Candidate 333P', interViewDate: 'Free try end', date: '5-4-2022', interViewType: "Hiring", interVlaue: 'Don’t pass' },
    ]

    return (
        <FlatList data={[1]}
            bounces={false}
            showsVerticalScrollIndicator={false}
            style={{ backgroundColor: Colors.white }}
            renderItem={() => {
                return (
                    <View style={{ marginVertical: Metrics.ratio(10) }}>
                        {Data.map((val) => {
                            const { clintName, interViewDate, date, interViewType, interVlaue } = val
                            return (
                                <View style={styles.notificationscreen}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={styles.notificationitems}>{clintName}</Text >
                                        <AntDesign name="closesquare" size={18} color='#B50404' />
                                    </View>
                                    <View style={styles.child_1}>
                                        <Text style={styles.text_1}>{interViewDate}</Text >
                                        <Text style={styles.text_2}>{date}</Text >
                                    </View>
                                    <View style={styles.child_1}>
                                        <Text style={styles.text_1}>{interViewType}</Text >
                                        <Text style={styles.text_2}>{interVlaue}</Text >
                                    </View>
                                    <View style={{ alignItems: 'flex-end', marginTop: -20, justifyContent: "center" }}>
                                        <AppButton containerStyle={styles.buttonmainstyle} textStyle={styles.buttonstyle} title='+' onPress={() => navigation.navigate("CrewContactSummary", { type: interViewType === "Interview vedio" ? 1 : interViewType === "Hiring" ? 3 : interViewType === "Interview phone" ? 1 : "" })} />
                                    </View>

                                </View>
                            )
                        })}
                    </View>
                )
            }} />
    )
}

export default Notifications