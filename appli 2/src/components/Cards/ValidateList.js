import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';   
import { v4 as uuidv4 } from 'uuid';
import Validate from './Validate';
import 'react-native-url-polyfill/auto';
import { supabase } from '../../../supabase/supabase';



const ValidateList = () => {

  const [data, setData] = useState([]);

  const getNews = async () => {
    try {
      const { data: polls, error } = await supabase.from('Traduit').select('*');
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

  return (
    <View >
      {data.map((item) => (
        <Validate
          key={uuidv4()} //identitfiant unique
          title={item.NomProjet}
          place={item.Adresse}
          description={item.DescriptionCourte}
          type={item.NomDépartement}
        />
      ))}
    </View>
  );
};

export default ValidateList;