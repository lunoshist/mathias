import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons'; // You might need to install this package

const SearchBar = ({ onSearch, onLeaveSearchBar }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    onSearch(searchText);
  };

  const handleBlur = () => {
    // Reset filters when the user leaves the search bar
    onLeaveSearchBar();
  };

  const handleChangeText = (text) => {
    // Update searchText as the user types
    setSearchText(text);
    // Trigger the search function
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Recherchez des news, posts ..."
          placeholderTextColor="#6F6F6F"
          onChangeText={handleChangeText} // Updated onChangeText event handler
          onBlur={handleBlur}
          value={searchText}
          clearButtonMode='always'
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <FontAwesome5 name="search" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 340,
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    marginTop: 55
  },
  inputContainer: {
    flex: 1,
    height: 36.75,
    borderRadius: 10,
    borderColor: '#E6E6E6',
    borderWidth: 1,
  },
  input: {
    flex: 1,
    paddingHorizontal: 8,
    fontSize: 15,
    color: '#6F6F6F',
    fontWeight: '400',
  },
  button: {
    width: 30,
    height: 30,
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  icon: {
    color: '#353D65',
    fontSize: 20,
    fontWeight: '900',
  },
});

export default SearchBar;
