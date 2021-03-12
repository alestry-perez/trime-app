import {Image, View} from "react-native";
import {styles} from "../assets/styles";
import React from "react";
import {ScreenWithNext} from "../components/ScreenWithNext";
import { TouchableOpacity } from "react-native-gesture-handler";
import { SetGoals } from "../components/SetGoals"

export let SetGoalsPage = ({navigation}) => {
    return (
        <ScreenWithNext navigation={navigation} heading="Set your 3 goals" nextScreen="TrainingDays">
            <Image style={styles.goalImage} source={require('../assets/pics/Resurs9.png')}/>
            <View style={styles.goalContainer}>

                <SetGoals goalStyle={styles.rowOne}
                          goalImage1={require('../assets/pics/Component1.png')}
                          goalImage2={require('../assets/pics/Component2.png')}
                          goalImage3={require('../assets/pics/Component3.png')}
                          goalImage1a={require('../assets/pics/yellow1.png')}
                          goalImage2a={require('../assets/pics/yellow2.png')}
                          goalImage3a={require('../assets/pics/yellow3.png')}
                />

                <SetGoals goalStyle={styles.rowTwo}
                          goalImage1={require('../assets/pics/Component4.png')}
                          goalImage2={require('../assets/pics/Component5.png')}
                          goalImage3={require('../assets/pics/Component6.png')}
                />

                <SetGoals goalStyle={styles.rowThree}
                          goalImage1={require('../assets/pics/Component7.png')}
                          goalImage2={require('../assets/pics/Component8.png')}
                          goalImage3={require('../assets/pics/Component9.png')}
                />

                <SetGoals goalStyle={styles.rowFour}
                          goalImage1={require('../assets/pics/Component10.png')}
                          goalImage2={require('../assets/pics/Component11.png')}
                          goalImage3={require('../assets/pics/Component12.png')}
                />

                <SetGoals goalStyle={styles.rowFive}
                          goalImage1={require('../assets/pics/Component13.png')}
                          goalImage2={require('../assets/pics/Component14.png')}
                          goalImage3={require('../assets/pics/Component15.png')}
                />

            </View>

        </ScreenWithNext>
    )
}