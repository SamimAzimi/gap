import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Button, TextInput, View, ToastAndroid, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginPage({ navigation }) {

    const [User, setUser] = useState({
        userName: '',
        phoneNumber: '',
        password: '',
        Confpassword: '',

    })
    useEffect(() => {

        async function CheckLogin() {
            try {
                const value = await AsyncStorage.getItem('user')
                if (value !== null) {
                    navigation.navigate("ChatRoom")

                }
            } catch (e) {
                console.log(e)
            }
        }
        CheckLogin()
    })
    const handleSignIn = async () => {
        if (User.password && User.userName && User.phoneNumber && User.Confpassword) {
            if (User.password === User.Confpassword) {

                try {
                    await AsyncStorage.setItem('user', JSON.stringify(User))
                    setUser({
                        userName: '',
                        phoneNumber: '',
                        password: '',
                        Confpassword: '',

                    })
                    navigation.navigate("ChatRoom")
                } catch (e) {
                    console.log(e)
                }
            }
            else {
                ToastAndroid.show('Password Doesnt Match', ToastAndroid.SHORT);

            }
        } else {
            ToastAndroid.show('Dont Leave The Field Empty', ToastAndroid.SHORT);
        }

    }

    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../assets/ChatLogo.jpeg')} />
            <View style={styles.logincontainer}>
                <Text style={styles.text}>Full Name</Text>
                <TextInput value={User.userName} onChangeText={e => setUser({ ...User, ["userName"]: e })} style={styles.input} placeholder="Enter Your Full Name" />
                <Text style={styles.text}>Phone Number</Text>
                <TextInput value={User.phoneNumber} onChangeText={e => setUser({ ...User, ["phoneNumber"]: e })} style={styles.input} placeholder="Enter Your Phone" />
                <Text style={styles.text}>Password</Text>
                <TextInput value={User.password} onChangeText={e => setUser({ ...User, ["password"]: e })} style={styles.input} placeholder="Enter Your Password" />
                <Text style={styles.text}>Confirm Password</Text>
                <TextInput style={styles.input} value={User.Confpassword} onChangeText={e => setUser({ ...User, ["Confpassword"]: e })} placeholder="Enter Your Password" />
                <View style={styles.btnContainer}>
                    <Button color="#F23005" style={styles.button} title="Sign In" onPress={handleSignIn} />
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