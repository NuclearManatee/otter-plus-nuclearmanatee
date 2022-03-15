import React, {useState, useEffect, createContext, useContext} from "react";
import { dataBase, doc, getDoc, setDoc } from "./firebase";

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

      const docRef = doc(dataBase,'rspv',searchKey);

      const docSnap = await getDoc(docRef);

      console.log(docSnap);

      if (docSnap.exists()) {
        setData(docSnap.data());
      } else {
        setIsEmpty(true);
      }
 
    } 

    function setAttendee(index,value){
      let newData = data;
      newData.attendees[index].attending = value;
      setData(newData);
    }

    function setNotes(value){
      let newData = data;
      newData.notes = value;
      setData(newData);
    }

    async function saveParticipation(){
      await setDoc(doc(dataBase,'rspv',searchKey), data);
    }

    useEffect(() => {
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
        setAttendee : setAttendee,
        saveParticipation : saveParticipation,
        setNotes : setNotes
    };
    
    return (
      <RsvpContext.Provider value={value}>{props.children}</RsvpContext.Provider>
    );
  }


function useRsvpContext() {
    return useContext(RsvpContext);
}

export { RsvpProvider, useRsvpContext};