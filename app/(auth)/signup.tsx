import { Pressable, StatusBar, StyleSheet, View } from "react-native";
import { SafeAreaView, Text } from "react-native";
import CustomInput from "../component/signupInput";
import { ScrollView } from "react-native";
import { router } from "expo-router";

interface Props {
    value: string;
    placeholder: string;
}

export default function SignUp({ value, placeholder }: Props) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={{  }} showsVerticalScrollIndicator={false} >
            <View>
                <Text style={{color: "000056", fontSize: 24}}>Sign Up</Text>
                <Text style={{color: "000056"}}>Create an account to continue</Text>
            </View>
            <View>
                <CustomInput value="username" placeholder="username" />
                <CustomInput value="email" placeholder="email" />
                <CustomInput value="phone" placeholder="phone" />
                <CustomInput value="password" placeholder="password" />
            </View>
            <View>
                <Text style={{color: "#000056"}}>I agree to the terms of service and privacy policy</Text>
            </View>
         <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center", paddingBottom: 24, marginBottom: 24}}>
         <Pressable style={styles.signButton} onPress={() => { router.push("/login") }}>
            <Text style={styles.signText}>Sign Up</Text>
         </Pressable>
         <Text style={{color: "#000056"}}>Already have an account? <Text style={{fontWeight: "bold", color: "#D91286"}} onPress={() => { router.push("/login") }}>Login</Text></Text>
         </View>
            </ScrollView>
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
    signButton: {
        backgroundColor: "#000056",
        width: "50%",
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 24,
        marginBottom: 24
     },
     signText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold"
     },
})