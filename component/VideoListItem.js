import React,{Component} from 'react';
import { View, Text, Image, StyleSheet, Dimensions, WebView,Linking, TouchableHighlight } from 'react-native';
import { Card } from 'native-base';

const VideolistItem = ({video})=>{
    const {
        title,
        channelTitle,
        description,
        publishedAt,
        thumbnails: { high: { url }}
    } = video.snippet;

    const videoID = video.id.videoId;

    return(
            <TouchableHighlight style={styles.touch} onPress={() => Linking.openURL(`https://m.youtube.com/watch?v=${videoID}`)}>
                <View style={styles.container}>
                    <View style={styles.img_View}>
                        <Image style={styles.thumbnail}
                            source={{ uri: url }}/>
                    </View>

                    <View style={styles.text_View}>
                        <Text ellipsizeMode='tail' numberOfLines={3} style={{fontSize:11, color:'white',flex:2}}>
                            {title}
                        </Text>
                        <Text style={{fontSize:10,justifyContent:'flex-start' ,flex:1, color:'red'}}>
                            {channelTitle}
                        </Text>
                        <Text style={{fontSize:8, justifyContent:'flex-start', fontStyle:'italic',flex:1, color:'gray'}}>
                            {publishedAt}
                        </Text>
                    </View>
                </View>
            </TouchableHighlight>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin:3,
        height:95
    },
    img_View:{
        flex: 50,
    },
    text_View:{
        flex: 50,
        flexDirection: 'column',
        margin:6
    },
    thumbnail:{
        flex:1,
        alignSelf: 'stretch',
        margin:5
    },
    touch:{
        flex:1,
        margin:2,
        borderWidth:0.5,
        borderRadius:5,
        borderColor:'#585858'
    }
});

export default VideolistItem;