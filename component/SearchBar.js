import React, { Component } from 'react';
import{ Text, View, StyleSheet, TextInput, Dimensions } from 'react-native';
import { Button } from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';

class Search extends Component{
    constructor(props){
        super(props);
        this.state={
            term:'',
        }
    }

    render(){
        return(
            <View style={styles.container}>
                <View style={{ flex:1}}>
                    <TextInput
                            underlineColorAndroid='transparent'
                            style={styles.textInput}
                            placeholder='Nhập nội dung tìm kiếm'
                            placeholderTextColor='white'
                            onChangeText={term=>this.setState({term})}
                            value={this.state.term}
                            autoCorrect={false}
                            returnKeyType='search'
                            onSubmitEditing={()=>{ this.props.onPressSearch(this.state.term)
                                                this.setState({term:''})
                                            }}
                            clearTextOnFocus={true}
                            autoFocus={true}
                            onEndEditing={this.clearTextOnFocus}>
                        </TextInput>
                </View>
                <View>
                    <Button style={styles.button} onPress={()=>{
                        this.props.onPressSearch(this.state.term)
                        this.setState({term:''})
                        }}>
                        <Icon style={{marginRight:5}} name='ios-search-outline' size={30} color='white'/>
                    </Button>
                </View>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        margin:2
    },
    textInput:{
        flex:1,
        paddingLeft:5,
        margin: 5,
        height:Dimensions.get('window').width,
        backgroundColor:'rgba(105,105,105,0.3)',
        color: 'white',
        borderRadius:18,
        padding:2
    },
    button:{
        backgroundColor:'transparent',
        marginLeft:1,
        borderRadius:20,
        alignItems:'center'
    }
})

export default Search;