import { ClerkProvider } from "@clerk/clerk-expo";
import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import Routes from "@routes/index";

export default function App() {
  const CLERK_KEY = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GluestackUIProvider>
      <ClerkProvider publishableKey={`${CLERK_KEY}`}>
        <Routes />
      </ClerkProvider>
    </GluestackUIProvider>
  );
}
