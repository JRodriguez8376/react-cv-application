import { useState } from 'react'

import './styles/App.css'

import { personExample, jobExample, schoolExample } from './data/example.jsx'
import InputForm from './components/InputForm.jsx'
import OutputForm from './components/OutputForm.jsx'
import SubmitButton from './components/SubmitButton';
function App() {
  const [edit, setEdit] = useState(false);
  const [person, setPerson] = useState(personExample);
  const [schools, setSchool] = useState(schoolExample);
  const [jobs, setJob] = useState(jobExample);

  return (
    // two forms, one will take input and output, that is user controlled
    // the other is purely output and will only read

    <>
      <div className='container'>
        
        <div className='container-item' id='input'>
        <SubmitButton
          state={edit}
          setState={setEdit}
        />
          <InputForm

            edit={edit}
            setEdit={setEdit}
            person={person}
            setPerson={setPerson}
            jobs={jobs}
            setJob={setJob}
            schools={schools}
            setSchool={setSchool}

          > </InputForm>
        </div>
        <div></div>
        <div className='container-item'>
          <OutputForm
            className='container-item'
            resume={{ person, jobs, schools }}
          />
        </div>
      </div>
    </>

  )
}

export default App;
