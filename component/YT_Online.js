import React, { Component } from 'react';
import{ Text, View, StyleSheet, Keyboard, ImageBackground, Dimensions } from 'react-native';
import YTSearch from 'youtube-api-search';
import { Card } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Spinner from 'react-native-spinkit';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import imgBg from '../images/khoi3d3.jpg'

const API_KEY='AIzaSyDnLVzHvHN6r3bc0kNbn8kkM3vwTR6oX7Y';

export default class ListYoutube extends Component{
    constructor(props){
        super(props);
        this.state={
            loading: false,
            videos:[],
        }
    }

    onPressSearch=term=>{
        this.videoSearch(term),
        Keyboard.dismiss()
    }

    videoSearch=term=>{
        this.setState({loading:true})
        YTSearch({key: API_KEY, term: term}, videos=>{
            this.setState({
                loading:false,
                videos: videos,
            })
        })
    }

    render(){
        const { loading, videos } = this.state;
        return(
            <View style={styles.container}>
                <ImageBackground style={{flex:1}} source={imgBg}>
                    <SearchBar
                        loading={loading}
                        onPressSearch={this.onPressSearch}/>
                        <View style={{flex:11}} >
                            {this.state.loading ? <Spinner style={styles.spinner} color='red' size={50} type='Circle'/> : <VideoList videos={videos}/>}
                        </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    spinner:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:Dimensions.get('window').width/2 - 20
    }
})