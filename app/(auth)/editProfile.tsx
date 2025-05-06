import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function EditProfile() { 
    return (
        <SafeAreaView style={styles.container}>
            <Text>Edit Profile</Text>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})