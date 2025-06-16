import {useState} from 'react';
import EditSubmit from './EditSubmit';

function Education({initialJob}) {
    const [job, setJob] = useState(initialJob)
    const [canEdit, setEdit] = useState(false);

    const handleCompanyChange = (e) => {
        const newJob = {...job, companyName: e.target.value}
        setJob(newJob);
    }
    const handlePositionChange = (e) => {
        const newJob = {...job, position: e.target.value}
        setJob(newJob);
    }
    const handleStartDateChange = (e) => {
        const newJob = {...job, startDate: e.target.value}
        setJob(newJob);
    }
    const handleEndDateChange = (e) => {
        const newJob = {...job, endDate: e.target.value}
        setJob(newJob);
    }
    const handleDescriptionChange = (e) => {
        const newJob = {...job, description: e.target.value}
        setJob(newJob);
    }


    const showSubmitted = () =>  {
        if(canEdit == false) {
            return(
                <div>
                    <p>Company Name: {job.companyName}</p>
                    <p>Position: {job.position}</p>
                    <p>{job.startDate} to {job.endDate}</p>
                    <p>Job Responsiblities: {job.description}</p>
                </div>
            
            )
        }
        return(
            <div>
            <p>Company Name: {job.companyName}</p>
            <input 
                placeholder={job.companyName}
                onChange={handleCompanyChange}
            />
            <p>Position: {job.position}</p>
            <input 
                placeholder={job.position}
                onChange={handlePositionChange}
            />
            <p>{job.startDate} to {job.endDate}</p>
            <input 
                placeholder={job.startDate}
                onChange={handleStartDateChange}
            />
            <input 
                placeholder={job.endDate}
                onChange={handleEndDateChange}
            />
            <p>Job Responsiblities: {job.description}</p>
            <input 
                placeholder={job.description}
                onChange={handleDescriptionChange}
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

export default Education;