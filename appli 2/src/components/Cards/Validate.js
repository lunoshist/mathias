import React from 'react';
import { View, Text, Image } from 'react-native';

const styles = {
  articleContainer: {
    width: 350,
    padding: 20,
    margin: 20,
    backgroundColor: '#F1F2F7',
    borderRadius: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    display: 'flex',
  },
  userContainer: {
    alignSelf: 'stretch',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 15,
    display: 'flex',
    flexDirection: 'row'
  },
  userpicContainer: {
    width: 42,
    height: 42,
    position: 'relative',
  },
  userpic: {
    width: 42,
    height: 42,
    left: 0,
    top: 0,
    borderRadius: 50,
    position: 'absolute',
  },
  textContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    gap: 2,
    display: 'flex',
  },
  nom: {
    color: '#FF5E5E',
    fontSize: 20,
  },
  date: {
    color: '#979797',
    fontSize: 10,
  },
  titreContainer: {
    width: 310,
    height: 100,
    position: 'relative',
  },
  titre: {
    width: 310,
    left: 0,
    top: 0,
    position: 'absolute',
    color: 'black',
    fontSize: 16,
  },
  description: {
    width: 310,
    left: 0,
    top: 31,
    position: 'absolute',
    color: 'black',
    fontSize: 12,
  },
  frame4Container: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'flex-end',
    gap: 20,
    display: 'flex',
    flexDirection: 'column',
  },
  groupContainer: {
    width: 135,
    height: 70,
    position: 'relative',
  },
  image: {
    width: 135,
    height: 70,
    left: 0,
    top: 0,
    position: 'absolute',
    borderRadius: 10,
  },
  groupTitre: {
    left: 51,
    top: 23,
    position: 'absolute',
    color: 'black',
    fontSize: 16,
  },
  valide: {
    left: 310,
    top: 50,
    zIndex: 1000,
    position: 'absolute',
    color: '#353D65',
    transform: [{ rotate: '45deg' }],
    fontWeight: 700,
  },
};

const Validate = ({ title, place, description, type }) => {
  return (
    <View>
        <Text style={styles.valide}>VALIDÉ</Text>
        <View style={styles.articleContainer}>
            <View style={styles.userContainer}>
                <View style={styles.userpicContainer}>
                <Image
                    style={styles.userpic}
                    source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Mairie_XXe_Arrondissement_-_Paris_XX_%28FR75%29_-_2021-04-26_-_3.jpg/1200px-Mairie_XXe_Arrondissement_-_Paris_XX_%28FR75%29_-_2021-04-26_-_3.jpg' }}
                />
                </View>
                <View style={styles.textContainer}>
                <Text style={styles.nom}>MAIRIE</Text>
                <Text style={styles.date}>{type}</Text>
                </View>
            </View>
            <View style={styles.titreContainer}>
                <Text numberOfLines={1} style={styles.titre}>{title}</Text>
                <Text numberOfLines={4} style={styles.description}>{description}</Text>
            </View>
        </View>
    </View>
  );
};




export default Validate;