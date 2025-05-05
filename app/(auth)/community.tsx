import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Pressable, StyleSheet, View, SafeAreaView, Text } from "react-native";
import CommunityCustom from "../component/communityCustom";
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import EvilIcons from '@expo/vector-icons/EvilIcons';

export default function Community() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", paddingHorizontal: 16, paddingVertical: 24, alignItems: "center", gap: 24 }}>
                <Pressable style={styles.backIcon} onPress={() => { router.push("/dashboard") }}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </Pressable>
                <Text style={{ fontSize: 20, fontWeight: 600, textAlign: "center", color: "#000056" }}>Join Community</Text>
            </View>
            <View style={{ paddingHorizontal: 20, paddingVertical: 12, gap: 12 }}>
                <CommunityCustom
                    logo={<AntDesign name="twitter" size={24} color="#fff" />}
                    title="Follow us on Twitter"
                />
                <CommunityCustom
                    logo={<FontAwesome6 name="discord" size={24} color="#fff" />}
                    title="Join us server Discord"
                />
                <CommunityCustom
                    logo={<AntDesign name="instagram" size={24} color="#fff" />}
                    title="Follow us on Instagram"
                />
                <CommunityCustom
                    logo={<EvilIcons name="sc-telegram" size={28} color="#fff" />}
                    title="Get updates on Telegram"
                />
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
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