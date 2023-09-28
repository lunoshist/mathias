import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const styles = {
  option: {
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FBDBB1',
    width: '100%',
  },
};

const Option = ({ opt, score, number, percentage, onOptionChoose, clicked }) => {
  return (
    <TouchableOpacity
      style={[styles.option, { width: `${percentage}%` }]}
      onPress={() => onOptionChoose(opt, score, number)}
    >
      <Text>{opt}</Text>
      {clicked && <Text>{` - ${percentage}%`}</Text>}
    </TouchableOpacity>
  );
};

export default Option;
