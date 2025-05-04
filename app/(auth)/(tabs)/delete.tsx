import { SafeAreaView, Text } from "react-native";

export default function Delete() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Delete</Text>
        </SafeAreaView>
    )
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
}