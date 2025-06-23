import { useState } from 'react';


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
        if(edit) {
            return (
                <>
                    <div className='field-container'>
                        <div className='field-group'>
                            <p>First Name:</p>
                            <input
                                placeholder='First Name'
                                onChange={handleFirstNameChange}
                                maxLength={24}

                            />
                        </div>
                        <div className='field-group'>
                            <p>Last Name:</p>
                            <input
                                placeholder='Last Name'
                                onChange={handleLastNameChange}
                                maxLength={24}
                            />
                        </div>
                    </div>
                    <div className='field-container'>
                        <div className='field-group'>
                            <p>Phone: </p>
    
                            <input
                                placeholder='Phone'
                                onChange={handlePhoneChange}
                                maxLength={12}
                            />
                        </div>
                        <div className='field-group'>
                            <p>Email: </p>
                            <input
                                placeholder='Email'
                                onChange={handleEmailChange}
                                type='email'
                                maxLength={24}
                            />
                        </div>
                    </div>
                </>
            )
        }
            return (
                <>
                    <div className='field-container'>
                        <div className='field-group'>
                            <p>First Name:</p>
                            <p>{person.firstName}</p>

                        </div>
                        <div className='field-group'>
                            <p>Last Name:</p>
                            <p>{person.lastName}</p>
                        </div>
                    </div>
                    <div className='field-container'>
                        <div className='field-group'>
                            <p>Phone: </p>
                            <p>{person.phone}</p>
                        </div>
                        <div className='field-group'>
                            <p>Email: </p>
                            <p>{person.email}</p>
                        </div>
                    </div>
                </>

            )
        }
        

    return (
        showSubmitted()
    )
}
export default General;