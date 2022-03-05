import {useState} from "react";
import InputKey from "./InputKey";
import HandleRsvp from "./HandleRsvp";
import {RsvpProvider} from "./RsvpContext";


export default function Rsvp(){

    const [isValidSearch, setIsValidSearch] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        window.location = '#lista-nozze';
    }

    return(<>
        <RsvpProvider setIsValidSearch={setIsValidSearch}>
            { isValidSearch ? 
                <HandleRsvp />
                :
                <InputKey /> 
            } 
        </RsvpProvider>        
    </>)
}