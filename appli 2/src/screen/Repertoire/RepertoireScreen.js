import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import SearchBar from '../../components/Searchbar/SearchBar.js';
import CardList from '../../components/Cards/CardList.js';
import RoundedButton from '../../components/Buttons/RoundedButton.js';
import NewPostPopup from '../../components/Popup/NewPostPopup.js';
import FilterDropdown from '../../components/Filter/FilterDropdown.js';
import 'react-native-url-polyfill/auto';

import { supabase } from '../../../supabase/supabase.js';

export default function RepertoireScreen() {

  const [data, setData] = useState([]);
  const [isCreatePostPopupVisible, setCreatePostPopupVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(data);
  const [selectedFilter, setSelectedFilter] = useState('');

  const getNews = async () => {
    try {
      const { data: news, error } = await supabase.from('news').select('*').order('date_created', { ascending: false });
      if (!error) {
        setData(news);
        setFilteredData(news);
      } else {
        console.warn(error);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  useEffect(() => {
    getNews();
  }, []);

  const filterTags = ['All', ...new Set(data.map((item) => item.tag))];

  const handleSearch = (searchText) => {
    const filtered = data.filter((item) =>
      item.title.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const resetFilters = () => {
    setFilteredData(data);
    setSelectedFilter('');
  };

  const handleFilterChange = (filter) => {
    setSelectedFilter(filter);
    if (filter === 'All') {
      resetFilters();
    } else {
      const filtered = data.filter((item) => item.tag === filter);
      setFilteredData(filtered);
    }
  };  

  const handleCreatePost = (newPost) => {
    // Handle creating a new post here
    console.log('New Post:', newPost);
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} onLeaveSearchBar={resetFilters} />
      <View style={styles.filterandButtonContainer}>
        <View style={{ zIndex: 3 }}>
        <FilterDropdown
          filterTags={filterTags}
          selectedFilter={selectedFilter}
          onFilterChange={handleFilterChange}
        />
        </View>
        <RoundedButton
          onPress={() => setCreatePostPopupVisible(true)}
          text="Proposer une idée"
          buttonColor="#FBDBB1"
        />
        <NewPostPopup
          isVisible={isCreatePostPopupVisible}
          onClose={() => setCreatePostPopupVisible(false)}
          onCreatePost={handleCreatePost}
        />
      </View>
      <ScrollView style={styles.scrollWiew}>
        <CardList data={filteredData} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollWiew: {
    zIndex: -1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filterandButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 15,
    marginBottom: 10,
  },
});