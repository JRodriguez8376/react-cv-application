import { Children } from "react";
function AreaSection({title, children}) {
    return(
        <div> 
            <h1>{title}</h1>
            {children}
        </div>
    )
}
export default AreaSection;