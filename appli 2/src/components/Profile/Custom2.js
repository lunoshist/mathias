import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import RectangleComponent from './RectangleComponent';

// Importez votre image PNG ici
import votreImage from '../../assets/Images/iconbaxy.png';

const MyComponent = () => {
  return (
    <View style={styles.container}>
      <View style={styles.group25}>
        <RectangleComponent backgroundColor="#353D65" />
        <Text style={styles.news}>News</Text>
        <View style={styles.telechargerContainer}>
          {/* Utilisez la balise Image pour afficher votre image */}
          <Image source={votreImage} style={styles.image} />
          <TouchableOpacity
            onPress={() => {
              // Mettez ici le code que vous souhaitez exécuter lorsque "Télécharger" est cliqué
              console.log("Téléchargement cliqué");
            }}
          >
            <Text style={styles.telecharger}>Télécharger</Text>
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
    marginTop: -130
  },
  group25: {
    width: 340,
    height: 66,
    position: 'relative',
    marginTop: 5
  },
  news: {
    color: '#FBDBB1',
    fontSize: 15,
    fontWeight: '600',
    position: 'absolute',
    top: 5,
    left: 12,
  },
  telechargerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    left: 12,
    bottom: 0,
  },
  telecharger: {
    color: 'black',
    fontSize: 15,
    fontWeight: '500',
    marginRight: 10,
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default MyComponent;