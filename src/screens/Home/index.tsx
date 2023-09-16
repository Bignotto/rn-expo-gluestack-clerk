import { SignedIn, SignedOut, useAuth, useUser } from "@clerk/clerk-expo";
import { Box, Button, Divider, Text } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { StackParamList } from "@routes/Navigation.types";

export default function Home() {
  const { userId, signOut, sessionId } = useAuth();
  const { user } = useUser();

  const navigation = useNavigation<NativeStackNavigationProp<StackParamList>>();

  return (
    <Box
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      backgroundColor="$green300"
    >
      <Text>This is version 0</Text>
      <Text>User id is {`${user?.primaryEmailAddress}`}</Text>
      <Text>User id is {`${sessionId}`}</Text>

      <Divider my="$0.5" />
      <SignedOut>
        <Button onPress={() => navigation.navigate("Google")}>
          <Text>Google</Text>
        </Button>
      </SignedOut>
      <SignedIn>
        <Button onPress={() => signOut()}>
          <Text color="$white" fontWeight="$bold">
            LOG OUT
          </Text>
        </Button>
      </SignedIn>
    </Box>
  );
}
