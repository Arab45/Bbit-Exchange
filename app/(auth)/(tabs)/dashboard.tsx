import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { router } from "expo-router";

export default function Dashboard() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.rectangleBox}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 20, alignItems: "center" }}>
                    <View style={{ flexDirection: "row", gap: 10, alignItems: "center" }}>
                        <Image source={require("../../../assets/folder/Ellipse.png")} />
                        <Text style={{ color: "#fff" }}>Oracle Neox</Text>
                    </View>
                    <View >
                        <Pressable onPress={() => router.push("/notification")}>
                            {/* <EvilIcons name="bell" size={30} color="white" /> */}
                            <Image source={require("../../../assets/folder/notification.png")} />
                        </Pressable>
                    </View>
                </View>
                <View style={{ alignItems: "center", justifyContent: "center", height: 200, gap: 12 }}>
                    <Text style={{ color: "#fff", fontSize: 12 }}>CURRENT BALANCE</Text>
                    <Text style={{ color: "#fff", fontSize: 30, fontWeight: "bold" }}>333.300BIT</Text>
                    <View style={styles.innerBox}>
                        <Text style={{ color: "#fff" }}>Minning: 1000.25BIT</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bitLogo}>
                <Image source={require("../../../assets/folder/Bit.png")} />
            </View>
            <View style={{ gap: 16 }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center", marginTop: 150, gap: 12 }}>
                    <View style={{ backgroundColor: "#000056", height: 80, width: "45%", borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
                        <Text style={{ color: "#fff" }}>Referral</Text>
                    </View>
                    <View style={{ backgroundColor: "#000056", height: 80, width: "45%", borderRadius: 20, alignItems: "center", justifyContent: "center" }} >
                        <Pressable onPress={() => router.push("/leaderboard")}>
                            <Text style={{ color: "#fff" }}>Top User</Text>
                        </Pressable>
                    </View>
                </View>
                <View style={{ flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 20, alignItems: "center", marginBottom: 50, gap: 12, }}>
                    <View style={{ backgroundColor: "#000056", height: 80, width: "45%", borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
                        <Pressable onPress={() => router.push("/referral")}>
                            <Text style={{ color: "#fff" }}>Staking &</Text>
                            <Text style={{ color: "#fff" }}>Rewards</Text>
                        </Pressable>
                    </View>
                    <View style={{ backgroundColor: "#000056", height: 80, width: "45%", borderRadius: 20, alignItems: "center", justifyContent: "center" }}>
                        <Pressable onPress={() => router.push("/community")}>
                            <Text style={{ color: "#fff" }}>Join</Text>
                            <Text style={{ color: "#fff" }}>Community</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center", gap: 12, marginBottom: 150, paddingHorizontal: 20 }}>
                <View style={{ backgroundColor: "#2b2b87", width: "100%", height: 60, borderRadius: 16, alignItems: "center", justifyContent: "center" }}>
                    <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold", textAlign: "center" }}>Invite Friends</Text>
                    <Text style={{ color: "#fff" }}>Earn 500BIT for each friends you invite</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        gap: 12
    },
    rectangleBox: {
        width: "100%",
        height: 300,
        backgroundColor: "#000056",
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
    },
    innerBox: {
        backgroundColor: "#2b2b87",
        width: "50%",
        height: 35,
        borderBottomRightRadius: 16,
        borderTopStartRadius: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    bitLogo: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: 310,
        alignItems: "center",
        justifyContent: "center",
    }
})   