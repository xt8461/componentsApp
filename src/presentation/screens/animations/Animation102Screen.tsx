import React, {useRef} from 'react';
import {Animated, PanResponder, StyleSheet} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../../../config/theme/theme';

const Animation102Screen = () => {
  const position = useRef(new Animated.ValueXY()).current;

  const positionResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: position.x,
        dy: position.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(position, {
        toValue: {x: 0, y: 0},
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <Animated.View
          {...positionResponder.panHandlers}
          style={[position.getLayout(), styles.box]}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: colors.primary,
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default Animation102Screen;
