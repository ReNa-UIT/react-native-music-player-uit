import React,{Component} from 'react';
import {
    Text,View,Alert, Dimensions
}from 'react-native';
import Modal from 'react-native-modalbox';

var screen=Dimensions.get('window');

export default class AddModalSong extends Component{
    constructor(props){
        super(props);
       
    }

    showAddModal=()=>{
        this.refs.myModal.open();
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
                   alert("Modal close");
                }}
            >
            </Modal>
        );
    }
}
