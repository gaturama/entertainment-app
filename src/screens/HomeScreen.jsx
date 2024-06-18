import { View, ScrollView } from 'react-native';
import styles from '../styles';
import { Button, Card, Text } from 'react-native-paper';

function HomeScreen({ navigation }) {
    const handleBackToLogin = () => {
        navigation.navigate('Auth');
    };

    return (
        <ScrollView>
            <Text variant="titleLarge"
                style={{
                    backgroundColor: "#00000",
                    color: "white",
                    fontSize: 17,
                    textAlign: "center",
                }}
            >The best Meme's Page from Brazil</Text>
            <View style={styles.container}>
                <Card>
                    <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/1d/7f/8e/1d7f8e1b6f1b6f8e2b7c6a0c9a3a7b7f.jpg' }} />
                    <Card.Content>
                        <Text>Meme 1</Text>
                        <Text>Description of the meme 1</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/1d/7f/8e/1d7f8e1b6f1b6f8e2b7c6a0c9a3a7b7f.jpg' }} />
                    <Card.Content>
                        <Text>Meme 2</Text>
                        <Text>Description of the meme 2</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/1d/7f/8e/1d7f8e1b6f1b6f8e2b7c6a0c9a3a7b7f.jpg' }} />
                    <Card.Content>
                        <Text>Meme 3</Text>
                        <Text>Description of the meme 3</Text>
                    </Card.Content>
                </Card>
                <Card>
                    <Card.Cover source={{ uri: 'https://i.pinimg.com/564x/1d/7f/8e/1d7f8e1b6f1b6f8e2b7c6a0c9a3a7b7f.jpg' }} />
                    <Card.Content>
                        <Text>Meme 4</Text>
                        <Text>Description of the meme 4</Text>
                    </Card.Content>
                </Card>

                <Button title="voltar para a tela de login"
                    onPress={handleBackToLogin}
                    style={{
                        marginTop: 10,
                        width: 300,
                        alignSelf: 'center',
                    }}
                >Back</Button>
            </View>
        </ScrollView>
    )
}

export default HomeScreen;