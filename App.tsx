import { ReactElement, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync()

export default function App(): ReactElement {
  useEffect(() => {
    async function prepare() {
      SplashScreen.hideAsync();
    }

    setTimeout(() => prepare(), 4000);
    setTimeout(() => prepare(), 8000);
    setTimeout(() => prepare(), 12000);
    setTimeout(() => prepare(), 16000);
    setTimeout(() => prepare(), 20000);
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
