import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ImportFrame = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Text style={styles.title}>Importer une pièce d'identité</Text>
        <View style={styles.rectangle}>
          {/* Croix grise au milieu */}
          <View style={styles.cross}>
            <View style={styles.horizontalLine} />
            <View style={styles.verticalLine} />
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.title}>Importer un justificatif d'identité</Text>
        <View style={styles.rectangle}>
          {/* Croix grise au milieu */}
          <View style={styles.cross}>
            <View style={styles.horizontalLine} />
            <View style={styles.verticalLine} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start', // Alignement du titre à gauche
  },
  section: {
    marginBottom: 50, // Espace entre les sections
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10, // Espace entre le titre et le carré
  },
  rectangle: {
    backgroundColor: 'rgba(238, 245, 255, 1)',
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 1)',
    borderRadius: 20,
    width: 330,
    height: 131,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cross: {
    width: 40,
    height: 40,
    position: 'relative',
  },
  horizontalLine: {
    position: 'absolute',
    backgroundColor: 'gray',
    height: 2,
    width: '100%',
    top: '50%',
    transform: [{ translateY: -1 }],
  },
  verticalLine: {
    position: 'absolute',
    backgroundColor: 'gray',
    width: 2,
    height: '100%',
    left: '50%',
    transform: [{ translateX: -1 }],
  },
});

export default ImportFrame;
