/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Animated,
  Easing,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../../../config/theme/theme';
import useAnimation from '../../hooks/useAnimation';

const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.purpleBox,
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(2),
            duration: 700,
          });
        }}
        style={{marginTop: 12}}>
        <Text>Fade In</Text>
      </Pressable>
      <Pressable
        onPress={() => {
          fadeOut({});
        }}
        style={{marginTop: 12}}>
        <Text>Fade out</Text>
      </Pressable>
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});
