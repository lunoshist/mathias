import React, { useState, useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Option from '../Buttons/Option';
import { v4 as uuidv4 } from 'uuid';

import 'react-native-url-polyfill/auto';
import { supabase } from '../../../supabase/supabase';

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
    alignItems: 'flex-start',
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
};

const Article = ({ title, date, description, option, vote, totalVote, scoreList }) => {
  const newDate = new Date(date)
  const [percentages, setPercentages] = useState(option.map(() => 100));
  const [clicked, setClicked] = useState(false);

  console.log(`${title}:`,totalVote);
  

  const optionChoose = async (opt, score, number) => {
    setClicked(true);

    const scoreid = `score_${number}`;
    const optionid = `option_${number}`;
    const newScore = score + 1
  
    const { data, error } = await supabase
      .from(vote)
      .update({ [scoreid]: newScore }) // Use square brackets to set the dynamic column name
      .eq(optionid, opt)
      .select();

    const totalVotes = scoreList.reduce((acc, cur) => acc + cur, 0);
    const newPercentages = scoreList.map((score, index) => ((score / totalVotes) * 100).toFixed(0));
    setPercentages(newPercentages);

    console.info(scoreid, optionid, newScore, data);
  };
  

  return (
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
          <Text style={styles.date}>{newDate.toLocaleDateString('FR')}</Text>
        </View>
      </View>
      <View style={styles.titreContainer}>
        <Text style={styles.titre}>{title}</Text>
        <Text numberOfLines={4} style={styles.description}>{description}</Text>
      </View>
      <View style={styles.frame4Container}>
        {option.map((item, index) => {
          if (item.opt !== null) {
            return <Option 
              key={uuidv4()} 
              opt={item.opt} 
              score={item.score} 
              number={item.num}
              percentage={percentages[index]}
              onOptionChoose={optionChoose}
              clicked={clicked}/>;
          } else {
            return null;
          }
        })}
      </View>
    </View>
  );
};




export default Article;
