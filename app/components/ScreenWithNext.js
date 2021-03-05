import {Button, View} from "react-native";
import {styles} from "../assets/styles";
import React from "react";
import {AppPage} from "./AppPage";

export let ScreenWithNext = ({navigation: {navigate, goBack}, children, heading, nextScreen, previousScreen}) => {
    return (
        <AppPage heading={heading}>
            <View>
                {children}
            </View>
            <View style={styles.buttonContainer}>
                <View style={styles.roundButton}>
                    <Button
                        title='<'
                        color="white"
                        onPress={() => goBack()}
                    />
                </View>

                <View style={styles.buttonStyle}>
                    <Button
                        title='NEXT >'
                        color="white"
                        onPress={() =>
                            navigate(nextScreen)
                        }
                    />
                </View>
            </View>
        </AppPage>
    )
}