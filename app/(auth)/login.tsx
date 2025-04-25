import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import CustomInput from "../component/signupInput";
import { router } from "expo-router";

export default function SignIn() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <CustomInput value="" placeholder="Email" />
                <CustomInput value="" placeholder="Password" secureTextEntry={true} />
            </View>
            <View>
                <Pressable style={styles.signInButton} onPress={() => { }}>
                    <Text style={styles.signInText}>Log In</Text>
                </Pressable>
                <Text style={{ fontWeight: "bold", color: "#D91286" }} onPress={() => { router.push("/signup") }}>Sign Up</Text>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 64,
        gap: 24,
        paddingHorizontal: 24,
        justifyContent: "space-between",
    },
    inputContainer: {
        gap: 24,
    },
    signInButton: {
        backgroundColor: "#000056",
        width: "50%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 24,
        marginBottom: 24
    },
    signInText: {
        color: "#fff",
    }
})