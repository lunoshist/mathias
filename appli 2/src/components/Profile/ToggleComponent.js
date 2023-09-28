import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

const AppleStyleToggle = () => {
  // État local pour suivre si l'interrupteur est activé ou désactivé
  const [isEnabled, setIsEnabled] = useState(false);

  // Fonction pour basculer l'état de l'interrupteur entre activé et désactivé
  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
  };

  return (
    <View style={styles.container}>
      {/* Élément texte pour une étiquette (peut être utilisé pour ajouter un label) */}
      <Text style={styles.label}></Text>
      <View style={styles.switchContainer}>
        {/* Composant Switch (interrupteur) pour l'interaction utilisateur */}
        <Switch
          trackColor={{ false: "#767577", true: "#FBDBB1" }} // Couleurs de la piste de l'interrupteur
          thumbColor={isEnabled ? "#353D65" : "#353D65"} // Couleur du bouton de l'interrupteur
          ios_backgroundColor="#353D65" // Couleur de fond spécifique à iOS lorsque désactivé
          onValueChange={toggleSwitch} // Appelé lorsque l'interrupteur est basculé
          value={isEnabled} // Valeur actuelle de l'interrupteur
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Disposition horizontale des éléments
    alignItems: 'center', // Alignement vertical au centre
    padding: 16, // Espacement intérieur
  },
  label: {
    flex: 1, // Occupe autant d'espace que possible (pourrait être utilisé pour une étiquette)
    fontSize: 15, // Taille de police du texte
  },
  switchContainer: {
    transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }], // Échelle pour agrandir l'interrupteur
  },
});

export default AppleStyleToggle;
