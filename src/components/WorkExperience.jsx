import { useState } from 'react';


function Education({ jobs, setJob, edit }) {


    const handleCompanyChange = (e) => {
        const newJob = { ...jobs, companyName: e.target.value }
        setJob(newJob);
    }
    const handlePositionChange = (e) => {
        const newJob = { ...jobs, position: e.target.value }
        setJob(newJob);
    }
    const handleStartDateChange = (e) => {
        const newJob = { ...jobs, startDate: e.target.value }
        setJob(newJob);
    }
    const handleEndDateChange = (e) => {
        const newJob = { ...jobs, endDate: e.target.value }
        setJob(newJob);
    }
    const handleDescriptionChange = (e) => {
        const newJob = { ...jobs, description: e.target.value }
        setJob(newJob);
    }


    const showSubmitted = () => {
        if (edit) {
            return (
                <>
                    <div className='field-container'>
                        <div className='field-group'>
                            <p>Company Name:</p>
                            <input
                                placeholder={jobs.companyName}
                                onChange={handleCompanyChange}
                                maxLength={48}
                            />
                        </div>
                        <div className='field-group'>
                            <p>Position:</p>
                            <input
                                placeholder={jobs.position}
                                onChange={handlePositionChange}
                                maxLength={36}
                            />
                        </div>
                    </div>
                    <div className='field-container'>
                        <div className='field-group'>
                            <p>Start Date:</p>
                            <input
                                placeholder={jobs.startDate}
                                onChange={handleStartDateChange}
                                type='date'
                            />
                        </div>
                        <div className='field-group'>
                            <p>End Date:</p>
                            <input
                                placeholder={jobs.endDate}
                                onChange={handleEndDateChange}
                                type='date'
                            />
                        </div>
                    </div>
                    <div className='field-container'>
                        <div className='field-group'>
                            <p>Job Responsibilities & Description</p>
                            <textarea
                                placeholder={jobs.description}
                                onChange={handleDescriptionChange}
                                
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
                        <p>Company Name:</p>
                        <p>{jobs.companyName}</p>
                    </div>
                    <div className='field-group'>
                        <p>Position:</p>
                        <p>{jobs.position}</p>
                    </div>
                </div>
                <div className='field-container'>
                    <div className='field-group'>
                        <p>Start Date:</p>
                        <p>{jobs.startDate}</p>
                    </div>
                    <div className='field-group'>
                        <p>End Date:</p>
                        <p>{jobs.endDate}</p>
                    </div>
                </div>
                
                    <div className='large-input-group'>
                        <p>Job Responsibilities & Description</p>
                        <span>{jobs.description}</span>
                    </div>
               
            </>
        )

    }
    return (
        showSubmitted()
    )
}

export default Education;