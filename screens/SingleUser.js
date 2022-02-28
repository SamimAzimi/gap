import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";
import AsyncStorage from '@react-native-async-storage/async-storage';
let socket;
const URL = "http://10.10.10.244:3000"

export default function SingleUser() {
    const [chatMessage, setChatMessage] = useState()
    const [recieveMessages, setRecieveMessages] = useState([])

    useEffect(() => {
        socket = io(URL)
    }, [URL])

    useEffect(() => {
        socket.on("recieveMessage", (msg) => { setRecieveMessages([...recieveMessages, msg]) })

        socket.on("userQuantity", (msg) => { console.log(msg) })


    })



    const handleSend = async () => {
        const value = await AsyncStorage.getItem('user')
        if (value == null) {
            navigation.navigate("Welcome")
        }
        const UserObject = JSON.parse(value)
        const Message = {
            user: UserObject.userName,
            text: chatMessage,
            date: new Date().getHours() + ":" + new Date().getMinutes(),
        }
        socket.emit('message', Message)
        setChatMessage('')
    }

    const chatmessages = recieveMessages.map((msg, index) => {
        return (
            <View key={index} >
                <View style={styles.autherDate}>
                    <Text >{msg.user}</Text>
                    <Text >{msg.date}</Text>
                </View>
                <View style={styles.OneMessageContainer}>
                    <Text style={{ color: "white" }}>{msg.text}</Text>
                </View>
            </View>
        )
    }
    )
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Global Chat Room</Text>
            <View style={styles.messagesContainer}>
                {chatmessages}
            </View>
            <View style={styles.messageContainer}>
                <TextInput value={chatMessage}
                    onSubmitEditing={handleSend}
                    onChangeText={(e) => setChatMessage(e)}
                    multiline={true}

                    style={styles.text} />
                <Pressable style={styles.btnsendContainer}>
                    <Text style={styles.btnsend} onPress={handleSend} >Send</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexWrap: "nowrap",
        borderColor: "#0ABF",
        height: "100%",
        justifyContent: 'flex-end'
    },
    header: {
        textAlign: "center",
        fontSize: 23
    },
    messagesContainer: {
        padding: 23,
        height: "85%",
        borderWidth: 1,
        borderColor: "red",
        overflow: "scroll",

    },
    autherDate: {
        flexDirection: "row-reverse",
        justifyContent: "space-between",
        width: "20%",
    },
    OneMessageContainer: {
        backgroundColor: "#F23005",
        marginBottom: "2%",

    },
    text: {
        borderWidth: 1,
        borderColor: "#0ABF9E",
        height: "100%",
        flexGrow: 2,
        width: "80%",
    },
    messageContainer: {

        height: "10%",
        alignItems: "center",
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-around",


    },
    btnsend: {

        backgroundColor: "#F23005",
        height: "100%",
        textAlign: "center",
        color: "white",
        marginTop: 20
    },
    btnsendContainer: {
        backgroundColor: "#F23005",
        width: "16%",
        height: "100%",
    }
})