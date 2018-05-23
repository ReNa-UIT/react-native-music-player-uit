import React, {Component} from 'react';
import { Router, Stack, Scene} from 'react-native-router-flux';
import Start from './Start';
import Playlist from './component/Playlist';
import ListYoutube from './component/YT_Online';
import ArtistList from './component/ArtistList';
import ArtistListItem from './component/ArtistListItem';
import ArtistShow from './component/ArtistShow';
import Player from './component/Player';
import Favorite from './component/Favorite';

export default class Menu extends Component {
    render() {
        return(
            <Router hideNavBar={true}>
                <Stack>
                    <Scene key='root'>
                        <Scene key='Start' hideNavBar={true} component={Start} initial={true} title='Start'/>
                        <Scene key='ArtistListItem' hideNavBar={true} component={ArtistListItem} title='Artists' titleStyle/>
                        <Scene key='ArtistShow' hideNavBar={true} component={ArtistShow}  title='ArtistShow'/>
                        <Scene key='Player' hideNavBar={true} schema="bottom" component={Player} title='Play'/>
                        <Scene key='Favorite' hideNavBar={true} component={Favorite}  title='Favorite'/>
                        <Scene key='Playlist' hideNavBar={true} component={Playlist} title='Playlist'/>
                        <Scene key='Youtube' hideNavBar={true} component={ListYoutube} title='Online'/>
                    </Scene>
                </Stack>
            </Router>
        );
    }
};