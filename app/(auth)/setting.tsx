import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Setting () {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Setting</Text>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})