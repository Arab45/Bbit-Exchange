import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import CustomInput from "../component/signupInput";
import { router } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';
import { useState } from "react";


export default function SignUp() {
    const [isChecked, setChecked] = useState(false);
    const [username, setIsUsername] = useState("");
    const [email, setIsEmail] = useState("");
    const [phone, setIsPhone] = useState("");
    const [password, setIsPassword] = useState("");


    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.backIcon}>
                <MaterialIcons name="arrow-back" size={24} color="#fff" onPress={() => { router.push("/start") }} />
            </View>
            <ScrollView
                style={styles.scroll}
                contentContainerStyle={styles.scrollContent}
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.headerText}>Sign Up</Text>
                <Text style={styles.subText}>Create an account to continue</Text>

                <CustomInput placeholder="username" />
                <CustomInput placeholder="email" />
                <CustomInput value="phone" placeholder="phone" />
                <CustomInput value="password" placeholder="password" />

                <View style={{ flexDirection: "row", alignItems: "center",  justifyContent: "space-between", gap: 2,  }}>
                    <Checkbox
                    style={{marginTop: 16, transform: [{ scaleX: 0.7 }, { scaleY: 0.7 }]}}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#000056' : undefined}
                    />
                    <Text style={styles.agreeText}>
                        I agree to the terms of service and privacy policy
                    </Text>
                </View>

                <Pressable style={styles.signButton} onPress={() => router.push("/login")}>
                    <Text style={styles.signText}>Sign Up</Text>
                </Pressable>

                <Text style={styles.loginText}>
                    Already have an account?{" "}
                    <Text style={styles.loginLink} onPress={() => router.push("/login")}>
                        Login
                    </Text>
                </Text>
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
        gap: 12,
        paddingBottom: 64, // So last item is not cut off
    },
    headerText: {
        color: "#000056",
        fontSize: 24,
        fontWeight: "bold",
        marginTop: 45
    },
    subText: {
        color: "#000056",
        fontSize: 16,
    },
    agreeText: {
        color: "#000056",
        marginTop: 16,
        fontSize: 13.5,
        
    },
    signButton: {
        backgroundColor: "#000056",
        width: "100%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 24,
        marginTop: 16,
    },
    signText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    loginText: {
        color: "#000056",
        textAlign: "center",
        marginTop: 12,
    },
    loginLink: {
        fontWeight: "bold",
        color: "#D91286",
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
