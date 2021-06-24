import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

import GestureContainer from './GestureContainer';

const summary = require('../images/Summary.png');
const editImg = require('../images/Edit.png');
const deleteImg = require('../images/Delete.png');

export default function GestureExm() {
  const [isLeft, setIsLeft] = useState(false);

  const onLeft = () => {
    setIsLeft(true);
    console.log('left');
  };

  const onRight = () => {
    setIsLeft(false);
    console.log('right');
  };

  const onEdit = () => {
    console.log('수정 누름');
  };
  const onDelete = () => {
    console.log('삭제 누름');
  };

  return (
    <GestureContainer onSwipeLeft={onLeft} onSwipeRight={onRight}>
      <View style={{flexDirection: 'row', width: '100%', padding: 10}}>
        <View style={[styles.summary, isLeft && styles.left]}>
          <Image source={summary} />
        </View>
        {isLeft && (
          <>
            <Pressable style={styles.edit} onPress={onEdit}>
              <Image source={editImg} />
              <Text style={styles.buttonText}>수정</Text>
            </Pressable>
            <Pressable style={styles.delete} onPress={onDelete}>
              <Image source={deleteImg} />
              <Text style={styles.buttonText}>삭제</Text>
            </Pressable>
          </>
        )}
      </View>
    </GestureContainer>
  );
}

const styles = StyleSheet.create({
  summary: {
    zIndex: 3,
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
  },
  edit: {
    backgroundColor: '#A8A7B5',
    marginLeft: -8,
    zIndex: 1,
    padding: 10,
    paddingLeft: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  delete: {
    backgroundColor: '#E00C3E',
    marginLeft: -8,
    zIndex: 0,
    padding: 10,
    paddingLeft: 15,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    justifyContent: 'center',
  },
  left: {marginLeft: -40},
  buttonText: {color: 'white', fontSize: 14, fontWeight: '600', marginTop: 6},
});
