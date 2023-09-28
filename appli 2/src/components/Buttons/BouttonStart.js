import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BoutonConnecterComponent = (props) => {
  return (
    <TouchableOpacity style={styles.boutonConnecter} onPress={() => props.navigation.navigate("Inscription")}>
      <Text style={styles.seConnecter}>Se connecter</Text>
      <View style={styles.signUp}>
        <Text style={styles.sInscrire}>S'inscrire</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  boutonConnecter: {
    backgroundColor: 'rgba(238, 245, 255, 1)',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 20,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '21px 55px 21px 60px',
    width: 300,
    height: 51,
    left: 115,
    top: 3,
  },
  seConnecter: {
    textAlign: 'left',
    fontSynthesis: 'none',
    color: 'rgba(53, 61, 101, 1)',
    fontStyle: 'normal',
    // fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 0,
    textDecorationLine: 'none',
    textTransform: 'none',
    margin: 0,
    left: 60,
  },
  signUp: {
    backgroundColor: 'rgba(53, 61, 101, 1)',
    boxShadow: '-2px 3px 30px rgba(15, 76, 84, 0.3)',
    borderRadius: 20,
    display: 'flex',
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '21px 57px',
    boxSizing: 'border-box',
    width: 151,
    height: 57,
    left: -12,
    top: 0,
  },
  sInscrire: {
    textAlign: 'left',
    fontSynthesis: 'none',
    color: 'rgba(251, 219, 177, 1)',
    fontStyle: 'normal',
    // fontFamily: 'Poppins',
    fontWeight: '600',
    fontSize: 20,
    letterSpacing: 0,
    textDecorationLine: 'none',
    textTransform: 'none',
    margin: 0,
  },
});

export default BoutonConnecterComponent;