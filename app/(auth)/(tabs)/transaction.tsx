import { SafeAreaView, Text } from "react-native";

export default function Transaction() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Transaction</Text>
        </SafeAreaView>
    )
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
}