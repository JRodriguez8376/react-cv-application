import '../styles/OutputForm.css'

function OutputForm({resume}) {

    return(
        <div className="resume">
            <div className="resume-header">
                <h1>{resume.person.firstName} {resume.person.lastName}</h1>   
            </div>
            <div>
                <p>{resume.person.email}</p>
            </div>
            <div><p>{resume.person.phone}</p></div>
            
            <div className="resume-section">
                <div className='section-header'>
                    <h3>Experience</h3>   
                </div>
                <div className='line-break'></div>
                <div>
                    <div className='item-header'>
                        <h4>{resume.jobs.companyName}</h4>
                        <h4>{resume.jobs.startDate}-{resume.jobs.endDate}</h4>
                    </div>
                    <div className='item-header'><h4>{resume.jobs.position}</h4></div>
                    <div className='item-body'>
                        
                        <p>{resume.jobs.description}</p>
                    </div>
                </div>
            </div>
            <div className="resume-section">
                <div className='section-header'>
                    <h3>Education</h3>
                </div>
                <div>
                <div className='line-break'></div>
                <div className='item-header'>
                        <h4>{resume.schools.school}</h4>
                        <h4>{resume.schools.startDate}-{resume.schools.endDate}</h4>
                    </div>
                    <div className='item-body'>
                        <p>{resume.schools.study}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default OutputForm;