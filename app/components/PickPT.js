import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { styles } from "../assets/styles";
import { TouchableHighlight } from "react-native-gesture-handler";



export let PickPT = ({ ptLabel, ptImage, ptStyle }) => {
    let [selected, setSelected] = useState(false);
    let onPress = () => {
        setSelected(!selected)
    }
    return <TouchableHighlight onPress={onPress} underlayColor="#FFB500"><View style={{
        backgroundColor: selected ? '#FFB500' : '#E8E8E8'
    }} >
        <View style={styles.cards}>
            <View style={[ptStyle]}>
                <Text style={styles.cardText}>{ptLabel}</Text>
                <Image style={styles.cardAvatar} source={ptImage} />
            </View>

        </View>
    </View >
    </TouchableHighlight>

}
