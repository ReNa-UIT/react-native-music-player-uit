import React,{Component} from 'react';
import {
    Text,
    View,Alert,TextInput,
    Dimensions
}from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import {sectionListData} from '../data/sectionListData';

var screen=Dimensions.get('window');

export default class AddModal extends Component{
    constructor(props){
        super(props);
        this.state={
            newAlbumName:'',
            newData:'',
        };
    }
    showAddModal=()=>{
        this.refs.myModal.open();
    }
    
    generateKey=(numberOfCharacters)=>{
        return require('random-string')({length: numberOfCharacters});
    }

    render(){

        return(
            <Modal
                ref={"myModal"}
                style={{
                justifyContent:'center',
                borderRadius:10,
                shadowRadius:10,
                width: screen.width-50,
                height:250
            }}
                position='center'
                backdrop={true}
                onClosed={()=>{
                }}
            >

                <Text style={{
                    fontSize:16,
                    fontWeight:'bold',
                    textAlign:'center',
                    marginTop:40
                }}>Nhập tên album mới</Text>

                <TextInput style={{
                    height:40,
                    borderBottomColor:'gray',
                    marginLeft:30,
                    marginRight:30,
                    marginTop:20,
                    marginBottom:10
                }}
                onChangeText={(text)=>this.setState({newAlbumName: text})}
                placeholder="Nhập tên album mới"
                value={this.state.newAlbumName}
                />

                <Button
                    style={{fontSize:18, color:'white'}}
                    containerStyle={{
                        padding:8,
                        marginLeft:100,
                        marginRight:100,
                        height:40,
                        borderRadius:6,
                        backgroundColor:'mediumseagreen'
                    }}
                    onPress={()=>{
                        if (this.state.newAlbumName.length==0){
                            alert("Bạn phải nhập tên album");
                            return;
                        }
                        const newKey=this.generateKey(24);
                        const newAlbum={
                            key:newKey,
                            title:this.state.newAlbumName,
                             data: this.state.newData,
                        };
                        sectionListData.push(newAlbum);
                        this.props.parentSectionList.refreshSectionList(newKey);
                        this.refs.myModal.close();
                    }}
                >
                    Lưu
                </Button>

            </Modal>


        );
    }
}
