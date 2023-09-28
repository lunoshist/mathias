import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Vote from '../../components/Cards/Vote';

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.frame}>
      <Image source={require('../../assets/Images/Baxy.png')} style={styles.baxy} />
      <Vote/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  frame: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: 390,
    height: 844,
    justifyContent: 'flex-start',
    padding: 0,
    overflow: 'hidden',
  },
  baxy: {
    marginTop:100,
    height: 96,
    width: 250,
    marginBottom:20,
  },
});
