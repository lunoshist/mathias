import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RectangleComponent from './RectangleComponent'; 

const YourComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.Component3}>
        <TouchableOpacity onPress={() => console.log('Posts clicked')}>
          <Text style={styles.Posts}>Posts</Text>
        </TouchableOpacity>
        <View style={styles.Group24}>
          <RectangleComponent /> 
          <Text style={styles.MesActions}>Mes Actions</Text>
        </View>
        <TouchableOpacity onPress={() => console.log('Votes clicked')}>
          <Text style={styles.Votes}>Votes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => console.log('Sondages clicked')}>
          <Text style={styles.Sondages}>Sondages</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 35
  },
  Component3: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  Posts: {
    left: 12,
    top: 36,
    position: 'absolute',
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    width: '100%',
  },
  Group24: {
    width: 340,
    height: 29,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  MesActions: {
    left: 12,
    top: 5,
    position: 'absolute',
    color: '#FBDBB1',
    fontSize: 15,
    fontWeight: '600',
    width: '100%',
  },
  Votes: {
    left: 12,
    top: 68,
    position: 'absolute',
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    width: '100%',
  },
  Sondages: {
    left: 12,
    top: 98,
    position: 'absolute',
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    width: '100%',
  },
});

export default YourComponent;