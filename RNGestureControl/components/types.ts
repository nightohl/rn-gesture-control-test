export type SwipeDirections =
  | 'SWIPE_UP'
  | 'SWIPE_DOWN'
  | 'SWIPE_LEFT'
  | 'SWIPE_RIGHT';

export type GestureState = {
  _accountsForMovesUpTo: number;
  dx: number;
  dy: number;
  moveX: number;
  moveY: number;
  numberActiveTouches: number;
  stateID: number;
  vx: number;
  vy: number;
  x0: number;
  y0: number;
};
