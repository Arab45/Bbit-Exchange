import { FlatList, Pressable, SafeAreaView, StyleSheet, Text } from "react-native";
import { useNotification } from "@/context/global";
import { View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";



export default function Notification() {
    const { data, isError, isLoading } = useNotification();
    console.log("Notification Data: ", data);
    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flexDirection: "row", paddingHorizontal: 16, paddingVertical: 24, alignItems: "center", gap: 24 }}>
                <Pressable style={styles.backIcon} onPress={() => { router.push("/dashboard") }}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                </Pressable>
                <Text style={{ fontSize: 16, fontWeight: 600, textAlign: "center", color: "#000056" }}>Notification</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "#000056" }}>
                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginTop: 24, paddingHorizontal: 20, paddingVertical: 12 }}>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", }}>All</Text>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", }}>System Notification</Text>
                    <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold", }}>Annoucement</Text>
                </View>
                <View style={{ flex: 1, backgroundColor: "#fff", borderTopLeftRadius: 24, borderTopRightRadius: 24, paddingHorizontal: 20, paddingVertical: 12 }}>
                    <FlatList
                        data={data ?? []}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => (
                            <View style={{ paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: "gray", gap: 12 }}>
                                <Text style={{ color: "#000056", fontSize: 16, fontWeight: "bold" }}>{item.subject}</Text>
                                <Text style={{ color: "#000056", fontSize: 16 }}>{item?.message}</Text>
                                <Text style={{ color: "#000056", fontSize: 16 }}>{item?.content}</Text>
                                <View>
                                    <Text style={{ color: "#000056", fontSize: 12 }}>{item?.accountObject?.account}</Text>
                                    <Text style={{ color: "#000056", fontSize: 12 }}>{item?.accountObject?.device}</Text>
                                    <Text style={{ color: "#000056", fontSize: 12 }}>{item?.accountObject?.time}</Text>
                                    <Text style={{ color: "#000056", fontSize: 12 }}>{item?.accountObject?.IP_Address}</Text>
                                </View>
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
    }
})