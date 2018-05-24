import React,{Component} from 'react';
import {
    SectionList, StyleSheet, Text, View,
    Alert, Image,TouchableHighlight, ImageBackground
}from 'react-native';
import {sectionListData} from '../data/sectionListData';
import AddModal from './AddModal';
import Swipeout from 'react-native-swipeout';

class SectionListItem extends Component{
    render(){
        return(
            <ImageBackground source={require('../images/khoi3d3.jpg')} style={{flex:1}}>
                <View style={{flex:1,flexDirection:'column', backgroundColor: 'rgba(52, 52, 52, 0.2)'}}>
                    <View style={{ flex:1,flexDirection:'row', marginTop: 15,marginBottom: 15}}>
                        <Image
                            source={{uri: this.props.item.imageUrl}}
                            style={{width:45,height:45,marginLeft: 20,  borderRadius: 45}}/>
                        <View style={{
                            flex:1,
                            flexDirection:'column'
                        }}>
                            <Text style={{
                                fontSize:15,
                                color:'white',
                                marginLeft:20,
                                marginRight:10,
                                marginBottom: 5,
                                fontFamily: "Helvetica Neue"
                            }}>{this.props.item.name}</Text>
                            <Text style={{
                                fontSize:12,
                                color: "#BBB",
                                marginLeft:20,
                                marginRight:10,
                            }}>{this.props.item.description}</Text>
                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}

class SectionHeader extends Component{
    constructor(props){
        super(props);
        this.state={
            activeRowKey:null
        };
    }

    render(){
        const swipeSettings = {
            autoClose:true,
            onClose:(secId, rowId, direction)=>{
                if(this.state.activeRowKey!=null){
                    this.setState({activeRowKey:null});
                }

            },
            onOpen:(secId, rowId, direction)=>{
                this.setState({activeRowKey:this.props.section.key});

            },
            right:[
                {
                    onPress:()=>{
                        const  deletingRow=this.state.activeRowKey;
                        Alert.alert(
                            'Cảnh báo',
                            'Bạn có chắc muốn xoá không?',
                            [
                                {text:'Không', onPress:()=>console.log('Cancel Presses'),style:'cancel'},
                                {text:'Có',onPress:()=>{
                                        sectionListData.splice(this.props.index, 1);
                                        this.props.parentSectionList.refreshSectionList(deletingRow);
                                    }},
                            ],
                            {cancelable:true}
                        );

                    },
                    text:'Xoá', type:'delete'
                },
            ],
            rowId: this.props.index,
            sectionId: 1
        };
       
        return (
                <Swipeout {...swipeSettings}>
                <ImageBackground source={require('../images/khoi3d3.jpg')} style={{flex:1}}>
                    <View style={{flex: 1, backgroundColor: 'rgba(52, 52, 52, 0.4)',
                    flexDirection:'row',
                    alignItems:'center'}}>
                    <View style={{flex:90, justifyContent: 'flex-start'}}>
                        <Text style={{
                            fontSize:18,
                            color:'white',
                            marginTop: 10,
                            marginBottom: 10,
                            marginLeft: 12,
                            marginRight: 15,
                            fontFamily: "Helvetica Neue"
                        }}>{this.props.section.title}</Text>
                    </View>
                        <View style={{flex:10, justifyContent: 'center'}}>
                            <TouchableHighlight style={{marginRight:5}}
                                                underlayColor='rgba(52,52,52,0.6)'
                                                onPress={()=>{}}>
                                <Image style={{width:25,height:25, tintColor: 'white'}}
                                    source={require('../icon/thembai.png')}/>
                            </TouchableHighlight>
                        </View>
                    </View>
                    </ImageBackground>
                </Swipeout>
        );
    }
}

export default class Playlist extends Component{
    constructor(props) {
        super(props);     
        this.state = ({
            deletedRowKey: null,            
        });
        this._onPressAdd=this._onPressAdd.bind(this);
    }

    refreshSectionList = (activeKey) => {
        this.setState((prevState) => {
            return {
                deletedRowKey: activeKey
            };
        });
    }

    _onPressAdd(){
       this.refs.addModal.showAddModal();

    }

    render(){
        return(
                <ImageBackground source={require('../images/khoi3d3.jpg')} style={{flex:1}}>
                    <View style={{flex:12,
                            alignItems:'center', flexDirection: 'row'}}>
                            <View style={{flex:90, justifyContent:'flex-start', flexDirection: 'row', alignItems: 'center'}}>
                                <Image style={{width:18,height:18, marginLeft: 10, marginRight: 10, tintColor: 'white'}}
                                    source={require('../icon/playlist2.png')}/>
                                <Text style={{fontSize: 20, color:'white',fontFamily: "Helvetica Neue"}}>Danh sách phát</Text>
                            </View>
                            <View style={{flex:10, justifyContent: 'center'}}>
                                <TouchableHighlight style={{justifyContent: 'center', alignItems: 'center'}}
                                                    underlayColor="rgba(52, 52, 52, 0.6)"
                                                    onPress={this._onPressAdd}>
                                    <Image style={{width:22,height:22, tintColor: 'white'}}
                                        source={require('../icon/add.png')}/>
                                </TouchableHighlight>
                            </View>
                    </View>
                    <View style={{flex:88}}>
                        <SectionList
                            renderItem={({item, index})=>{
                                return(
                                    <SectionListItem item={item} index={index}/>
                                );
                            }}
                            renderSectionHeader={({section})=>{
                                return(
                                    <SectionHeader section={section} parentSectionList={this}/>
                                );
                            }}
                            sections={sectionListData}
                            keyExtractor={(item, index) => item.name}
                        />
                        <AddModal ref={'addModal'} parentSectionList={this}>
                        </AddModal>
                    </View>
                </ImageBackground>
        );
    }
}