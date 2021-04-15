import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import HomeScreen from './HomeScreen';

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
