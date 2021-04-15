import React, { useState } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
//import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <View style={styles.container}>
        <TextInput
            style={styles.searchbox}
            placeholder="Enter a Movie"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        </View>
    );
  }
  
export default Search;

const styles = StyleSheet.create({
    container: {
       // flexDirection: 'row',
        flex: 1,
        padding: 20,
    },
    searchbox: {
        fontSize: 20,
        fontWeight:'100',
        padding:18,
        width:'100%',
        backgroundColor:'#FFF', 
        alignContent: 'flex-end',
        justifyContent: 'space-around',
        borderRadius: 10,
    },
});