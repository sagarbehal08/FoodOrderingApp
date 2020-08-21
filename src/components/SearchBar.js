import React from'react';
import {StyleSheet, Text, View,TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons'; 
const SearchBar=(props)=>{
    return (
        <View style={styles.backgroundStyle}>
            <Feather name="search" color="black" style={styles.iconStyle}/>
            <TextInput 
            autoCapitalize='none'
            autoCorrect={false}
            style={styles.inputStyle}
            placeholder="Search"
            value={props.term}
            onChangeText={props.onTermChange}
            onEndEditing={props.onSubmitChange}
            />
        </View>
    );
}

const styles=StyleSheet.create({
    backgroundStyle:{
        marginTop:10,
        backgroundColor:'#F0EEEE',
        height:50,
        borderRadius:10,
        marginHorizontal:15,
        flexDirection:'row',
        marginBottom:10
    },
    inputStyle:{
        borderColor:'black',
        flex:1,
        fontSize:18
    },
    iconStyle:{
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }

});

export default SearchBar;