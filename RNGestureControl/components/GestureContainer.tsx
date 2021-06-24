import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import {GestureContainerProps} from './types';

export default function GestureContainer({
  children,
  onSwipeUp = gestureState => console.log('state : ', gestureState),
  onSwipeDown = gestureState => console.log('state : ', gestureState),
  onSwipeLeft = gestureState => console.log('state : ', gestureState),
  onSwipeRight = gestureState => console.log('state : ', gestureState),
  velocityThreshold = 0.3,
  directionalOffsetThreshold = 80,
}: GestureContainerProps) {
  //
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
