import { useRsvpContext } from "./RsvpContext";

export default function HandleRsvp(){

    function handleSubmit(e){
        e.preventDefault();
        window.location = '#lista-nozze';
    }

    return(<>        
        <form>
        
            <input type="submit" onClick={handleSubmit} />
        </form>
    </>)
}