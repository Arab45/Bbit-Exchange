import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Image, StyleSheet, View } from "react-native";
import { Pressable, SafeAreaView, Text } from "react-native";

export default function Referral() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", paddingHorizontal: 16, paddingVertical: 24, alignItems: "center", gap: 24 }}>
                <Pressable style={styles.backIcon} onPress={() => { router.push("/dashboard") }}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </Pressable>
                <Text style={{ fontSize: 20, fontWeight: 600, textAlign: "center", color: "#000056" }}>Staking & Rewards</Text>
            </View>
            <View style={{ alignItems: "center", justifyContent: "center", gap: 12, paddingHorizontal: 20 }}>
                <Text style={{color: "#000056", fontSize: 16, fontWeight: 600}}>Secure a portion of your digital assets by</Text>
                <Text style={{color: "#000056", fontSize: 16, fontWeight: 600}}>locking them up for a predetermined period,</Text>
                <Text style={{color: "#000056", fontSize: 16, fontWeight: 600}}>and in return, earn rewards or interest</Text>
            </View>
            <View style={{alignItems: "center", justifyContent: "center" }}>
                <Image source={require("../../assets/folder/stakingIcon.png")} resizeMode="cover"/>
            </View>
            <View style={{alignItems: "center", justifyContent: "center", gap: 12, paddingHorizontal: 20 }}>
                <Text style={{color: "#000056", fontSize: 20}}>Staking will open soon</Text>
                <Text style={{color: "#000056", fontSize: 24, fontWeight: "bold"}}>Stay Tunde!</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        gap: 64
    },
    backIcon: {
        backgroundColor: "#000056",
        width: 24,
        height: 24,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 999,
        borderColor: "black",
    }, 
})