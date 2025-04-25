import { router } from "expo-router";
import { Image, Pressable, SafeAreaView, StyleSheet, Text, Touchable, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View></View>
      <View style={styles.exchangeContent}>
        <Image source={require("../assets/folder/money-exchange.png")} />
        <Text style={[styles.contentText, {fontSize: 18, fontWeight: "bold"}]}>Don't miss your earnings</Text>
        <View style={styles.relativeContainer}>
          <Text style={styles.contentText}>Stay updated updated on your earning</Text>
          <Text style={styles.contentText}>allowing us to send you important</Text>
          <Text style={styles.contentText}>notifcation</Text>
        </View>
        <Text style={styles.enableNote}>Enable notification</Text>
      </View>
    <Pressable style={styles.nextButton} onPress={() => {router.push("/start")}}>
      <Text style={styles.nextText}>Next</Text>
    </Pressable>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
  },
  exchangeContent:{
    gap: 30,
    alignItems: "center"
  },
  contentText:{
    color: "#000056",
    fontSize: 16
  },
  relativeContainer: {
    alignItems: "center"
  },
  enableNote: {
    color: "#000056",
    fontSize: 16,
    fontWeight: "bold"
  },
  nextButton: {
    backgroundColor: "#000056",
    width: "50%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    marginBottom: 24
  },
  nextText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold"
  }
})
