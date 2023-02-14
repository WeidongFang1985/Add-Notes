import LinearProgress from '@mui/material/LinearProgress';

const CreateNote = ({textHandler,inputText,saveHandler}) => {
    const charLimit = 100;
    const charLeft = charLimit - inputText.length
    return (
        <div className='note'>
            <textarea name="" id="" cols="10" rows="5" value={inputText} placeholder='Type....'
                      maxLength='100' onChange={textHandler}
            ></textarea>
            <div className="note__footer">
                <span className="label">{charLeft} left</span>
                <button className="note_save" onClick={saveHandler}>Save</button>

            </div>
            <LinearProgress className='char__progress' value={charLeft} variant='determinate'/>
        </div>
    );
};

export default CreateNote;
