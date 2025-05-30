import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {
    const navigation = useNavigation<any>();
    const [email, setEmail] = React.useState('');
    const [senha, setSenha] = React.useState('');

    const login = () => {
        navigation.navigate('Products');
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            <Layout style={styles.container}>
                <Text category="h1" style={styles.title}>FardaShop</Text>
                <Text appearance="hint" style={styles.subtitle}>Bem-vindo de volta</Text>
                <Input
                    placeholder="E-mail"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                />
                <Input
                    placeholder="Senha"
                    secureTextEntry
                    value={senha}
                    onChangeText={setSenha}
                    style={styles.input}
                />
                <Button onPress={login} style={styles.button}>
                    Entrar
                </Button>
            </Layout>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
    title: {
        textAlign: 'center',
        marginBottom: 8,
    },
    subtitle: {
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        marginBottom: 16,
    },
    button: {
        marginTop: 8,
    },
});
