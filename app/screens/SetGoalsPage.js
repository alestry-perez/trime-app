import {Image, View} from "react-native";
import {styles} from "../assets/styles";
import React from "react";
import {ScreenWithNext} from "../components/ScreenWithNext";

export let SetGoalsPage = ({navigation}) => {
    return (
        <ScreenWithNext navigation={navigation} heading="Set your 3 goals" nextScreen="Set">
            <Image style={styles.goalImage} source={require('../assets/pics/Resurs9.png')}/>
            <View style={styles.goalContainer}>
                <View style={styles.rowOne}>
                    <Image source={require('../assets/pics/Component1.png')}/>
                    <Image source={require('../assets/pics/Component2.png')}/>
                    <Image source={require('../assets/pics/Component3.png')}/>
                </View>
                <View style={styles.rowTwo}>
                    <Image source={require('../assets/pics/Component4.png')}/>
                    <Image source={require('../assets/pics/Component5.png')}/>
                    <Image source={require('../assets/pics/Component6.png')}/>
                </View>
                <View style={styles.rowThree}>
                    <Image source={require('../assets/pics/Component7.png')}/>
                    <Image source={require('../assets/pics/Component8.png')}/>
                    <Image source={require('../assets/pics/Component9.png')}/>
                </View>
                <View style={styles.rowFour}>
                    <Image source={require('../assets/pics/Component10.png')}/>
                    <Image source={require('../assets/pics/Component11.png')}/>
                    <Image source={require('../assets/pics/Component12.png')}/>
                </View>
                <View style={styles.rowFive}>
                    <Image source={require('../assets/pics/Component13.png')}/>
                    <Image source={require('../assets/pics/Component14.png')}/>
                    <Image source={require('../assets/pics/Component15.png')}/>
                </View>
            </View>
        </ScreenWithNext>
    )
}