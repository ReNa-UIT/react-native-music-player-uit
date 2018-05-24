import React, {Component} from 'react';
import{
    View, Image,
    Text, StyleSheet,
    TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

export default class ArtistList extends Component{
    render(){
        return(
            <View style={styles.main_view}>
                <TouchableOpacity style={styles.touch_container}
                                    onPress={()=>Actions.ArtistShow({item:this.props.item})} activeOpacity={ 100 } underlayColor="#ea4b54">
                    <View style={styles.container}>
                        <Image style={styles.images} source={{uri:this.props.item.background}}></Image>
                        <View style={styles.view_text}>
                            <Text style={styles.flatlistText}>{this.props.item.name}</Text>
                            <Text style={styles.song_num}>{this.props.item.songs.length} bài hát</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    main_view:{
        flex:1,
        flexDirection:'column',
        marginTop:0,
    },
    touch_container:{
        paddingLeft:10,
        paddingTop:2,
        paddingBottom:2,
        borderWidth:0.5,
        borderRadius:2,
        borderColor:'#333',
        backgroundColor:'rgba(52, 52, 52, 0.3)',
    },
    container:{
        flex:1,
        flexDirection:'row',
        marginTop: 8,
        marginBottom: 8
    },
    images:{
        width:45,
        height:45,
        borderRadius:45,
        alignItems:'center',
        justifyContent:'center'
    },
    flatlistText:{
        flex:1,
        margin:2,
        color: 'white',
        
        fontSize: 15,
    },
    song_num:{
        flex:1,
        fontSize:10,
        color:'red'
    },
    view_text:{
        flex:1,
        flexDirection:'column',
        paddingLeft:15,
        justifyContent:'center',
        alignItems:'flex-start'
    },
});