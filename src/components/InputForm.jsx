
import General from './General';
import Education from './Education';
import WorkExperience from './WorkExperience'
import Collapsible from './Collapsible'
import '../styles/InputForm.css'

function InputForm({edit, setEdit, person, setPerson, jobs, setJob, schools, setSchool}) {
    return(
        <div className='input-container'>
            <Collapsible
                title = {'General'}
            >
            <General 
                edit={edit}
                person={person}
                setPerson={setPerson}
                >
                </General>
            </Collapsible>
            <Collapsible
                title={'Education'}
            >
            <Education
                edit={edit}
                schools={schools}
                setSchool={setSchool}
            ></Education>
            </Collapsible>
            
            <Collapsible
                title={'Experience'}
            >
                <WorkExperience
                edit={edit}
                jobs={jobs}
                setJob={setJob}
                >

                </WorkExperience>
            </Collapsible>

        </div>
    )
}
export default InputForm;