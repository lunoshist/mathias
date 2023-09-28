import React, { useState } from 'react';
import { StyleSheet, View, Text, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import TextClickable from './CliquableTextComponent';


const CustomComponent4 = () => {
    return (
      <View style={styles.container}>
        <View style={styles.component1}>
          <View style={styles.mesDocuments}>
          <TextClickable>
            <Text style={styles.text}>Mes Documents</Text>
          </TextClickable>
          </View>
          <View style={styles.group27}>
            <View style={styles.rectangle52} />
            <View style={styles.rectangle53} />          
            <Text style={styles.aide}>Aide</Text>
          </View>
          <View style={styles.cgu}>
          <TextClickable>
            <Text style={styles.text}>CGU</Text>
          </TextClickable>
          </View>
        </View>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: -65
    },
    component1: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    mesDocuments: {
      left: 12,
      top: 36,
      position: 'absolute',
    },
    group27: {
      width: 340,
      height: 29,
      left: 0,
      top: 0,
      position: 'absolute',
    },
    rectangle52: {
      width: 340,
      height: 29,
      left: 0,
      top: 0,
      position: 'absolute',
      backgroundColor: '#353D65',
      borderRadius: 5,
    },
    rectangle53: {
      width: 340,
      height: 29,
      left: 0,
      top: 0,
      position: 'absolute',
      backgroundColor: '#353D65',
      borderRadius: 5,
    },
    aide: {
      left: 12,
      top: 5,
      position: 'absolute',
      color: '#FBDBB1',
      fontSize: 15,
      fontWeight: '600',
    },
    cgu: {
      left: 12,
      top: 68,
      position: 'absolute',
    },
    text: {
      color: 'black',
      fontSize: 15,
      fontWeight: '500',
    },
  });
  
  export default CustomComponent4;