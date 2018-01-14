// import { AppRegistry } from 'react-native';
// import App from './App';

// AppRegistry.registerComponent('albums', () => App);

import React from 'react';
import { Text, AppRegistry } from 'react-native';

// write a component
const App = () => {
    return (
        <Text> SOME TEXT </Text>
    );
}

// render the shit
AppRegistry.registerComponent('albums', () => App);