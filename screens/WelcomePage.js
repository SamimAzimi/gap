import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';
export default function WelcomePage({ navigation }) {

    useEffect(async () => {
        try {
            const value = await AsyncStorage.getItem('user')
            if (value !== null) {
                navigation.navigate("ChatRoom")
            }
        } catch (e) {
            console.log(e)
        }
    })
    return (

        <View style={styles.container}>
            <Text style={styles.text}>Gap Chat</Text>
            <Image style={styles.img} source={require('../assets/ChatLogo.jpeg')} />
            <View style={styles.groupBtn}>
                <Button color="#F23005" title="Login" onPress={() => navigation.navigate("SignIn")} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: "center",
        justifyContent: "flex-end",
        width: "100%",
        height: "100%",

    },

    img: {
        width: "100%",
        height: "100%",
    },
    text: {

        top: "50%",
        left: "35%",
        color: "red",
        fontSize: 30,
        zIndex: 3,
    },
    groupBtn: {

        justifyContent: "space-between",
    }
})