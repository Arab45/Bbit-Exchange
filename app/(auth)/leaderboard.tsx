import { FlatList, Image, Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { useLeaderBoard, useNotification } from "@/context/global";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";



export default function LeaderBoard() {
    const { data, isLoading, isError } = useLeaderBoard();
    console.log("leaderboard Data: ", data);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", paddingHorizontal: 16, paddingVertical: 24, alignItems: "center", gap: 24 }}>
                <Pressable style={styles.backIcon} onPress={() => { router.push("/dashboard") }}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </Pressable>
                <Text style={{ fontSize: 16, fontWeight: 600, textAlign: "center", color: "#000056" }}>Top Users</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "#000056" }}>
                <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginTop: 12, paddingHorizontal: 20, paddingVertical: 12 }}>
                    <View style={styles.innerBox}>
                        <Text style={{ color: "#000056", fontSize: 20, fontWeight: 600 }}>leaderboard</Text>
                    </View>
                </View>
                <View style={{ flex: 1, backgroundColor: "#fff", borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 20, paddingVertical: 12 }}>
                    <FlatList
                        data={data?.token ?? []}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ flexDirection: "row", paddingVertical: 12, gap: 12, justifyContent: "space-between", alignItems: "center" }}>
                                <View style={{ flexDirection: "row", gap: 12, alignItems: "center" }}>
                                    <Image 
                                    source={{uri: item?.avatarImg}} 
                                      style={{ width: 48, height: 48, borderRadius: 24 }}
                                      resizeMode="cover"
                                    />
                                    <Text style={{ color: "#000056", fontSize: 16, fontWeight: "bold" }}>{item?.name}</Text>
                                </View>
                                <Text style={{ color: "#000056", fontSize: 16, fontWeight: "bold" }}>{item?.rate}</Text>
                            </View>
                        )}
                    />
                </View>
            </View>
            {/* <Text>{data?.content}</Text> */}
            {/* <Text>{data?.token[0]?.subject}</Text>
            <Text>{data?.token[0]?.accountObject?.time}</Text> */}
        </SafeAreaView>
    )
}

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
    innerBox: {
        backgroundColor: "#fff",
        width: "50%",
        height: 35,
        borderBottomRightRadius: 16,
        borderTopStartRadius: 16,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 12,
    },
})