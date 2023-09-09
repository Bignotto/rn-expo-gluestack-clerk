import { Inter_900Black, useFonts } from "@expo-google-fonts/inter";
import { Box, GluestackUIProvider } from "@gluestack-ui/themed";
import { Text } from "react-native";

export default function App() {
  let [fontsLoaded, fontError] = useFonts({
    Inter_900Black,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GluestackUIProvider>
      <Box
        width="100%"
        height="100%"
        justifyContent="center"
        alignItems="center"
        backgroundColor="$green300"
      >
        <Text>This is version 0</Text>
      </Box>
    </GluestackUIProvider>
  );
}
