import { Image, View } from "react-native";
import { SafeAreaView, StyleSheet, Text } from "react-native";

export default function Transaction() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={{fontSize: 16, fontWeight: "bold"}}>Transactions History</Text>
                <View style={{ backgroundColor: "#000056", flexDirection: "row", justifyContent: "space-between", alignItems: "center", width: "100%", height: 100}}>
                    <Image source={require("../../../assets/folder/transaction.png")} />
                    <View>
                  <Text style={{fontSize: 16}}>Total Balance</Text>
                  <Text style={{fontSize: 16, fontWeight: "bold"}}>4904,0486 bit</Text>  
                    </View>
                </View>
                <Text style={{fontSize: 16}}>History</Text>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})