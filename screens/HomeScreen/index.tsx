import React from 'react';
import { StyleSheet } from 'react-native';
//import styles from './styles';
import { Text, View } from 'react-native';

const HomeScreen = () => {
    

    return (
      <View style={styles.container}>
        {/*SearchBar, TabNavigation, TabSelection, BannerMovie */}  
        <Text >HOME</Text>
      </View>
    );
  }
  
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
