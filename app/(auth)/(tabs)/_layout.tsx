import { Tabs } from "expo-router";

export default function Layout() {
    <Tabs>
        <Tabs.Screen
            name="dashboard"
            options={{
                title: "Dashboard",
                headerShown: false,
            }}
        />
        <Tabs.Screen
            name="transaction"
            options={{
                title: "transaction",
                headerShown: false,
            }}
        />
                <Tabs.Screen
            name="wallet"
            options={{
                title: "wallet",
                headerShown: false,
            }}
        />
                <Tabs.Screen
            name="profile"
            options={{
                title: "profile",
                headerShown: false,
            }}
        />
    </Tabs>
}