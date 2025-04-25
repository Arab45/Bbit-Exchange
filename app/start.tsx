import { Image, Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import  {MaterialIcons}  from "@expo/vector-icons";
import { router } from "expo-router";

export default function Start() {
   return (
      <SafeAreaView style={styles.container}>
         <View style={{flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 30}}>
         <View style={styles.backIcon}>
            <MaterialIcons name="arrow-back" size={24} color="#fff" onPress={() => { router.push("/")}}/>
         </View>
         </View>
         <View style={styles.exchangeContent}>
            <Image source={require("../assets/folder/exchange-image.png")} />
            <Text style={styles.secureText}>Easy and Secure</Text>
            <View style={styles.relativeContainer}>
               <Text style={styles.contentText}>Bit enables user to mine crypto currency</Text>
               <Text style={styles.contentText}>effeciently provide real-time stats, secure</Text>
               <Text style={styles.contentText}>wallet integration and easy payout</Text>
            </View>
         </View>
         <View style={{flex: 1, justifyContent: "flex-end", alignItems: "center", paddingBottom: 24}}>
         <Pressable style={styles.getButton} onPress={() => { router.push("/signup") }}>
            <Text style={styles.getText}>Get Started</Text>
         </Pressable>
         </View>
      </SafeAreaView>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      justifyContent: "space-between",
      // alignItems: "center",
   },
   exchangeContent: {
      gap: 30,
      alignItems: "center"
   },
   contentText: {
      color: "#000056",
      fontSize: 16
   },
   relativeContainer: {
      alignItems: "center"
   },
   secureText: {
      color: "#000056",
      fontSize: 30,
      fontWeight: "bold"
   },
   getButton: {
      backgroundColor: "#000056",
      width: "50%",
      height: 50,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 24,
      marginBottom: 24
   },
   getText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold"
   },
   backIcon: {
      backgroundColor: "#000056",
    marginTop: 24,
      width: 24,
      alignItems: "center",
      borderRadius: 64,
      borderColor: "black",
   }
})