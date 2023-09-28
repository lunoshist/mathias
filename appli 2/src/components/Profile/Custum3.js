import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';

// Importez vos images PNG ici
import anonymeIcon from '../../assets/Images/iconanony.png';
import darkmodeIcon from '../../assets/Images/IconMoon.png';

const CustomComponent3 = () => {
  const [anonymeEnabled, setAnonymeEnabled] = useState(false);
  const [darkmodeEnabled, setDarkmodeEnabled] = useState(false);

  const toggleAnonyme = () => {
    setAnonymeEnabled(!anonymeEnabled);
  };

  const toggleDarkmode = () => {
    setDarkmodeEnabled(!darkmodeEnabled);
  };

  return (
    <View style={styles.container}>
      <View style={styles.component5}>
        <View style={styles.group26}>
          <View style={styles.rectangle51} />
          <Text style={styles.preferences}>Préférences</Text>
        </View>

        <View style={styles.anonyme}>
          {/* Ajoutez l'icône Anonyme ici */}
          <Image source={anonymeIcon} style={styles.icon} />
          <Text style={styles.text}>Anonyme</Text>
          <TouchableOpacity onPress={toggleAnonyme} style={styles.toggle}>
            <View
              style={[
                styles.toggleSwitch,
                anonymeEnabled ? styles.toggleSwitchOn : styles.toggleSwitchOff,
              ]}
            >
              <View
                style={[
                  styles.toggleSwitchButton,
                  anonymeEnabled ? styles.toggleSwitchButtonOn : styles.toggleSwitchButtonOff,
                ]}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.darkmode}>
          {/* Ajoutez l'icône Darkmode ici */}
          <Image source={darkmodeIcon} style={styles.icon} />
          <Text style={styles.text}>Darkmode</Text>
          <TouchableOpacity onPress={toggleDarkmode} style={styles.toggle}>
            <View
              style={[
                styles.toggleSwitch,
                darkmodeEnabled ? styles.toggleSwitchOn : styles.toggleSwitchOff,
              ]}
            >
              <View
                style={[
                  styles.toggleSwitchButton,
                  darkmodeEnabled ? styles.toggleSwitchButtonOn : styles.toggleSwitchButtonOff,
                ]}
              />
            </View>
          </TouchableOpacity>
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
    marginTop: -50
  },
  component5: {
    width: '100%',
    height: '100%',
    position: 'relative',
    marginTop: 20, // Espace en haut
  },
  group26: {
    width: 340,
    height: 29,
    left: 0,
    top: 0,
    position: 'absolute',
  },
  rectangle51: {
    width: 340,
    height: 29,
    left: 0,
    top: 0,
    position: 'absolute',
    backgroundColor: '#353D65',
    borderRadius: 5,
  },
  preferences: {
    left: 12,
    top: 5,
    position: 'absolute',
    color: '#FBDBB1',
    fontSize: 15,
    fontWeight: '600',
  },
  anonyme: {
    left: 12,
    top: 5,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20, // Espace entre "Preferences" et "Anonyme"
  },
  darkmode: {
    left: 12,
    top: 37,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 25, // Espace entre "Anonyme" et "Darkmode"
  },
  text: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    marginLeft: 15, // Ajustez la marge gauche pour définir l'espace entre le texte et l'icône
  },
  toggle: {
    marginLeft: 100, // Espace entre le texte et le bouton de commutation
    marginTop: 20,
  },
  toggleSwitch: {
    width: 60,
    height: 30,
    borderRadius: 15,
    padding: 2,
    backgroundColor: '#e4e4e4',
    justifyContent: 'center',
  },
  toggleSwitchButton: {
    width: 26,
    height: 26,
    borderRadius: 13,
  },
  toggleSwitchOn: {
    backgroundColor: '#4CAF50',
  },
  toggleSwitchOff: {
    backgroundColor: '#ccc',
  },
  toggleSwitchButtonOn: {
    transform: [{ translateX: 30 }],
    backgroundColor: '#fff',
  },
  toggleSwitchButtonOff: {
    backgroundColor: '#fff',
  },
  icon: {
    width: 25, // Ajustez la taille de l'icône selon vos besoins
    height: 25, // Ajustez la taille de l'icône selon vos besoins
    marginRight: 15, // Espace entre l'icône et le texte
  },
});

export default CustomComponent3;
