import React, { useCallback, useEffect, useState } from "react";
import { Animated, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled from "styled-components";

// Loader
import * as SplashScreen from "expo-splash-screen";

// i18n
import { i18n, setLocale } from "./src/utils/i18n";
import HomeScreen from "./src/screens/HomeScreen";

import { loginToFacebook } from "./src/auth";
loginToFacebook();
SplashScreen.preventAutoHideAsync();

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [lang, setLang] = useState(i18n.locale);
  const [opacityValue] = useState(new Animated.Value(1));

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        // await Font.loadAsync(Entypo.font);
        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);
  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);
  if (!appIsReady) {
    return null;
  }
  return (
    <Container onLayout={onLayoutRootView}>
      {appIsReady && <HomeScreen lang={lang} setLang={setLang} />}
    </Container>
  );
}
