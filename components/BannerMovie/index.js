import React from 'react';
//import { View, FlatList } from 'react-native';

import { Container, MovieList, MovieBanner } from './styles';

const BannerMovie = () => {
  return ( 
    <Container>
      <MovieList>
        <MovieBanner 
          source={{
            uri: 'https://api.themoviedb.org/3/movie/45162?api_key=api_key=b5675edb452b8e3a030c2600dbcac10b/vZqD8QMXiZh977LipOsXQmaMM7l.jpg',
          }}  
        />
      </MovieList>
    </Container>
  );   
}

export default BannerMovie;

