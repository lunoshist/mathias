import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundedButton = ({ onPress, text, buttonColor }) => {
  return (
    <TouchableOpacity
      style={[styles.roundedButton, { backgroundColor: buttonColor }]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  roundedButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    maxWidth: 120
  },
  buttonText: {
    color: '#353D65',
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RoundedButton;
