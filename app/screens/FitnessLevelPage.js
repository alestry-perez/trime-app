import React from "react";
import {Image, View} from "react-native";
import {RangeSlider} from "../components/RangeSlider";
import {styles} from "../assets/styles";
import {ScreenWithNext} from "../components/ScreenWithNext";

export let FitnessLevelPage = ({navigation}) => {
    return (
        <ScreenWithNext navigation={navigation} heading="Rate your fitness level" nextScreen="SetGoals"
                        previousScreen="FitnessLevel">
            <View style={styles.labelsContainer}>
                <RangeSlider label="Fitness"/>
                <RangeSlider label="Agility"/>
                <RangeSlider label="Strength"/>
                <RangeSlider label="Stamina"/>
                <View style={styles.levelImage}>
                    <Image source={require('../assets/pics/KettleBell.png')}/>
                    <Image source={require('../assets/pics/wording1.png')}/>
                </View>
            </View>
        </ScreenWithNext>
    )
}