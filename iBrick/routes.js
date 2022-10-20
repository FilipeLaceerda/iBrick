import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/pages/login';
import FeedIBrick from './src/pages/feedIBrick';
import Detalhes from './src/pages/detalhes';

const Stack = createStackNavigator()

export default props => (
    <Stack.Navigator initialRouteName="Login"
        screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login"
            options={{ title: 'Login' }}>
            {props => (
                    <Login navigation={props.navigation}></Login>
            )}
        </Stack.Screen>
        <Stack.Screen name="FeedIBrick">
            {props => (
                    <FeedIBrick navigation={props.navigation} />
            )}
        </Stack.Screen>
        <Stack.Screen name="Detalhes">
            {props => (
                    <Detalhes  navigation={props.navigation} />
            )}
        </Stack.Screen>
    </Stack.Navigator>
)