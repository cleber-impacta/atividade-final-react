import { Dimensions, StyleSheet } from 'react-native';

export const estilo = StyleSheet.create({
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#3C33FF',
        margin: 10,
        padding: 8,
        color: 'white',
        borderRadius: 14,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
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
