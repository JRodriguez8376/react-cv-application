import {useState} from 'react'


function Add ({index, setIndex}) {


  
    const handleUpdateIndex = () => {
        let newIndex = index + 1;
        setIndex(newIndex);
    }

    return(
        <button
            onClick={handleUpdateIndex}
        >
            Add
            
        </button>
    )
    
}
export default Add;