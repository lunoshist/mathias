import React from 'react';
import { StatusBar, Image, ScrollView } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function Vote()  {
  return (
    <View style={styles.container}>
      {/* Bloc bleu avec du texte à l'intérieur */}
      <View style={styles.blueBox}>
        <Text style={styles.blueBoxText}>Le dernier vote :</Text>
        <Text style={styles.blue1BoxText}>Pour ou contre un parc ?</Text>
        <View style={styles.percentageContainer}>
          <Text style={styles.percentageText}>85%</Text>
          <Text style={styles.percentageText}>-</Text>
          <Text style={styles.percentageText}>15%</Text>
        </View>
      </View>

      {/* Carrousel */}
      <ScrollView horizontal pagingEnabled>
        <View style={styles.grayBox}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://cdn-s-www.dna.fr/images/94D01573-0320-4F82-A661-C364FC9DA93A/NW_raw/mickael-benoist-se-trouve-a-la-tete-d-une-equipe-de-80-personnes-document-remis-1675243273.jpg' }} // Remplacez par l'URL de votre image de profil
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.mairieText}>Mairie</Text>
              <Text style={styles.dateText}>Date : 30/08/23</Text>
            </View>
          </View>
          <Text style={styles.descriptionText}>Amélioration de la sécurité publique : Investissement dans des systèmes de sécurité modernes, des caméras de surveillance et des programmes de prévention de la criminalité.</Text>
          <Image
            source={{ uri: 'https://france3-regions.francetvinfo.fr/image/vkiFHY5vkvbeUYeX4GzdGQ7kKN8/600x400/regions/2023/03/30/64257ce4a29dc_maxnewsworldtwo238746.jpg' }} // Remplacez par l'URL de votre autre image
            style={styles.descriptionImage}
          />
        </View>

        <View style={styles.grayBox}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://cdn-s-www.dna.fr/images/94D01573-0320-4F82-A661-C364FC9DA93A/NW_raw/mickael-benoist-se-trouve-a-la-tete-d-une-equipe-de-80-personnes-document-remis-1675243273.jpg'}} // Remplacez par l'URL de votre image de profil
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.mairieText}>Mairie</Text>
              <Text style={styles.dateText}>Date : 31/08/23</Text>
            </View>
          </View>
          <Text style={styles.descriptionText}>Infrastructures cyclables: Aménagement des pistes cyclables sécurisées et des stations de vélos en libre-service pour encourager l'utilisation du vélo comme moyen de transport.</Text>
          <Image
            source={{ uri: 'https://www.codeenpoche.fr/static/3f6b5e65eec682846b45ade63d397667/f755c/bande_cyclable2.jpg' }} // Remplacez par l'URL de votre autre image
            style={styles.descriptionImage}
          />
        </View>

        <View style={styles.grayBox}>
          <View style={styles.profileContainer}>
            <Image
              source={{ uri: 'https://cdn-s-www.dna.fr/images/94D01573-0320-4F82-A661-C364FC9DA93A/NW_raw/mickael-benoist-se-trouve-a-la-tete-d-une-equipe-de-80-personnes-document-remis-1675243273.jpg'}} // Remplacez par l'URL de votre image de profil
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.mairieText}>Mairie</Text>
              <Text style={styles.dateText}>Date : 01/09/23</Text>
            </View>
          </View>
          <Text style={styles.descriptionText}>Programmes de recyclage : Mise en place des programmes de recyclage efficaces pour réduire la quantité de déchets envoyée en décharge.</Text>
          <Image
            source={{ uri: 'https://www.geneve.ch/sites/default/files/fileadmin/public/images/themes_et_demarches/environnement_urbain_et_espaces_verts/environnement-tri-recyclage-dechets-menager-geneve-rubrique.jpg' }} // Remplacez par l'URL de votre autre image
            style={styles.descriptionImage}
          />
        </View>
      </ScrollView>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  blueBox: {
    backgroundColor: '#353D65',
    width: 282,
    padding: 30,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
    marginRight: 56, // Espacement entre les éléments du carrousel
    marginLeft:55,
  },
  blueBoxText: {
    fontSize: 16,
    color: '#FBDBB1',
  },
  blue1BoxText: {
    fontSize: 16,
    color: 'white',
    marginTop: 10,
  },
  percentageContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  percentageText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
    color: "#ffff",
  },
  grayBox: {
    backgroundColor: '#D8D8D8',
    width: 350,
    height: 368,
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginRight: 22, // Espacement entre les éléments du carrousel
    marginLeft:21,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: "center",
    marginRight: 50,
    justifyContent: 'flex-start',
    marginBottom: 35,
  },
  profileImage: {
    width: 42,
    height: 42,
    borderRadius: 50,
  },
  mairieText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  dateText: {
    fontSize: 16,
    marginLeft: 10,
  },
  descriptionText: {
    fontSize: 16,
    marginBottom: 20,
  },
  descriptionImage: {
    width: 246,
    height: 125,
    borderRadius: 10,
  },
});
