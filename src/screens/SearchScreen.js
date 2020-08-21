import React, {useState, useEffect} from'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen=(props)=>{
    const [term,setTerm]=useState('');
    const [results, errorMessage, searchApi]=useResults();

    const filterResultsByPrice=(price)=>{
        //price==='$' || '$$' || '$$$'
        return results.filter(result=>{
            return result.price===price;
        })
    }

    return (
        <View style={{flex:1}}>
            <SearchBar term={term} onTermChange={setTerm} onSubmitChange={() =>searchApi(term)}/>
            {errorMessage?<Text>{errorMessage}</Text>:null}
            {/* <Text>We Have Found {results.length} results</Text> */}
            <ScrollView>
             <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
            <ResultsList results={filterResultsByPrice('$$')} title="Big Pricier" />
            <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" />
            </ScrollView>
        </View>
    );
}

const styles=StyleSheet.create({});

export default SearchScreen;