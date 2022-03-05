import React, {useState, useEffect, createContext, useContext} from "react";
import { participationCollection, query, where, limit, getDocs } from "./firebase";

import config from "../../data/config.json";


const RsvpContext = createContext();

export default function RsvpProvider(props) {

    const {setIsValidSearch} = props

    const [searchKey , setSearchKey] = useState();

    const [isEmpty, setIsEmpty] = useState(false);

    const [data, setData] = useState({});

    async function handleSearch(e){
        e.preventDefault();
        console.log('searching..');
        await fetchData();
        console.log('search done.');
    }

    async function fetchData(){

      const participation = await getDocs( 
        query(
          participationCollection, 
          where('key','==',searchKey),
          limit(1)
        ) 
      );

      if( participation.empty){
        setIsEmpty(true);
      } else {
        setData(participation.docs[0].data());
      }    
    }

    useEffect(() => {
      console.log(data);
      if( Object.keys(data).length > 0){
        setIsValidSearch(true);
      }
    },[data])

    const value = {
        searchKey: searchKey,
        setSearchKey: setSearchKey,
        handleSearch : handleSearch,
        isEmpty : isEmpty,
        data : data,
        setData : setData
    };
    
    return (
      <RsvpContext.Provider value={value}>{props.children}</RsvpContext.Provider>
    );
  }


function useRsvpContext() {
    return useContext(RsvpContext);
}

export { RsvpProvider, useRsvpContext};