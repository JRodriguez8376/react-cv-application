import {useState} from 'react'


function EditSubmit ({canEdit, setEdit}) {

    const [buttonText, setButtonText] = useState('Edit')
    // If Editable, change button text and update Edit State accordingly
    const isDone = () => {
        if(!canEdit) {
            setButtonText('Submit')
            setEdit(true);
            return;
        }
        setEdit(false);
        setButtonText('Edit')
        return;
    }

    return(
        <button
            onClick={isDone}
        >
            {buttonText}
            
        </button>
    )
    
}
export default EditSubmit;