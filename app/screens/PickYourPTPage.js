import {Image, Text, View} from "react-native";
import React from "react";
import {styles} from "../assets/styles";
import {ScreenWithNext} from "../components/ScreenWithNext";

export let PickYourPTPage = ({navigation}) => {
    return (
        <ScreenWithNext navigation={navigation} heading="Pick your type of PT" nextScreen="FitnessLevel"
                        previousScreen="Interest">
            <View style={styles.cardContainer}>
                <View style={styles.cards}>
                    <View style={styles.cardone}>
                        <Text style={styles.cardText}>Though love</Text>
                        <Image style={styles.cardAvatar} source={require('../assets/pics/Resurs2.png')}></Image>
                    </View>
                </View>

                <View style={styles.cards}>
                    <View style={styles.cardtwo}>
                        <Text style={styles.cardText}>The cheerleader</Text>
                        <Image source={require('../assets/pics/Resurs1.png')}></Image>
                    </View>
                </View>

                <View style={styles.cards}>
                    <View style={styles.cardthree}>
                        <Text style={styles.cardText}>The workout buddy</Text>
                        <Image source={require('../assets/pics/Resurs3.png')}></Image>
                    </View>
                </View>

                <View style={styles.cards}>
                    <View style={styles.cardfour}>
                        <Text style={styles.cardText}>The nerd</Text>
                        <Image source={require('../assets/pics/Resurs5.png')}></Image>
                    </View>
                </View>
            </View>
        </ScreenWithNext>
    )
}