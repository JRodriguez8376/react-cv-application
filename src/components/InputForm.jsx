import {useState} from 'react';
import General from './General';
import Collapsible from './containers/collapsible';
function InputForm({edit, setEdit, person, setPerson, job, setJob, school, SetSchool}) {

    return(
        <div>
            {console.log(person)}
            <Collapsible>
            <General 
                edit={edit}
                person={person}
                setPerson={setPerson}
                >
                </General>
            </Collapsible>
            
        </div>
    )
}
export default InputForm;