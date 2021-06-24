import {ReactElement} from 'react';
import {PanResponderGestureState} from 'react-native';

export type SwipeDirections =
  | 'SWIPE_UP'
  | 'SWIPE_DOWN'
  | 'SWIPE_LEFT'
  | 'SWIPE_RIGHT';

export type GestureContainerProps = {
  children: ReactElement;
  onSwipeUp?: (gestureState: PanResponderGestureState) => void;
  onSwipeDown?: (gestureState: PanResponderGestureState) => void;
  onSwipeLeft?: (gestureState: PanResponderGestureState) => void;
  onSwipeRight?: (gestureState: PanResponderGestureState) => void;
  velocityThreshold?: number;
  directionalOffsetThreshold?: number;
};

export type GestureHandler = (gestureState: PanResponderGestureState) => void;
