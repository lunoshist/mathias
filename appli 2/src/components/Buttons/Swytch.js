import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Switch } from 'react-native';

const Swytch = ({ onToggle }) => {
    return (
    <View style={{margin: 20, marginTop: 50}}>
        <View style={styles.frame4Container}>
            <TouchableOpacity style={styles.groupContainer} onPress={() => onToggle('vote')}>
                <View style={{width: 135, height: 70, backgroundColor: '#F1F2F7', borderRadius: 10}} />
                <Text style={styles.groupTitre}>polls</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.groupContainer} onPress={() => onToggle('polls')}>
                <View style={{width: 135, height: 70, backgroundColor: '#F1F2F7', borderRadius: 10}} />
                <Text style={styles.groupTitre}>vote</Text>
            </TouchableOpacity>            
        </View>
    </View>)
}

const styles = StyleSheet.create({
    frame4Container: {
        alignSelf: 'stretch',
        justifyContent: 'center',
        alignItems: 'flex-end',
        gap: 20,
        display: 'flex',
        flexDirection: 'row',
      },
      groupContainer: {
        width: 135,
        height: 70,
        position: 'relative',
      },
      groupTitre: {
        left: 51,
        top: 23,
        position: 'absolute',
        color: 'black',
        fontSize: 16,
      },
})

export default Swytch;