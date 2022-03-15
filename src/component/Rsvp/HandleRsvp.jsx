import { useRsvpContext } from "./RsvpContext";
import {useState} from "react";

export default function HandleRsvp(){

    const { data, setAttendee, setNotes, saveParticipation} = useRsvpContext();

    const [ checked, setChecked] = useState(false);

    async function handleSubmit(e){
        e.preventDefault();
        await saveParticipation();
        console.log('saved');
        window.location = '#lista-nozze';
        console.log(data);
    }

    function handleCheckboxChange(e,index){
        setAttendee(index, e.target.checked);
        setChecked( (checked) => !checked);
    }

    function handleNotesChange(e){
        setNotes(e.target.value);
        setChecked( (checked) => !checked);
    }

    return(<>        
        <form className="rsvp-form">
            <div className="attendee header">
                <p>Partecipante</p>
                <p>Parteciperà?</p>
            </div>
            { 
                data.attendees.map( (attendee, index) => (
                    <div key={index} className="attendee">
                        <p>{attendee.fullName}</p> 
                        <input type="checkbox" checked={attendee.attending} onChange={ (e) => handleCheckboxChange(e,index)} />
                    </div>
                ))
            }
            <div className="padding-top padding-bottom"> 
                <p>Hai qualcosa da aggiungere (es. allergie o diete particolari)?</p>
                <textarea value={data.notes} onChange={handleNotesChange} />
                <input type="submit" onClick={handleSubmit} />
            </div>
        </form>
    </>)
}