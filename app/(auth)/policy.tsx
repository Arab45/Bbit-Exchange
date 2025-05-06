import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Policy() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Policy</Text>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})