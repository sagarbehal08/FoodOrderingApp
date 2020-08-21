import React, { useState,useEffect } from'react';
import {StyleSheet, Text, View, FlatList,Image, ScrollView} from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen=({navigation})=>{
    const [result, setResult]=useState(null);
    const id=navigation.getParam('id');
    const getResult=async(id)=>{
        const response=await yelp.get(`/${id}`);
        setResult(response.data)
    }
    useEffect(()=>{
        getResult(id);
    },[]);
    if(!result){
        return null;
    }
    return(
        <View>
            <Text style={styles.title}>{result.name}</Text>
            
            <FlatList
             data={result.photos}
             keyExtractor={(photo)=>photo}
             renderItem={({item})=>{
                 return (
                 <Image style={styles.image} source={{uri:item}}/>
                    )}}
             />
            
        </View>
    );
}
const styles=StyleSheet.create({
    title:{
        fontSize:18,
        fontWeight:'bold',
        margin:10
    },
    image:{
        height:200,
        width:300,
        margin:10,
        borderRadius:10
    }
});
export default ResultsShowScreen;