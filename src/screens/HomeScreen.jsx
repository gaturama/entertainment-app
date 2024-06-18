import { View, ScrollView } from 'react-native';
import styles from '../styles';
import { Button, Card, Text } from 'react-native-paper';
import { Image } from 'expo-image';

function HomeScreen({ navigation }) {
    const handleBackToLogin = () => {
        navigation.navigate('Auth');
    };

    return (
        <ScrollView>
            <Text variant="titleLarge"
                style={{
                    backgroundColor: "#00000",
                    color: "black",
                    fontSize: 17,
                    textAlign: "center",
                }}
            >The best Meme's Page from Brazil</Text>
            <View style={styles.container}>
                <View style={{ height: 100, width: 100, alignSelf: 'center', marginTop: 10 }}>
                    <Card style={styles.cardStyle}>
                        <Card.Cover source={require("../images/carianiUm.jpg")} />
                    </Card>
                </View>
                <View style={{ height: 100, width: 100, alignSelf: 'center', marginTop: 120 }}>
                    <Card style={styles.cardStyle}>
                        <Card.Cover source={require("../images/carianiDois.jpg")} />
                    </Card>
                </View>
                <View style={{ height: 100, width: 100, alignSelf: 'center', marginTop: 120 }}>
                    <Card style={styles.cardStyle}>
                        <Card.Cover source={require("../images/carianiTres.png")} />
                    </Card>
                </View>
                <View style={{ height: 100, width: 100, alignSelf: 'center', marginTop: 120, marginBottom: 100 }}>
                    <Card style={styles.cardStyle}>
                        <Card.Cover source={require("../images/carianiQuatro.jpg")} />
                    </Card>
                </View>
                <Button title="voltar para a tela de login"
                    onPress={handleBackToLogin}
                    style={{
                        marginTop: 50,
                        marginBottom: 20,
                        width: 100,
                        alignSelf: 'center',
                        backgroundColor: "white"
                    }}
                >Back</Button>
            </View>
        </ScrollView>
    )
}

export default HomeScreen;