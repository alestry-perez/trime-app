import {View} from "react-native";
import React from "react";
import {TagsX} from "../components/Tagx";
import {styles} from "../assets/styles";
import {ScreenWithNext} from "../components/ScreenWithNext";

export let InterestSelectPage = ({navigation}) => {
    return (
        <ScreenWithNext navigation={navigation} heading="Pick your interests" nextScreen="PT">
            <View style={styles.tagContainer}>
                <TagsX style={styles.tagStyles}
                       initialTags={["Wellness", "Weight loss", "Gain muscle", "Running",
                           "Yoga", "Physical fitness", "Weight lifting", "Nutrition", "Cycling",
                           "Lifestyle change", "Strength", "Fun", "Home fitness", "Health", "Mindfulness",
                           "Beauty", "Spinning", "Meditation", "Cross fit"]}/>
            </View>
        </ScreenWithNext>
    )
}