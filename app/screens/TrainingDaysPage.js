import { View, Text, Switch } from "react-native";
import { styles } from "../assets/styles";
import React, { useState } from "react";
import { ScreenWithNext } from "../components/ScreenWithNext";
import { DayDisplay } from "../components/DayDisplay";





export let TrainingDaysPage = ({ navigation }) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    return (
        <ScreenWithNext navigation={navigation} heading="Select your training days" nextScreen="Map"
            previousScreen="SetGoals">
            <DayDisplay dayLabel='Monday' />
            <DayDisplay dayLabel='Tuesday' />
            <DayDisplay dayLabel='Wednesday' />
            <DayDisplay dayLabel='Thursday' />
            <DayDisplay dayLabel='Friday' />
            <DayDisplay dayLabel='Saturday' />
            <DayDisplay dayLabel='Sunday' />

            <View style={styles.preferenceDisplay}>
                <Text style={styles.dayTextPrefer}>No preference</Text>
                <Switch
                    trackColor={{ false: '#E2E2E2', true: '#E2E2E2' }}
                    thumbColor={isEnabled ? '#FFB424' : '#FFB424'}
                    ios_backgroundColor="#E2E2E2"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                    marginLeft={15}

                />
            </View>
        </ScreenWithNext>

    )
}