import { View, Text, Platform, FlatList } from "react-native";

import { styles } from "../assets/styles";
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity } from "react-native-gesture-handler";
import React, { useState } from "react";



//const DateTimePicker = require('@react-native-datetimepicker/datetimepicker');

export let DayDisplay = ({ dayLabel }) => {

    const [pickerVisible, setPickerVisible] = useState(false);

    const [time, setTime] = useState([
        { slot: '01:00', key: '1' },
        { slot: '02:00', key: '2' },
        { slot: '03:00', key: '3' },
        { slot: '04:00', key: '4' },
        { slot: '05:00', key: '5' },
        { slot: '06:00', key: '6' },
        { slot: '07:00', key: '7' },
        { slot: '08:00', key: '8' },
        { slot: '09:00', key: '9' },
        { slot: '10:00', key: '10' },
        { slot: '11:00', key: '11' },
        { slot: '12:00', key: '12' },
        { slot: '13:00', key: '13' },
        { slot: '14:00', key: '14' },
        { slot: '15:00', key: '15' },
        { slot: '16:00', key: '16' },
        { slot: '17:00', key: '17' },
        { slot: '18:00', key: '18' },
        { slot: '19:00', key: '19' },
        { slot: '20:00', key: '20' },
        { slot: '21:00', key: '21' },
        { slot: '22:00', key: '22' },
        { slot: '23:00', key: '23' },
        { slot: '00:00', key: '24' }
    ])
    return <View>
        <View style={styles.dayStyles}>
            <View style={styles.dayIcon}>
                <View style={styles.dayContainer}>
                    <Text style={styles.dayText}>{dayLabel}</Text>
                </View>
                <View style={styles.dayContainer}>
                    <TouchableOpacity onPress={() => setPickerVisible(!pickerVisible)}>
                        {!pickerVisible && <AntDesign name="pluscircle" size={24} color='black' />}
                        {pickerVisible && <AntDesign name="minuscircle" size={24} color='black' />}
                    </TouchableOpacity>
                </View>




                <View style={styles.timeContainer} >
                    <View style={styles.timePicker}>
                        <FlatList
                            data={time}
                            renderItem={({ item }) => (
                                <Text style={styles.item}>{item.slot}</Text>
                            )}
                        />
                    </View>
                    <Text style={styles.lineStyle}>- </Text>
                    <View style={styles.timePicker}>
                        <FlatList
                            data={time}
                            renderItem={({ item }) => (
                                <Text style={styles.item}>{item.slot}</Text>
                            )}
                        />
                    </View>
                </View>

            </View>
        </View>
    </View>
}

