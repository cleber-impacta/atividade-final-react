import React from 'react';
import { TextInput, KeyboardType } from 'react-native';

import { estilo } from './estilo';

interface Props {
    label: string;
    value: string;
    isPassword?: boolean;
    keyboardType?: KeyboardType;
    onChange: (value: string) => void;
}

export default function Input(props: Props) {
    const { label, value, isPassword, keyboardType, onChange } = props;

    return (
        <>
            <TextInput
                value={value}
                onChangeText={onChange}
                placeholder={label}
                style={estilo.input}
                secureTextEntry={isPassword}
                keyboardType={keyboardType}
            />
        </>
    );
}
