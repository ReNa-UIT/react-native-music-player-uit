import React,{ Component } from 'react';
import { View, ScrollView, StyleSheet} from 'react-native';
import VideoListItem from './VideoListItem';

const VideoList=({ videos })=>{
    const videoItems=videos.map(video=>(
        <VideoListItem
            key={ video.etag }
            video={video}
        />
    ))

    return(
        <ScrollView>
            <View> 
                {videoItems}
            </View>
        </ScrollView>
    );
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    }
});

export default VideoList;