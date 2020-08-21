import {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    const [results,setResults]=useState([]);
    const [errorMessage,setErrorMessage]=useState('');
    const searchApi=async (searchText)=>{
        console.log("Hi! There! ")
        try{
        const response=await yelp.get('/search',{
            params:{
                limit:50,
                term:searchText,
                location:'san jose'
            }
        });
        setResults(response.data.businesses);
    }catch(err){
        setErrorMessage("Something went wrong");
    }
}
// searchApi('pasta');

useEffect(() => {
    searchApi('pizza');
    }, [])
 return [results, errorMessage, searchApi];
}