import { SafeAreaView, Text } from "react-native";

export default function Wallet() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Wallet</Text>
        </SafeAreaView>
    )
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
}