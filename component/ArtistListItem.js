import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    StatusBar,
    FlatList,
    Image,
    ImageBackground
} from 'react-native';
import ArtistList from './ArtistList';
import SongList from '../data/listSong';

export default class ArtistListItem extends Component{
    render(){
        return(
            <ImageBackground source={require('../images/khoi3d3.jpg')} style={styles.firstBackground}>
                    <View style={{flex:12}}>
                        <View style={{flex: 1, flexDirection: 'row',alignItems: 'center',justifyContent: 'flex-start',marginLeft: 15,marginBottom: 10}}>
                            <Image source={require('../icon/musical-note.png')} style={{width: 18, height: 18,marginRight: 10,}}/>
                            <Text style={{fontSize: 20, color:'white',fontFamily: "Helvetica Neue"}}>Tất cả bài hát</Text>
                        </View>
                    </View>
                    <View style={{flex:88,backgroundColor: 'rgba(52, 52, 52, 0.1)',}}>
                        <View style={styles.container}>
                           <FlatList
                                data={SongList}
                                renderItem={({item})=><ArtistList item={item}/>}>
                            </FlatList>
                        </View>
                    </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft:2,
        paddingRight:2,
        justifyContent: 'center',
    },
    firstBackground: {
        flex: 1
    },
});