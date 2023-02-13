import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import '../css/Note.css'

const Note = () => {
    return (
        <div className='note'>
            <div className="note__body">note</div>
            <div className="note__footer">
                <DeleteForeverOutlinedIcon></DeleteForeverOutlinedIcon>
            </div>
        </div>
    );
};

export default Note;
