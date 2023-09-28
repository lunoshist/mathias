import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

// Importez l'image en utilisant require
const customImage = require('../../assets/Images/profile.png');

const CustomImageComponent = () => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={customImage} // Utilisez l'image importée ici
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: 122,
    height: 122,
    borderRadius: 9999,
    borderWidth: 5,
    borderColor: '#353D65',
    overflow: 'hidden',
    margin: 15,
    marginTop: 30,
  },
  image: {
    flex: 1,
    width: null,
    height: null,
    resizeMode: 'cover',
  },
});

export default CustomImageComponent;
