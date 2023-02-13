import Note from "./Note";
import '../css/Note.css'

const Notes = () => {
    return (
        <div className='notes'>
            <Note />
            <Note />
            <Note />
        </div>
    );
};

export default Notes;