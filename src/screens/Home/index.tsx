import { useAuth, useOAuth } from "@clerk/clerk-expo";
import { Box, Button, Divider, Text } from "@gluestack-ui/themed";
import { useWarmUpBrowser } from "@hooks/warmUpBrowser";
import { useCallback } from "react";

export default function Home() {
  const { userId, signOut } = useAuth();

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const handleGoogle = useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive!({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <Box
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      backgroundColor="$green300"
    >
      <Text>This is version 0</Text>
      <Text>User id is {userId}</Text>

      <Button onPress={handleGoogle}>
        <Text color="$white" fontWeight="$bold">
          Log in with google
        </Text>
      </Button>
      <Divider my="$0.5" />
      <Button onPress={() => signOut()}>
        <Text color="$white" fontWeight="$bold">
          LOG OUT
        </Text>
      </Button>
    </Box>
  );
}
