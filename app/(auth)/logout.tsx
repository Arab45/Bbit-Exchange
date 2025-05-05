import { SafeAreaView, Text } from "react-native";

export default function Logout() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Logout</Text>
        </SafeAreaView>
    )
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
}