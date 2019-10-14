import React, {Component} from 'react';

class  Default extends Component  {
    render() {
        console.log(this.props)
    return ( 
        <div className = 'container mt-5' >
            <div className="row">
                <div className="col-10 mx-auto text-center text-title  ">
                    <h1  style = {{ fontSize : '10rem' }} className = 'font-weight-light' > 404  </h1> <br/>
                    <h1 className = 'font-weight-light text-capitalize ' >
                        Your page URL : (<span className = 'text-danger' > 
                        {this.props.location.pathname} </span>) 
                        is not found enter a correct URL <br/> and try again Thank you.</h1>
                    
                </div>
            </div>
        </div>
     );
    }
    
}
 
export default Default;