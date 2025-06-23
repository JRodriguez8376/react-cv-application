import 'react'
import { useState } from 'react'
import '../styles/collapsible.css'
function Collapsible({title, children }) {

    const [showBody, setShowBody] = useState('false');
    const onClickHandler = (e) => {
        e.preventDefault();
        setShowBody(!showBody);
    }
    return (
        <div className="collapsible">
            <div className="collapsible-header" onClick={onClickHandler}>
                
                
                <div>{showBody ? '▲' : '▼'}</div>
                <div className='collapsible-title'>{title}</div>
            </div>
            { showBody && 
                <div className="collapsible-content">
                {children}
                </div>
            }
        </div>
    )

}
export default Collapsible;