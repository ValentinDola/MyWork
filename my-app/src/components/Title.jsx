import React from 'react';
import '../App.css';





const Title = ({name,title}) => {
    return ( 
        
            <div className="col-10 mx-auto m-3 text-center text-title">
                <h1 className="text-capitalize font-weight-light">
                      {name} {title}
                </h1>
            </div>
        
     );
}
 
export default Title;