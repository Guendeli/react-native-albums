import React, { Component } from 'react';
import {View} from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetails';

class AlbumList extends Component {

    state = { albums : []};

    componentWillMount(){
        axios.get('http://rallycoding.herokuapp.com/api/music_albums')
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
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;