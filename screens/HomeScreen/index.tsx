import React from 'react';
import { StyleSheet } from 'react-native';
//import styles from './styles';
import { View } from 'react-native';
// @ts-ignore
//import Search from '../../components/Search';
import BannerMovie from '../../components/BannerMovie';

const HomeScreen = () => {
    

    return (
      <View style={styles.container}>
        {/*SearchBar, TabNavigation, TabSelection, BannerMovie */}
         <BannerMovie></BannerMovie> 
      </View>
    );
  }
  
export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignContent: 'center',
    },
});
