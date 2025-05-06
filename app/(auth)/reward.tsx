import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Reward() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Reward</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})