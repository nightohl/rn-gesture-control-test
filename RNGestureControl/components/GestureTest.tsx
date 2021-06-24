import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import {SwipeDirections, GestureState} from './types';

export default function GestureTest() {
  const [text, setText] = useState('');
  const [gesture, setGesture] = useState('');
  const [backColor, setBackColor] = useState('white');

  const onSwipeUp = (gestureState: GestureState) => {
    setText('You swiped up!');
    console.log('state : ', gestureState);
  };

  const onSwipeDown = (gestureState: GestureState) => {
    setText('You swiped down!');
    console.log('state : ', gestureState);
  };

  const onSwipeLeft = (gestureState: GestureState) => {
    setText('You swiped left!');
    console.log('state : ', gestureState);
  };

  const onSwipeRight = (gestureState: GestureState) => {
    setText('You swiped right!');
    console.log('state : ', gestureState);
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  const onSwipe = (
    gestureName: SwipeDirections,
    gestureState: GestureState,
  ) => {
    setGesture(gestureName);

    console.log('gestureState : ', gestureState);
    switch (gestureName) {
      case 'SWIPE_UP':
        setBackColor('red');
        break;
      case 'SWIPE_DOWN':
        setBackColor('green');
        break;
      case 'SWIPE_LEFT':
        setBackColor('blue');
        break;
      case 'SWIPE_RIGHT':
        setBackColor('yellow');
        break;
    }
  };

  return (
    <GestureRecognizer
      onSwipe={(direction: SwipeDirections, state: GestureState) =>
        onSwipe(direction, state)
      }
      onSwipeUp={state => onSwipeUp(state)}
      onSwipeDown={state => onSwipeDown(state)}
      onSwipeLeft={state => onSwipeLeft(state)}
      onSwipeRight={state => onSwipeRight(state)}
      config={config}
      style={[styles.gestureContainer, {backgroundColor: backColor}]}>
      <Text>{text}</Text>
      <Text>onSwipe callback received gesture: {gesture}</Text>
    </GestureRecognizer>
  );
}

const styles = StyleSheet.create({
  gestureContainer: {
    flex: 1,
  },
});
