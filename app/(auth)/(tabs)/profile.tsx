import { SafeAreaView, Text } from "react-native";

export default function Profile() {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Profile</Text>
        </SafeAreaView>
    )
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
}