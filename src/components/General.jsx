import {useState} from 'react';
import EditSubmit from './EditSubmit';
function General({initialPerson}) {
    const [person, setPerson] = useState(initialPerson)
    const [canEdit, setEdit] = useState(false);

    const handleFirstNameChange = (e) => {
        const newPerson = {...person, firstName: e.target.value}
        setPerson(newPerson);
    }
    const handleLastNameChange = (e) => {
        const newPerson = {...person, lastName: e.target.value}
        setPerson(newPerson);
    }
    const handlePhoneChange = (e) => {
        const newPerson = {...person, phone: e.target.value}
        setPerson(newPerson);
    }
    const handleEmailChange = (e) => {
        const newPerson = {...person, email: e.target.value}
        setPerson(newPerson);
    }
    const showSubmitted = () =>  {
        if(canEdit == false) {
            // If User is editing, show input fields, otherwise show the inputted data in html
            return(
                <div>
                <p>Name: {person.firstName} {person.lastName}</p> 
                <p>Phone: {person.phone} </p> 
                <p>Email: {person.email} </p> 
                </div>
            
            )
        }
        return(
            <div>
                <input 
                placeholder={person.firstName}
                onChange={handleFirstNameChange}
            />
                <input 
                placeholder='Enter Last Name'
                onChange={handleLastNameChange}
            />
            
                <input 
                placeholder='Enter Phone Number'
                onChange={handlePhoneChange}
            />
                <input 
                placeholder='Enter Email'
                onChange={handleEmailChange}
                />
            </div>
        )
    }
    return(
        <div>
            <div>
                <EditSubmit 
                    canEdit={canEdit}
                    setEdit={setEdit}
                />
            </div>
            {showSubmitted()}
        </div>
    )
}

export default General;