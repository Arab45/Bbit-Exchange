import { SafeAreaView, Text } from "react-native";

export default function ChangePassword (){
    return (
        <SafeAreaView style={styles.container}>
            <Text>Change Password</Text>
        </SafeAreaView>
    )
};

const styles = {
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
}