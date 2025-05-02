import { SafeAreaView, StyleSheet, Text } from "react-native";
import { useNotification } from "@/context/global";


export default function Notification() {
    const { data, isLoading, isError } = useNotification();
    console.log("Notification Data: ", data);
    return (
        <SafeAreaView style={styles.container}>
            <Text>Notification</Text>
            <Text>{data.Content}</Text>
            <Text>{data.message}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})