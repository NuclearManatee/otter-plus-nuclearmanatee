import { useRsvpContext } from "./RsvpContext";

export default function HandleRsvp(){

    const { data, setData } = useRsvpContext();



    function handleSubmit(e){
        e.preventDefault();
        window.location = '#lista-nozze';
    }

    return(<>        
        <form>
            { 
                data.attendees.map( (attendee, index) => (
                    <div key={index}><p>{attendee.fullName}</p> {attendee.attending}</div>
                ))
            }

            <input type="submit" onClick={handleSubmit} />
        </form>
    </>)
}