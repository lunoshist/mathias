import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const styles = {
    option: {
        width: 310,
        padding: 20,
        borderRadius: 10,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
        display: 'flex',
        backgroundColor: '#FBDBB1',
      },
}

const Option = ({ opt, score, number, onOptionChoose }) => {
    return (
        <TouchableOpacity style={styles.option} onPress={() => onOptionChoose(opt, score, number) }>
            <Text>{opt}
            </Text>
        </TouchableOpacity>
    )
}

export default Option;