import React from 'react';
import { View, Text, Image, StyleSheet, Button } from 'react-native';
import BoutonConnecterComponent from '../../components/Buttons/BouttonStart';
import Imgconnexion1Image from '../../assets/Images/imgconnexion.png';



export default function Frame1({navigation}) {

  return (
    <View style={styles.frame}>
      <Image source={Imgconnexion1Image} style={styles.imgconnexion1} />
      <Text style={styles.bonjourText}>Bonjour !</Text> 
      <Text style={styles.quartierText}>Engagez vous pour votre quartier</Text>
      <View style={styles.buttonContainer}>
        <BoutonConnecterComponent navigation={navigation}/>

      </View>
    </View>
  );    
}

const styles = StyleSheet.create({
  frame: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    boxShadow: '4px 4px 20px rgba(0, 0, 0, 0.15)',
    display: 'flex',
    flexDirection: 'row',
    width: 390,
    height: 851,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    padding: 0,
    overflow: 'hidden',
  },
  bonjourText: {
    textAlign: 'left',
    color: 'rgba(0, 0, 0, 1)',
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 40,
    letterSpacing: 0,
    textDecorationLine: 'none',
    textTransform: 'none',
    position: 'absolute',
    left: 107,
    top: 426,
  },
  quartierText: {
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 1)',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: 24,
    letterSpacing: 0,
    textDecorationLine: 'none',
    textTransform: 'none',
    position: 'absolute',
    left: 19,
    top: 485,
  },
  imgconnexion1: {
    height: 337,
    width: 390,
    resizeMode: 'cover',
    position: 'absolute',
    left: 0,
    top: 65,
  },
  buttonContainer: {
    position:"relative",
    left:-50,
    top: 600,
  },
});