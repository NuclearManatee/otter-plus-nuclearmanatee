import { useRsvpContext } from "./RsvpContext";

export default function InputKey(){

    function handleSubmit(e){
        e.preventDefault();
        console.log('searching..')
    }

    return(<>        
        <form>
            <input type="text" placeholder="inserisci il codice partecipazione..." />
            <input type="submit" onClick={handleSubmit} />
        </form>
    </>)
}