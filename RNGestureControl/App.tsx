import React from 'react';
import {SafeAreaView} from 'react-native';

import GestureTest from './components/GestureTest';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureTest />
    </SafeAreaView>
  );
}
