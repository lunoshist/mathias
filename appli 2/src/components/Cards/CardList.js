import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import CardCollapse from './CollapsibleCard';
import { v4 as uuidv4 } from 'uuid';
import park from '../../assets/repertoire/park.png'

const CardList = ({ data }) => {
  return (
    <View style={styles.cardListContainer}>
      {data.map((news) => (
        <CardCollapse
          key={uuidv4()} // Identitfiant unique
          title={news.title}
          preview={news.preview}
          fullText={news.fullText}
          imageSource={park}
        >
        </CardCollapse>
        
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  cardListContainer: {
    marginTop: 0,
    zIndex: 1
  },
  image: {
    width: 200,
    height: 200,
  },
});

export default CardList;
