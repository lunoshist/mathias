import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import ArticleList from '../../components/Cards/ArticleList.js';
import ValidateList from '../../components/Cards/ValidateList.js';
import Swytch from '../../components/Buttons/Swytch.js';

import 'react-native-url-polyfill/auto';
import { supabase } from '../../../supabase/supabase.js';

export default function VoteScreen({navigation}) {

  const [data, setData] = useState([]);
  const [vote, setVote] = useState('polls');

  const getNews = async () => {
    try {
      const { data: polls, error } = await supabase.from('polls').select('*');
      if (!error) {
        setData(polls);
      } else {
        console.warn(error)
      }
    } catch (error) {
      console.warn(error)
    }
  };

  useEffect(() => {
    // Appelez la fonction getNews lorsque le composant est monté
    getNews();
  }, []);

  const toggle = async (newState) => {
    if (vote != newState) {
      setVote(newState)

      try {
        const { data: article, error } = await supabase.from(vote).select('*');
        if (!error) {
          setData(article);
        } else {
          console.warn(error)
        }
      } catch (error) {
        console.warn(error)
      }
    }    
  };

  return (
    <View style={styles.container}>
        <ScrollView>
          <Swytch onToggle={toggle} />
          <ArticleList data={data} />
          <ValidateList />
        </ScrollView>
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
});
