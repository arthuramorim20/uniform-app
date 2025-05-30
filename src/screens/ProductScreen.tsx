import React from 'react';
import { StyleSheet, FlatList, Image, View } from 'react-native';
import { Layout, Card, Text, TopNavigation, useTheme } from '@ui-kitten/components';

const produtos = [
    {
        id: '1',
        nome: 'Farda Azul Escolar',
        preco: 'R$ 89,90',
        imagem: 'https://img.elo7.com.br/product/zoom/43AA142/modelo-de-camisa-gola-polo-para-fardas-e-uniformes-kit-4-camisa-polo-masculina.jpg',
    },
    {
        id: '2',
        nome: 'Camisa Polo Branca',
        preco: 'R$ 49,90',
        imagem: 'https://images.unsplash.com/photo-1585386959984-a4155226c98a?fit=crop&w=800&q=60',
    },
    {
        id: '3',
        nome: 'Calça Preta Social',
        preco: 'R$ 109,90',
        imagem: 'https://images.unsplash.com/photo-1618354691212-667cd7b2c2a4?fit=crop&w=800&q=60',
    },
];

export default function ProductScreen() {
    const theme = useTheme();

    const renderItem = ({ item }: { item: typeof produtos[0] }) => (
        <Card style={styles.card}>
            <Image source={{ uri: item.imagem }} style={styles.image} />
            <Text category="s1" style={styles.name}>{item.nome}</Text>
            <Text appearance="hint">{item.preco}</Text>
        </Card>
    );

    return (
        <Layout style={styles.container}>
            <TopNavigation alignment="center" title="Catálogo" style={styles.header} />
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                contentContainerStyle={styles.list}
            />
        </Layout>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1 },
    header: {
        marginTop: 40,
        marginBottom: 10,
    },
    list: {
        paddingHorizontal: 8,
        paddingBottom: 16,
    },
    card: {
        flex: 1,
        margin: 8,
        padding: 12,
        borderRadius: 16,
        elevation: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: 120,
        borderRadius: 12,
        marginBottom: 12,
    },
    name: {
        textAlign: 'center',
        marginBottom: 4,
        fontWeight: '600',
    },
});
