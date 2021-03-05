import {Image, SafeAreaView, Text, View} from "react-native";
import {styles} from "../assets/styles";
import moment from "moment";
import React from "react";

export let AppPage = (props) => {
    return <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style={styles.container}>
            <View style={styles.headingContainer}>
                <View style={styles.dateContainer}>
                    <Text style={styles.textStyle}>{moment().format("ddd")}</Text>
                    <Text style={styles.textStyle}>{moment().format("MMM DD")}</Text>
                </View>
                <View style={styles.avatar}>
                    <Image style={styles.image} source={require("../assets/pics/avatar.png")}/>
                </View>
            </View>


            <View style={styles.wave}>
                <Image
                    resizeMode="contain"
                    style={styles.backgroundImage} source={require('../assets/pics/wave.png')}>
                </Image>
                <Text style={styles.textMain}>{props.heading}</Text>
                <View
                    style={{
                        borderBottomColor: '#707070',
                        borderBottomWidth: 0.5,
                        marginLeft: 20,
                        marginRight: 20,
                        padding: 12,
                    }}/>
                <View>{props.children}</View>
            </View>

        </View>
    </SafeAreaView>

}