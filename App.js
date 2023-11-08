import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Screen01 from './Screen01';
import Screen02 from './Screen02';
import Screen03 from './Screen03';
import Screen04 from './Screen04';
import HeaderRight from './src/components/header/HeaderRight';
import { CartProvider } from './src/context/CartContext';

const Stack = createNativeStackNavigator();

const screens = [
    {
        options: { headerShown: false },
        name: 'Screen01',
        component: Screen01,
    },
    {
        options: { title: 'Shops Near Me' },
        name: 'Screen02',
        component: Screen02,
    },
    {
        options: { title: 'Drinks' },
        name: 'Screen03',
        component: Screen03,
    },
    {
        options: { title: 'Your Orders' },
        name: 'Screen04',
        component: Screen04,
    },
];

function App() {
    return (
        <CartProvider>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: {
                            backgroundColor: '#f3f4f6',
                            borderWidth: 0,
                        },
                        headerTitleStyle: {
                            fontWeight: 700,
                            fontSize: 24,
                            lineHeight: 36,
                        },
                        headerRight: HeaderRight,
                    }}
                    initialRouteName='Screen01'
                >
                    {screens.map((screen, index) => (
                        <Stack.Screen
                            key={index}
                            options={screen.options}
                            name={screen.name}
                            component={screen.component}
                        />
                    ))}
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>
    );
}

export default App;
