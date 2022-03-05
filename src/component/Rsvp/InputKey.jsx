import { useRsvpContext } from "./RsvpContext";

export default function InputKey(){

    const {setSearchKey, handleSearch, isEmpty} = useRsvpContext();

    return(<>        
        <form>
            <input type="text" placeholder="inserisci il codice partecipazione..." onChange={ (e) => setSearchKey(e.target.value)} />
            <input type="submit" onClick={handleSearch} />
            { isEmpty && (<p>Codice Partecipazione non valido.</p>)}
        </form>
    </>)
}