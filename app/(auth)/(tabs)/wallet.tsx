import { SafeAreaView, StyleSheet, Text, View } from "react-native";

export default function Wallet() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
            <Text>Wallet</Text>
            </View>
            <View style={{backgroundColor: "#fff", borderBottomEndRadius: 12}}>
                <Text>Wallet connection</Text>
                <Text>comming soon...</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})