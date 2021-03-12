import { View, Text, Switch, Dimensions, TextInput } from "react-native";
import { styles } from "../assets/styles";
import React from "react";
import { ScreenWithNext } from "../components/ScreenWithNext";
import MapView, { Marker } from 'react-native-maps';


export let WhereDoYouTrainPage = ({ navigation }) => {
    return (
        <ScreenWithNext navigation={navigation} heading="Where do you want to train?" nextScreen="YouDidIt"
            previousScreen="SetGoals">
            <View>
                <MapView loadingEnabled={true} style={styles.map} provider={MapView.PROVIDER_GOOGLE} initialRegion={{
                    latitude: 59.33258,
                    longitude: 18.0649,
                    latitudeDelta: 0.1822,
                    longitudeDelta: 0.0121,
                }}
                />
                <View style={{ position: 'absolute', top: 10, width: '100%' }}>
                    <TextInput
                        style={{
                            borderRadius: 18,
                            margin: 20,
                            color: '#000',
                            borderColor: '#666',
                            backgroundColor: '#FFF',
                            borderWidth: 1,
                            height: 35,
                            width: '40%',
                            paddingHorizontal: 10,
                            fontSize: 18,

                        }}
                        placeholder={'Search'}
                        placeholderTextColor={'#909090'}
                    />
                    <View style={{ position: 'absolute', top: 300, left: 200, width: '100%' }}>
                        <Marker
                            coordinate={{ latitude: 59.33258, longitude: 18.0649 }}
                            image={require('../assets/pics/location.png')}
                        />
                    </View>



                </View>
            </View>
        </ScreenWithNext>
    )

}

