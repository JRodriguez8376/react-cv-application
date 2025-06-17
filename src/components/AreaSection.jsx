import { Children } from "react";

function AreaSection({title, children}) {
    return(
        <div className="section"> 
            <div class="title">
                <h1>{title}</h1>
            </div>        
            
            {children}
        </div>
    )
}
export default AreaSection;