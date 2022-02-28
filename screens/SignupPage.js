import { StyleSheet, Text, View, Button, Image, TextInput } from 'react-native'
import React from 'react'

export default function SignupPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/ChatLogo.jpeg')} />
            <View style={styles.logincontainer}>
                <Text style={styles.text}>Full Name</Text>
                <TextInput style={styles.input} placeholder="Enter Your Full Name" />
                <Text style={styles.text}>Phone Number</Text>
                <TextInput style={styles.input} placeholder="Enter Your Phone" />
                <Text style={styles.text}>Password</Text>
                <TextInput style={styles.input} placeholder="Enter Your Password" />
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput style={styles.input} placeholder="Enter Your Password" />
                <View style={styles.btnContainer}>
                    <Button color="#F23005" style={styles.button} title="Sign Up" onPress={() => navigation.navigate('ChatRoom')} />
                    <Button color="#F2B705" title="Cancel" onPress={() => navigation.navigate('Welcome')} />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: "center",
        // alignItems: "center",
        justifyContent: "space-evenly",
        backgroundColor: "white"

    },
    logincontainer: {
        flex: 1,
        textAlign: "center",
        // alignItems: "center",
        justifyContent: "space-between"
    },
    img: {
        width: "100%",
        height: "35%",
    },
    input: {
        borderWidth: 1,
        borderColor: "#0ABF9E",
        height: 60
    },
    btnContainer: {
        flex: 1,
        justifyContent: "space-around"

    },
    button: {
        marginTop: "12px",


    },

    text: {
        fontSize: 23,
        color: "#F23005"
    }
})