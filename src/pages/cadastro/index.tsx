import React, { useState } from 'react';
import { View, Text, Alert, ScrollView, KeyboardAvoidingView } from 'react-native';

import { estilo } from './estilo';
import User from '../../models/Usuario';
import { validaEmail, validaCampo } from '../../util/validation';
import Input from '../../components/Input';
import { addUsuario } from '../../services/api';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Cadastro({ navigation }: any) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function goHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    function onSubmit(): void {
        let user: User = {
            name: '',
            age: 0,
            address: '',
            email: '',
            userPassword: '',
        };

        if (!validaCampo(name, 'Informe seu nome')) {
            return;
        }
        if (!validaCampo(age, 'Informe sua idade')) {
            return;
        }
        if (!validaCampo(address, 'Informe seu endereço')) {
            return;
        }
        if (!validaCampo(email, 'Informe seu e-mail')) {
            return;
        }
        if (!validaEmail(email)) {
            Alert.alert(
                'E-mail inválido',
                'O endereço de e-mail informado não é válido'
            );
            return;
        }
        if (!validaCampo(password, 'Escolha uma senha')) {
            return;
        }

        user.name = name;

        try {
            user.age = parseInt(age);

            if (isNaN(user.age)) {
                Alert.alert(
                    'Idade inválida',
                    'Informe somente números no campo "Idade"'
                );
            }

            if (user.age < 18) {
                Alert.alert(
                    'Idade inválida', 
                    'Usuário deve ter no mínimo 18 anos.');
                return;
            }
        } catch (error) {
            Alert.alert('Idade inválida', 'Informe um valor numérico');
            return;
        }
        user.address = address;
        user.email = email;
        user.userPassword = password;

        addUsuario(user)
            .then((result) => {
                if (!result) {
                    Alert.alert(
                        'Erro ao Cadastrar',
                        'Houve um erro ao efetuar o cadastro.\nContate o administrador.'
                    );
                    return;
                }

                Alert.alert(
                    'Cadastro Concluído',
                    'Cadastro concluído com êxito'
                );

                goHome();
            })
            .catch((error) => {
                console.error('UserRegistration.onSubmit');
                console.error(error);
                Alert.alert(
                    'Erro ao Cadastrar',
                    'Houve um erro ao efetuar o cadastro.\nContate o administrador.'
                );
            });
    }

    return (
            <KeyboardAvoidingView style={estilo.keyboardAvoidingView}>
                <View style={estilo.container}>
                    <Input label="Nome Completo" value={name} onChange={setName} />
                    <Input
                        label="Idade"
                        value={age}
                        onChange={setAge}
                        keyboardType="number-pad"
                    />
                    <Input label="Endereço" value={address} onChange={setAddress} />
                    <Input
                        label="E-mail"
                        value={email}
                        onChange={setEmail}
                        keyboardType="email-address"
                    />
                    <Input
                        label="Senha"
                        value={password}
                        onChange={setPassword}
                        isPassword
                    />

                    <TouchableOpacity
                        style={estilo.appButtonContainer}
                        onPress={onSubmit}
                    >
                        <Text style={estilo.appButtonText}>Cadastrar</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={estilo.appButtonContainer}
                        onPress={goHome}
                    >
                        <Text style={estilo.appButtonText}>Cancelar</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
    );
}