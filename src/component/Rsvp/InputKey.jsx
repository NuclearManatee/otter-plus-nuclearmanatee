import { useRsvpContext } from "./RsvpContext";

export default function InputKey(){

    const {setSearchKey, handleSearch, isEmpty} = useRsvpContext();

    return(<>        
        <form className="rsvp-form">
            <div>
                <p>Inserisci il codice personale scritto a mano sul retro della partecipazione.</p>
            </div>
            <div>
                <input type="text" placeholder="inserisci il codice partecipazione..." onChange={ (e) => setSearchKey(e.target.value)} />
            </div>
            <div>
                <input type="submit" value="Conferma la Partecipazione" onClick={handleSearch} />
            </div>
            { isEmpty && (<p>Codice Partecipazione non valido.</p>)}
        </form>
    </>)
}