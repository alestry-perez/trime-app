import {Text, TouchableOpacity, View} from "react-native";
import React, {useState} from "react";

function SupiTag({value, style}) {
    let [selected, setSelected] = useState(false);
    const onPress = () => {
        setSelected(!selected)
    }

    return <TouchableOpacity onPress={onPress}><View style={style}><Text style={{
        fontSize: 15,
        fontWeight: 'bold',
        padding: 10,
        color: selected ? 'black' : 'white',
        backgroundColor: selected ? 'white' : 'black'
    }}>{value}</Text></View></TouchableOpacity>
}

export function TagsX({initialTags, style}) {

    return <View style={{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }}>
        {initialTags.map(tag => {
            return <SupiTag key={tag} value={tag} style={style}/>
        })}
    </View>
}