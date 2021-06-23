import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import {
    FlatList,
    BorderlessButton as Button,
} from 'react-native-gesture-handler';

import { estilo } from './estilo';
import { getProdutos } from '../../services/api';

export default function Produtos({ navigation }: any) {
    const [produtos, setProdutos] = useState(Object);

    function goHome(): void {
        navigation.reset({
            index: 0,
            routes: [{ name: 'Home' }],
        });
    }

    useEffect(() => {
        getProdutos().then((items) => setProdutos(items));
        navigation.setOptions({
            headerRight: () => (
                <Button
                    style={estilo.exitButton}
                    onPress={goHome}
                >
                    <Text>Sair</Text>
                </Button>
            ),
        });
    }, []);

    return (
        <View style={estilo.container}>
            <FlatList
                data={produtos}
                keyExtractor={(produto) => produto.id.toString()}
                renderItem={({ item, index }) => (
                    <View style={estilo.card}>
                        <Text style={estilo.producttitle}>{item.name}</Text>
                        <Text>Fabricante: {item.factory.name}</Text>
                        <View style={estilo.priceSection}>
                            <Text>Preço: </Text>
                            <Text style={estilo.price}>
                                R$ {item.price.toFixed(2).replace('.', ',')}
                            </Text>
                        </View>
                        <Text>Quantidade em Estoque: {item.amount}</Text>
                    </View>
                )}
            />
        </View>
    );
}