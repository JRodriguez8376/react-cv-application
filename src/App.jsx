import { useState } from 'react'

import './styles/App.css'
import {personExample, jobExample, schoolExample} from './data/example.jsx'
import InputForm from './components/InputForm.jsx'
function App() {
  const [edit, setEdit] = useState(false);
  const [resume, setResume] = useState(
    {
      person: personExample, 
      school: schoolExample, 
      job: jobExample
    }
  );
  const [person, setPerson] = useState(personExample);
  const [school, setSchool] = useState(schoolExample);
  const [job, setJob] = useState(jobExample);
  return (
    // two forms, one will take input and output, that is user controlled
    // the other is purely output and will only read
    <>
    {console.log(resume)}
      <InputForm 
        edit={edit}
        setEdit={setEdit}
        person={person}
        setPerson={setPerson}
        job={job}
        setJob={setJob}
        school={school}
        setSchool={setSchool}
      
      > </InputForm>
      
      {/*}
      <OutputForm 
        resume={resume}
      />
        */}
    </>
  )
}

export default App
