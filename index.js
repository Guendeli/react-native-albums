// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('albums', () => App);

import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';
// write a component
const App = () => {
    return (
        <Header />
    );
}

// render the shit
AppRegistry.registerComponent('albums', () => App);