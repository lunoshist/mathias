import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

function NavBar() {
  const navigation = useNavigation();
  const [activeIcon, setActiveIcon] = useState('Home');

  const navigateAndSetActive = (screenName) => {
    setActiveIcon(screenName);
    navigation.navigate(screenName);
  };

  return (
    <View style={styles.navBar}>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeIcon === 'Home' && { backgroundColor: 'rgba(251, 219, 177, 1)' },
        ]}
        onPress={() => navigateAndSetActive('Home')}
      >
        <Icon
          name="home"
          size={36}
          color={activeIcon === 'Home' ? '#fff' : 'rgba(53, 61, 101, 1)'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeIcon === 'Repertoire' && { backgroundColor: 'rgba(251, 219, 177, 1)' },
        ]}
        onPress={() => navigateAndSetActive('Repertoire')}
      >
        <Icon
          name="book-open"
          size={36}
          color={activeIcon === 'Repertoire' ? '#fff' : 'rgba(53, 61, 101, 1)'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeIcon === 'Vote' && { backgroundColor: 'rgba(251, 219, 177, 1)' },
        ]}
        onPress={() => navigateAndSetActive('Vote')}
      >
        <Icon
          name="edit"
          size={36}
          color={activeIcon === 'Vote' ? '#fff' : 'rgba(53, 61, 101, 1)'}
        />
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.navItem,
          activeIcon === 'Profil' && { backgroundColor: 'rgba(251, 219, 177, 1)' },
        ]}
        onPress={() => navigateAndSetActive('Profil')}
      >
        <Icon
          name="user"
          size={36}
          color={activeIcon === 'Profil' ? '#fff' : 'rgba(53, 61, 101, 1)'}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: 80,
    marginBottom: 25,
  },
  navItem: {
    padding: 10,
    borderRadius: 15,
    backgroundColor: 'transparent',
  },
});

export default NavBar;