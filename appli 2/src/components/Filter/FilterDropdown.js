import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterDropdown = ({ filterTags, selectedFilter, onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleFilterChange = (filter) => {
    onFilterChange(filter);
    setIsOpen(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleToggleDropdown} style={styles.dropdownHeader}>
        <View style={styles.labelContainer}>
          <Text style={styles.label}>{selectedFilter || 'Filtre catégories'}</Text>
        </View>
        <View style={styles.arrowIcon}>
          <View style={styles.arrowBar} />
        </View>
      </TouchableOpacity>
      {isOpen && (
        <View style={styles.dropdown}>
          {filterTags.map((item) => (
            <TouchableOpacity
              style={styles.dropdownItem}
              onPress={() => handleFilterChange(item)}
              key={item}
            >
              <Text>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 219,
    height: 49,
    paddingRight: 8,
    backgroundColor: 'white',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: '#E6E6E6',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    zIndex: 20,
    marginHorizontal: 5,
  },
  dropdownHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'space-between',
  },
  labelContainer: {
    flex: 1,
  },
  label: {
    color: '#737373',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: 0.15,
    flexWrap: 'wrap',
  },
  arrowIcon: {
    width: 24,
    height: 24,
    position: 'relative',
  },
  arrowBar: {
    width: 5,
    height: 10,
    left: 7,
    top: 14.5,
    position: 'absolute',
    transform: [{ rotate: '-90deg' }],
    transformOrigin: '0 0',
    backgroundColor: '#484848',
  },
  dropdown: {
    position: 'absolute',
    display: 'flex',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#E6E6E6',
    borderRadius: 10,
    marginTop: 4,
    top: 50,
    zIndex: 20,
    elevation: 3,
  },
  dropdownItem: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    zIndex: 2,
  },
});

export default FilterDropdown;
