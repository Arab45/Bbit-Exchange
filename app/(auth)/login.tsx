import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import CustomInput from "../component/signupInput";
import { router } from "expo-router";
import  {MaterialIcons}  from "@expo/vector-icons";


export default function SignIn() {
    return (
        <SafeAreaView style={styles.container}>
                     <View style={styles.backIcon}>
                        <MaterialIcons name="arrow-back" size={24} color="#fff" onPress={() => { router.push("/signup")}}/>
                     </View>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps="handled"
            >

                <View style={styles.inputContainer}>
                    <View>
                        <Text style={{ fontSize: 34, fontWeight: "bold", color: "#000056" }}>Let's Sign In</Text>
                        <Text style={{ color: "#000056" }}>Welcome back, you have been missed!</Text>
                    </View>
                    <View>
                        <CustomInput  placeholder="Email" />
                        <CustomInput  placeholder="Password" secureTextEntry={true} />
                        <View style={{ alignItems: "flex-end" }}>
                            <Text style={{ color: "#000056" }}>Forget Password?</Text>
                            <View style={styles.line} />
                        </View>
                    </View>

                </View>

                <View style={styles.footer}>
                    <Pressable style={styles.signInButton} onPress={() => { }}>
                        <Text style={styles.signInText}>Log In</Text>
                    </Pressable>
                    <Text style={styles.signupLink} onPress={() => router.push("/signup")}>
                        Sign Up
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 12,
        paddingHorizontal: 30,
    },
    scroll: {
        flex: 1,
        // paddingHorizontal: 30,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: "space-between",
        paddingBottom: 50,
    },
    inputContainer: {
        gap: 34,
        marginTop: 45,
    },
    footer: {
        alignItems: "center",
        gap: 12,
    },
    signInButton: {
        backgroundColor: "#000056",
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 24,
    },
    signInText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    signupLink: {
        fontWeight: "bold",
        color: "#D91286",
    },
    line: {
        height: 1,
        backgroundColor: "#000056",
        width: "36%",
    },
    backIcon: {
        backgroundColor: "#000056",
      marginTop: 24,
        width: 24,
        alignItems: "center",
        borderRadius: 64,
        borderColor: "black",
     }
});
