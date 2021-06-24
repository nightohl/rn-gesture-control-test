import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import GestureContainer from './components/GestureContainer';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <GestureContainer>
        <View>
          <Text>test</Text>
        </View>
      </GestureContainer>
    </SafeAreaView>
  );
}
