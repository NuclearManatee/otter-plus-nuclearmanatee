import {useState} from "react";
import InputKey from "./InputKey";
import HandleRsvp from "./HandleRsvp";


export default function Rsvp(){

    const [isValidKey, setIdValidKey] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        window.location = '#lista-nozze';
    }

    return(<>
        { isValidKey ? 
            <HandleRsvp />
            :
            <InputKey /> 
        }        
    </>)
}