import { useState } from 'react';
import Collapsible from './containers/collapsible';
import '../styles/input.css';
function General({ edit, person, setPerson }) {

    const handleFirstNameChange = (e) => {
        const newPerson = { ...person, firstName: e.target.value }
        setPerson(newPerson);
    }
    const handleLastNameChange = (e) => {
        const newPerson = { ...person, lastName: e.target.value }
        setPerson(newPerson);
    }
    const handlePhoneChange = (e) => {
        const newPerson = { ...person, phone: e.target.value }
        setPerson(newPerson);
    }
    const handleEmailChange = (e) => {
        const newPerson = { ...person, email: e.target.value }
        setPerson(newPerson);
    }

    const showSubmitted = () => {
        return (
            <div className='inputContainer'>
                <input
                    placeholder='First Name'
                    onChange={handleFirstNameChange}
                />
                <input
                    placeholder='Last Name'
                    onChange={handleLastNameChange}
                />
                <input
                    placeholder='Phone'
                    onChange={handlePhoneChange}
                />
                <input
                    placeholder='Email'
                    onChange={handleEmailChange}
                />
            </div>
        )
    }
    return (
            showSubmitted()
    )
}
export default General;