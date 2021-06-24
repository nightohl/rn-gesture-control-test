import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import GestureExm from './components/GestureExm';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <GestureExm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
});
