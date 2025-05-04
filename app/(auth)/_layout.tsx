import AsyncStorage from "@react-native-async-storage/async-storage";
import { router, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";


export default function AuthLayout() {

  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const token = await AsyncStorage.getItem('token');
      if (!token) {
        router.replace('../(auth)/login');  // Redirect to login if no token
      }
      setCheckingAuth(false);
    };

    checkAuth();
  }, []);

  // if (checkingAuth) {
  //   return <ActivityIndicator size="large" />;  // Show loading while checking auth
  // }

  return (
    <Stack>
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
        />
      {/* <Stack.Screen
        name="notification"
        options={{
          headerShown: false,
        }}
        /> */}
    </Stack>
  );
}