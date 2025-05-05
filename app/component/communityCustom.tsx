import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native";

interface CommunityCustomProps {
    logo: React.ReactNode;
    title: string;
}

const CommunityCustom = ({ logo, title }: CommunityCustomProps) => {
    return (
        <SafeAreaView>
            <View style={{ flexDirection: "row", backgroundColor: "#000056", height: 70, width: "100%", justifyContent: "space-between", alignItems: "center", padding: 12, gap: 20, borderRadius: 10 }}>
                {logo}
                <Text style={{ fontSize: 16, fontWeight: "600", color: "#fff" }}>{title}</Text>
                <Image source={require("../../assets/folder/arrow_right.png")} />
            </View>
        </SafeAreaView>
    )
};

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: "#fff",
//     },
// })

export default CommunityCustom;