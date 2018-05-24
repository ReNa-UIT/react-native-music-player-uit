import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    ListView,
    TouchableHighlight,
    StyleSheet,
    ImageBackground,
    StatusBar
} from 'react-native';
import {Actions} from 'react-native-router-flux';
import FavoriteList from '../data/FavoriteList';

export default class Favorite extends Component {
    constructor(){
        super();
        data = "";
        source=new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows(FavoriteList);
    }
    componentWillMount() {
        this.UpdateData();
    }
    
    // When the component updates
    componentDidUpdate() {
        if (this.data != FavoriteList)
            this.UpdateData();
    }
    
    // Function to update the ListView component data
    UpdateData() {
        source = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        }).cloneWithRows(FavoriteList);
        data = FavoriteList;
    }

    render() {
        return(
            <View style={{flex: 1}}>
                <StatusBar backgroundColor='transparent' translucent={true} showHideTransition='fade'/>
                <ImageBackground source={require('../images/khoi3d3.jpg')} style={styles.firstBackground}>
                    <StatusBar backgroundColor='transparent' translucent={true} showHideTransition='fade'/>           
                    <View style={{flex:12}}>
                        <View style={{flex: 1, flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-start',marginLeft: 15, marginBottom: 10}}>
                            <Image source={require('../icon/favorite-off.png')} style={{width: 18, height: 18,marginRight: 10}}/>
                            <Text style={{fontSize: 20, color:'white',fontFamily: "Helvetica Neue"}}>Bài hát yêu thích</Text>
                        </View>
                    </View>
                    <View style={{flex:88, backgroundColor: 'rgba(52, 52, 52, 0.1)',}}>
                        <ListView
                            dataSource={ source }
                            style={ styles.songsList }
                            renderRow={(song, sectionId, rowId) => (
                                <TouchableHighlight onPress={ () => Actions.Player({ songIndex: parseInt(rowId), songs: FavoriteList, artist: FavoriteList[rowId] }) }
                                    activeOpacity={ 100 } underlayColor="rgb(246, 41, 118)">
                                    <View key={song} style={ styles.song }>
                                        <Text style={ styles.songTitle }>
                                            { song.title }
                                        </Text>
                                        <Text style={ styles.albumTitle }>
                                            { song.album }
                                        </Text>
                                    </View>
                                </TouchableHighlight>
                            )}
                            enableEmptySections={true}
                        />
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    firstBackground: {
        flex: 1
    },
    song: {
        paddingBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        borderBottomWidth: 1,
        borderBottomColor: "#333",
        borderRadius: 1
    },
    songsList: {
        flex: 1,
        paddingTop: 15,
        height: window.height - 10,
    },
    songTitle: {
        color: "white",
        fontFamily: "Helvetica Neue",
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 25
    },
    albumTitle: {
        color: "#BBB",
        fontFamily: "Helvetica Neue",
        fontSize: 12,
        marginBottom:5,
        marginLeft: 25
    },
});