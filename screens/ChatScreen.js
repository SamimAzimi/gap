import React, { useEffect } from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BackHandler, ToastAndroid } from 'react-native'
import SingleUser from './SingleUser'

const Drawer = createDrawerNavigator();
export default function ChatScreen() {
    const handleBackButton = () => {
        ToastAndroid.show('Back button is pressed', ToastAndroid.SHORT);
        return true;
    }
    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', handleBackButton);

        return () => {
            BackHandler.removeEventListener('hardwareBackPress', handleBackButton);
        }
    })


    return (
        <Drawer.Navigator
            screenOptions={{
                drawerStyle: {
                    backgroundColor: '#F24472',
                    width: 240,
                },
                overlayColor: 'transparent',
                drawerLabelStyle: {
                    color: "white"
                }
            }}
        >

            <Drawer.Screen name="OnlineUsers" component={SingleUser} />

        </Drawer.Navigator>
    )
}

