import { MaterialIcons } from "@expo/vector-icons";
import Entypo from '@expo/vector-icons/Entypo';
import { Tabs } from "expo-router";
import { Image, StyleSheet } from "react-native";

export default function Layout() {
    return (

        <Tabs screenOptions={
            {
                tabBarActiveTintColor: "#000056",
                tabBarInactiveTintColor: "gray",
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: "absolute",
                    backgroundColor: "#fff",
                    borderTopWidth: 0,
                    height: 60,
                    paddingBottom: 10,
                    paddingTop: 10,
                    justifyContent: "space-between"
                },
                headerShown: false,
            }
        }>
        <Tabs.Screen
            name="dashboard"
            options={{
                title: "dashboard",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    // <Entypo name="home" size={24} color="black" />
                    <Image source= {require("../../../assets/folder/Group1.png")} style={[styles.icon, {tintColor: color}]}/>
                ),
            }}
            />
        <Tabs.Screen
            name="transaction"
            options={{
                title: "transaction",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    // <Entypo name="home" size={24} color="black" />
                    <Image source= {require("../../../assets/folder/Group2.png")} style={{tintColor: color}}/>
                ),
            }}
        />
                <Tabs.Screen
            name="wallet"
            options={{
                title: "wallet",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    // <Entypo name="home" size={24} color="black" />
                    <Image source= {require("../../../assets/folder/Group3.png")} style={{tintColor: color}}/>
                ),
            }}
        />
                <Tabs.Screen
            name="profile"
            options={{
                title: "profile",
                headerShown: false,
                tabBarIcon: ({ color }) => (
                    // <Entypo name="home" size={24} color="black" />
                    <Image source= {require("../../../assets/folder/Group4.png")} style={{tintColor: color}}/>
                ),
                
            }}
            />
    </Tabs>
        )
}

const styles = StyleSheet.create({
    icon: {
        tintColor: "gray"
    }
})