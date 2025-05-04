import { SafeAreaView, Text } from "react-native";

export default function Leaderboard() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Leaderboard</Text>
        </SafeAreaView>
    )
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
}   