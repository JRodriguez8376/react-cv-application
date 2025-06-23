import { useState } from 'react';

function Education({ edit, schools, setSchool }) {

    const handleSchoolChange = (e) => {
        const newEducation = { ...schools, school: e.target.value }
        setSchool(newEducation);
    }
    const handleStudyChange = (e) => {
        const newEducation = { ...schools, study: e.target.value }
        setSchool(newEducation);
    }
    const handleStartChange = (e) => {
        const newEducation = { ...schools, startDate: e.target.value }
        setSchool(newEducation);
    }
    const handleEndChange = (e) => {
        const newEducation = { ...schools, endDate: e.target.value }
        setSchool(newEducation);
    }

    const showSubmitted = () => {
        if(edit) {
            return(
            <>
                <div className='field-container'>
                    <div className='field-group'>
                        <p>School:</p>
                        <input
                            placeholder={schools.school}
                            onChange={handleSchoolChange}
                            maxLength={48}
                        />
                    </div>
                    <div className='field-group'>
                        <p>Title of Study:</p>
                        <input
                            placeholder={schools.study}
                            onChange={handleStudyChange}
                            maxLength={48}
                        />
                    </div>
                </div>
                <div className='field-container'>
                    <div className='field-group'>
                        <p>Start Date:</p>
                        <input
                            placeholder={schools.startDate}
                            onChange={handleStartChange}
                            type='date'
                        />
                    </div>
                    <div className='field-group'>
                        <p>End Date:</p>
                        <input
                            placeholder={schools.endDate}
                            onChange={handleEndChange}
                            type='date'
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
                        <p>School:</p>
                        <p>{schools.school}</p>
                    </div>
                    <div className='field-group'>
                        <p>Title of Study:</p>
                        <p>{schools.study}</p>
                    </div>
                </div>
                <div className='field-container'>
                    <div className='field-group'>
                        <p>Start Date:</p>
                        <p>{schools.startDate}</p>
                    </div>
                    <div className='field-group'>
                        <p>End Date:</p>
                        <p>{schools.endDate}</p>
                    </div>
                </div>
            </>
        )
    }
    return (
        showSubmitted()
    )
}

export default Education;