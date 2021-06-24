import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import {GestureContainerProps, GestureHandler} from './types';

const onSwipeUpDefault: GestureHandler = gestureState => {
  console.log('state : ', gestureState);
};

const onSwipeDownDefault: GestureHandler = gestureState => {
  console.log('state : ', gestureState);
};

const onSwipeLeftDefault: GestureHandler = gestureState => {
  console.log('state : ', gestureState);
};

const onSwipeRightDefault: GestureHandler = gestureState => {
  console.log('state : ', gestureState);
};

export default function GestureContainer({
  children,
  onSwipeUp = onSwipeUpDefault,
  onSwipeDown = onSwipeDownDefault,
  onSwipeLeft = onSwipeLeftDefault,
  onSwipeRight = onSwipeRightDefault,
  velocityThreshold = 0.3,
  directionalOffsetThreshold = 80,
}: GestureContainerProps) {
  const config = {
    velocityThreshold,
    directionalOffsetThreshold,
  };

  return (
    <GestureRecognizer
      onSwipeUp={state => onSwipeUp(state)}
      onSwipeDown={state => onSwipeDown(state)}
      onSwipeLeft={state => onSwipeLeft(state)}
      onSwipeRight={state => onSwipeRight(state)}
      config={config}
      style={[]}>
      {children}
    </GestureRecognizer>
  );
}
