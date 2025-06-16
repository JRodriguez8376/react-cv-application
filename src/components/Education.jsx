import {useState} from 'react';
import EditSubmit from './EditSubmit';
function Education({initialSchool}) {
    const [education, setEducation] = useState(initialSchool)
    const [canEdit, setEdit] = useState(false)

    const handleSchoolChange = (e) => {
        const newEducation = {...education, school: e.target.value}
        setEducation(newEducation);
    }
    const handleStudyChange = (e) => {
        const newEducation = {...education, study: e.target.value}
        setEducation(newEducation);
    }
    const handleStartChange = (e) => {
        const newEducation = {...education, startDate: e.target.value}
        setEducation(newEducation);
    }
    const handleEndChange = (e) => {
        const newEducation = {...education, endDate: e.target.value}
        setEducation(newEducation);
    }
    
    const showSubmitted = () =>  {
        if(canEdit == false) {
            // If User is editing, show input fields, otherwise show the inputted data in html
            return(
                <div>
                    <p>School Name: {education.school}</p>
                    <p>Title of Study: {education.study}</p>
                    <p>{education.startDate} to {education.endDate}</p>
                </div>
            
            )
        }
        return(
            <div>
                <input 
                placeholder={education.school}
                onChange={handleSchoolChange}
            />
                <input 
                placeholder={education.study}
                onChange={handleStudyChange}
            />
            
                <input 
                placeholder={education.startDate}
                onChange={handleStartChange}
            />
                <input 
                placeholder={education.endDate}
                onChange={handleEndChange}
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