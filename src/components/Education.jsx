import {useState} from 'react';

function Education({initialSchool}) {
    const [education, setEducation] = useState(initialSchool)
    return(
        <div>
            <p>School Name: {education.school}</p>
            <p>Title of Study: {education.study}</p>
            <p>{education.startDate} to {education.endDate}</p>
        </div>
    )
}

export default Education;