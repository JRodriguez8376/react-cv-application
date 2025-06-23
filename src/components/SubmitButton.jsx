import { useState } from "react";

import '../styles/button.css'
function SubmitButton({state, setState}) {
    const [buttonText, setButtonText] = useState('Edit')

    
    const changeButton = () => {
        if(state == true) {
            setState(false);
            setButtonText("Edit")
            return;
        }
        setState(true)
        setButtonText("Submit")
    }

    return(
        <button
            onClick={changeButton}
            
        >
            {buttonText}
        </button>
    )
    }
export default SubmitButton;