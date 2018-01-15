// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('albums', () => App);

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// write a component
const App = () => {
    return (
        <View>
            <Header headerText = 'Albums' />
            <AlbumList />
        </View>
    );
}

// render the shit
AppRegistry.registerComponent('albums', () => App);