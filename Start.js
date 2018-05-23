import React, {Component} from 'react';
import {
    ImageBackground,
    Image,
    StyleSheet,
    View,
    Text,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

const {width, height} = Dimensions.get('window');

export default class Start extends Component {

    onPressSong = () => {
       Actions.ArtistListItem();
    }

    onPressFavorite = () => {
        Actions.Favorite();
    }

    onPressPlaylist = () => {
        Actions.Playlist();
    }

    onPressOnline = () => {
        Actions.Youtube();
    }

    render() {
        return(
            <ImageBackground source={require('./images/khoi3d3.jpg')} style={styles.firstBackground}>
                    <View style={styles.secondBackground}>
                        <View style={{flex:70}}>
                            <View style={{flex:60, alignItems: 'center', justifyContent:'center'}}>  
                                <Image source={require('./icon/sound.png')} style={{width:100, height:100}}/>
                            </View>
                            <View style={{flex:40}}/>
                        </View>
                        <View style={{flex:30, backgroundColor:'rgba(0,0,0, 0.7)'}}>
                            <View style={styles.buttonBackground}>
                                <TouchableOpacity style={styles.buttonContent}
                                                    onPress={this.onPressSong}
                                                    underlayColor='rgba(38, 50, 56,0.8)'>
                                        <Image source={require('./icon/allsong.png')} style={styles.image}/>
                                        <Text style={styles.text}>Bài hát</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContent}
                                                    onPress={this.onPressFavorite}
                                                    underlayColor='rgba(38, 50, 56,0.8)'>
                                    <Image source={require('./icon/favorite.png')} style={styles.image}/>
                                    <Text style={styles.text}>Yêu thích</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.buttonBackground}>
                                <TouchableOpacity style={styles.buttonContent}
                                                    onPress={this.onPressPlaylist}
                                                    underlayColor='rgba(38, 50, 56,0.8)'>
                                    <Image source={require('./icon/playlist.png')} style={styles.image}/>
                                    <Text style={styles.text}>Danh sách phát</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.buttonContent}
                                                    onPress={this.onPressOnline}
                                                    underlayColor='rgba(38, 50, 56,0.8)'>
                                    <Image source={require('./icon/youtube.png')} style={styles.image}/>
                                    <Text style={styles.text}>Youtube</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    firstBackground: {
        flex: 1
    },
    secondBackground:{
        backgroundColor: 'rgba(52, 52, 52, 0.4)',
        flex:1,
    },
    buttonBackground:{
        flexDirection:'row',
    },
    buttonView:{
        height:(height*3)/20,
        width:width/2,
    },
    buttonContent:{
        flex:1,
        flexDirection:'row',
        alignItems: 'center',
        justifyContent:'center',
        height:(height*3)/20,
        width:width/2,
        borderColor: 'rgb(38, 50, 56)',
        borderWidth: 0.5,
        borderRadius: 1
    },
    text:{
        color: 'white',
        fontSize: 16,
        fontFamily: "Helvetica Neue"
    },
    image:{
        width: 20,
        height: 20,
        tintColor: 'white',
        marginRight: 10
    }
});