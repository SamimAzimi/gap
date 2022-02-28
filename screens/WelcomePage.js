import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'

export default function WelcomePage({ navigation }) {
    return (

        <View style={styles.container}>
            <Text style={styles.text}>Gap Chat</Text>
            <Image style={styles.img} source={require('../assets/ChatLogo.jpeg')} />
            <View style={styles.groupBtn}>
                <Button color="#F23005" title="Login" onPress={() => navigation.navigate("SignIn")} />
                <Button color="#7D6BF2" title=" Sign Up" onPress={() => navigation.navigate("SignUp")} />
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