import { View } from "react-native";
import React from "react";
import { styles } from "../assets/styles";
import { ScreenWithNext } from "../components/ScreenWithNext";
import { PickPT } from "../components/PickPT"


export let PickYourPTPage = ({ navigation }) => {
    return (

        <ScreenWithNext navigation={navigation} heading="Pick your type of PT" nextScreen="FitnessLevel"
            previousScreen="Interest">

            <View style={styles.cardContainer}>
              
                <PickPT ptLabel="Though love" ptImage={require('../assets/pics/Resurs2.png')} ptStyle={styles.cardone} />
                <PickPT ptLabel="The cheerleader" ptImage={require("../assets/pics/Resurs1.png")} ptStyle={styles.cardtwo} />
                <PickPT ptLabel="The workout buddy" ptImage={require("../assets/pics/Resurs3.png")} ptStyle={styles.cardthree} />
                <PickPT ptLabel="The nerd" ptImage={require("../assets/pics/Resurs5.png")} ptStyle={styles.cardfour} />
</View>


        </ScreenWithNext>
    )
}