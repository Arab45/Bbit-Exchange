import { router, Stack } from "expo-router";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { GlobalProvider } from "@/context/global";



// Create a client
const queryClient = new QueryClient();

export default function RootLayout() {

  return (
    <QueryClientProvider client={queryClient}>
      <GlobalProvider>
        <Stack>
          <Stack.Screen
            name="index"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="start"
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="(auth)"
            options={{
              headerShown: false,
            }}
          />
        </Stack>
      </GlobalProvider>
    </QueryClientProvider>
  );
}
