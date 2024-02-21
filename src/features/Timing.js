import React, { useState } from 'react';
import { View, Text, StyleSheet, Vibration } from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { Countdown } from '../components/Countdown';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes';
import { colors } from '../utils/colors';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxxl}
          title="10"
          onPress={() => {
            onChangeTime(10);
          }}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxxl}
          title="15"
          onPress={() => {
            onChangeTime(15);
          }}
        />
      </View>
      <View style={styles.timingButton}>
        <RoundedButton
          size={spacing.xxxl}
          title="20"
          onPress={() => {
            onChangeTime(20);
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
