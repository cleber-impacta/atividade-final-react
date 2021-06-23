import { TouchableOpacity, Text } from 'react-native';

import { estilo } from './estilo';

interface Props {
    onPress: () => void;
    title: string;
}

const AppButton = (props: Props) => {
    const { onPress, title } = props;

    return (
        <TouchableOpacity onPress={onPress} style={estilo.appButtonContainer}>
            <Text style={estilo.appButtonText}>{title}</Text>
        </TouchableOpacity>
    );
};

export default AppButton;
