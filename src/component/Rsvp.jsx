import React, {useState} from "react";

export default function Rsvp(){

    function handleSubmit(){
        window.location = '#lista-nozze';
    }

    return(<>
    
        <button onClick={handleSubmit}>Conferma</button>
    
    </>)
}