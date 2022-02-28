import { Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { io } from "socket.io-client";

export default function SingleUser() {
    const [socketID, setSocketID] = useState()
    const [chatMessage, setChatMessage] = useState()
    const [onlineUsers, setOnlineUsers] = useState()
    const socket = io("http://10.10.10.244:3000")
    useEffect(() => {
        socket.on("connect", () => { setSocketID(socket.id) });


    }, [])
    const handleSend = () => {
        socket.emit('message', chatMessage)
        setChatMessage('')
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Chat With Name</Text>
            <View style={styles.messagesContainer}>
                <Text>Chat With Name</Text>
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
        flexWrap: "wrap",
        height: "85%",
        borderWidth: 1,
        borderColor: "red",
        justifyContent: "flex-end",
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