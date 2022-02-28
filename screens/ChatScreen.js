import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import SingleUser from './SingleUser'

const Drawer = createDrawerNavigator();
export default function ChatScreen() {
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
            <Drawer.Screen name="Feed" component={SingleUser} />
            <Drawer.Screen name="Article" component={SingleUser} />

        </Drawer.Navigator>
    )
}

