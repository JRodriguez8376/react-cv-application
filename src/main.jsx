import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './styles/sections.css'
import App from './App.jsx'
import AreaSection from './components/AreaSection.jsx'
import General  from './components/General.jsx'
import Education from './components/Education.jsx'
import WorkExperience from './components/WorkExperience.jsx'
import { jobExample, schoolExample, personExample } from './components/initialObj.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AreaSection 
      title={'General Information'} >
       <General 
        initialPerson = {personExample}
       />
        
      </AreaSection>
      
      <AreaSection 
      title={'Work Experience'}
      >
        <WorkExperience
          initialJob={jobExample}
        />

      </AreaSection>
      <AreaSection 
      title={'Education'}
      >
        <Education 
          initialSchool={schoolExample}
        />
      </AreaSection>

  </StrictMode>,
)
