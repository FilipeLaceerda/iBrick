import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import Login from './src/pages/login';
import FeedIBrick from './src/pages/feedIBrick';
import Detalhes from './src/pages/detalhes';
import PassoStack from './src/components/PassoStack';

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
                    <FeedIBrick />
            )}
        </Stack.Screen>
        <Stack.Screen name="Detalhes">
            {props => (
                    <Detalhes {...props} />
            )}
        </Stack.Screen>
    </Stack.Navigator>
)