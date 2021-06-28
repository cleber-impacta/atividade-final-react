import React, { useState } from 'react';
import {
    View,
    Image,
    Text,
    TouchableOpacity,
    ActivityIndicator,
    Alert,
    KeyboardAvoidingView,
} from 'react-native';

import { estilo } from './estilo';

import Input from '../../components/Input';
import { autenticar } from '../../services/api';
import { validaCampo } from '../../util/validation';

export default function Home({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    
    async function login(): Promise<any> {
        setIsLoading(true);

        if(email.length == 0){
            Alert.alert('Endereço de e-mail é obrigatório!');
            setIsLoading(false);
            return;
        }

        if (!validaCampo(password, 'Senha não pode ser vazia!')) {
            setIsLoading(false);
            return;
        }

        autenticar(email, password)
            .then((result) => {
                setIsLoading(false);
                if (!result) {
                    setIsLoading(false);
                    Alert.alert(
                        'Erro!',
                        'E-mail/Senha Inválido!.'
                    );
                    setIsLoading(false);
                    return;
                }
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Produtos' }],
                });
            })
            .catch((error) => {
                console.error(error);
                setIsLoading(false);
                Alert.alert(
                    'Erro ao Autenticar',
                    'Houve um erro ao tentar logar.\nContate o administrador.'
                );
            });
    }
    
    function openUserRegistration(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Cadastro' }],
        });
    }

    return (
        <KeyboardAvoidingView style={estilo.keyboardAvoidingView}>
        <View style={estilo.container}>
            <Image
                style={estilo.logo}
                source={require('../../../assets/logo_impacta.png')}
            />

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

            {!isLoading ? (
                <View>
                    <TouchableOpacity
                        style={estilo.appButtonContainer}
                        onPress={login}
                    >
                        <Text style={estilo.appButtonText}>Login</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={estilo.appButtonContainer}
                        onPress={openUserRegistration}
                    >
                        <Text style={estilo.appButtonText}>Registrar</Text>
                    </TouchableOpacity>
                </View>
            ) : (
                <View>
                    <ActivityIndicator
                        animating={isLoading}
                        size="large"
                        color="#EEEBFF"
                    />
                </View>
            )}
        </View>
        </KeyboardAvoidingView>
    );
}
