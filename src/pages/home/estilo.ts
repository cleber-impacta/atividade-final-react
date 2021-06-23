import { Dimensions, StyleSheet } from 'react-native';


export const estilo = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    logo: {
        height: Dimensions.get('window').width,
        width: Dimensions.get('window').width,
    },
    appButtonContainer: {
        width: Dimensions.get('window').width - 34,
        backgroundColor: '#3C33FF',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 12,
    },
    appButtonText: {
        fontSize: 14,
        color: '#fff',
        fontWeight: 'bold',
        alignSelf: 'center',
        textTransform: 'uppercase',
    },
});