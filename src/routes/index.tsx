import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import home from '../pages/home';
import produtos from '../pages/produtos';
import cadastro from '../pages/cadastro';

const StackNavigator = createStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <StatusBar style="auto" />
            <StackNavigator.Navigator initialRouteName="Home">
                <StackNavigator.Screen
                    name="Home"
                    component={home}
                    options={{
                        headerShown: false,
                    }}
                />
                <StackNavigator.Screen
                    name="Produtos"
                    component={produtos}
                />
                <StackNavigator.Screen
                    name="Cadastro"
                    options={{
                        title: 'Cadastro',
                    }}
                    component={cadastro}
                />
            </StackNavigator.Navigator>
        </NavigationContainer>
    );
}