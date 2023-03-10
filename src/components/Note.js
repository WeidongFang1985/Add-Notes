import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import '../css/Note.css'

const Note = ({text,id,deleteNote}) => {
    return (
        <div className='note'>
            <div className="note__body">{text}</div>
            <div className="note__footer" style={{justifyContent:"flex-end"}}>
                <DeleteForeverOutlinedIcon className='note__delete' onClick={()=>deleteNote(id)}>

                </DeleteForeverOutlinedIcon>
            </div>
        </div>
    );
};

export default Note;
