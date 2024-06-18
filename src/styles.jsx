import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        backgroundColor: "#1c1c1e",
    },
    selfCenter: {
        fontSize: 20,
        alignSelf: "center",
        color: "white",
    },
    justify: {
        marginLeft: 45,
        marginTop: 50,
        width: 300,
        height: 200,
        marginBottom: 210,
    },
    innerContainer: {
        padding: 20,
    },
    cardStyle: {
        backgroundColor: "#1c1c1e",
        marginTop: 10,
        width: 250,
        height: 300,
        padding: 10,
        alignSelf: "center",
    }
});

export default styles