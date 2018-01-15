import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails';

class AlbumList extends Component {

    state = { albums : []};

    componentWillMount(){
        axios.get('https://raw.githubusercontent.com/Guendeli/react-native-albums/master/db.json')
        .then(response => this.setState({ albums : response.data}));
    }

    // helepr methods
    renderAlbums(){
        return this.state.albums.map(album => 
            <AlbumDetail key={album.title} album={album} />
        );
    }

    render(){
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;