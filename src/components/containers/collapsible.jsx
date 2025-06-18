import 'react'
import { useState } from 'react'

function Collapsible({ children }) {

    const [showBody, setShowBody] = useState('false');
    const onClickHandler = (e) => {
        e.preventDefault();
        setShowBody(!showBody);
    }
    return (
        <div className="collapsible">
            <div className="collapsible-header" onClick={onClickHandler}>
                {showBody ? '▲' : '▼'}
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