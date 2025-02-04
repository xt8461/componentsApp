import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../../config/theme/theme';

const ButtonScreen = () => {
  return (
    <View style={styles.container}>
        <Text>ButtonScreen</Text>
    </View>
  );
};

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


export default ButtonScreen;