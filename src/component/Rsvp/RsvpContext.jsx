import React, {useState, useEffect, createContext, useContext} from "react";

const RsvpContext = createContext();

export default function RsvpProvider(props) {

    const value = {

    };
    
    return (
      <RsvpContext.Provider value={value}>{props.children}</RsvpContext.Provider>
    );
  }


function useRsvpContext() {
    return useContext(RsvpContext);
}

export { RsvpProvider, useRsvpContext};