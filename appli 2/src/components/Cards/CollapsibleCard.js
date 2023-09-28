import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';


const CardCollapse = ({ title, preview, fullText, imageSource }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => setIsCollapsed(!isCollapsed)}
        style={styles.cardHeader}
      >
        <Image source={imageSource} style={styles.cardImage} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardTitle}>{title}</Text>
          {isCollapsed ? (
            <Text style={styles.cardPreview}>{preview}</Text>
          ) : null}
        </View>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
        <Text style={styles.cardFullText}>{fullText}</Text>
      </Collapsible>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#D8D8D8',
    borderRadius: 10,
    margin: 10,
    padding: 10,
    width: screenWidth * 0.9,
    zIndex: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    borderColor: 'grey',
    paddingBottom: 5,
    alignItems: 'center',
  },
  cardImage: {
    width: 125,
    height: 111,
  },
  cardInfo: {
    display: 'flex',
    marginLeft: 20,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
    color: '#353D65'
  },
  cardPreview: {
    marginTop: 10,
    maxHeight: 100, // Set a maximum height for the preview
    overflow: 'hidden',
  },
  cardFullText: {
    marginTop: 10,
  },
});

export default CardCollapse;
