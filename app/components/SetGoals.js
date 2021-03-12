import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { styles } from "../assets/styles";

export let SetGoals = ({ goalImage1, goalImage2, goalImage3, goalImage1a, goalStyle }) => {
    const [clickImage, setClickImage] = useState(false);


    return <View style={goalStyle}>
        <TouchableOpacity onPress={() => setClickImage(!clickImage)}>
            {!clickImage && <Image source={goalImage1} />}
            {clickImage && <Image source={goalImage1a} />}
        </TouchableOpacity>
        <TouchableOpacity><Image source={goalImage2} /></TouchableOpacity>
        <TouchableOpacity><Image source={goalImage3} /></TouchableOpacity>
    </View>
}