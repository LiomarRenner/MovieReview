import React, { useState } from 'react';
import { StyleSheet, TextInput } from 'react-native';
//import styles from './styles';

const Search = () => {
    const [searchQuery, setSearchQuery] = React.useState('');

    const onChangeSearch = query => setSearchQuery(query);

    return (
        <>
        <TextInput
            style={styles.searchbox}
            placeholder="Enter a Movie"
            onChangeText={onChangeSearch}
            value={searchQuery}
        />
        </>
    );
  }
  
export default Search;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    searchbox: {
        fontSize: 20,
        fontWeight:'200',
        padding:16,
        width:'100%',
        backgroundColor:'#FFF',
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 8,
    },
});