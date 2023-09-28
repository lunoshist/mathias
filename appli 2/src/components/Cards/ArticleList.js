import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';   
import { v4 as uuidv4 } from 'uuid';
import Article from './Article';

const ArticleList = ({ data }) => {
  return (
    <View >
      {data.map((item) => (
        <Article
          key={uuidv4()} //identitfiant unique
          title={item.title}
          date={item.date}
          vote={item.vote}
          description={item.description}
          option={[{"opt": item.option_1, "score": item.score_1, "num": 1}, {"opt": item.option_2, "score": item.score_2, "num": 2}, {"opt": item.option_3, "score": item.score_3, "num": 3}, {"opt": item.option_4, "score": item.score_4, "num": 4}, {"opt": item.option_5, "score": item.score_5, "num": 5}]}
        />
      ))}
    </View>
  );
};

export default ArticleList;