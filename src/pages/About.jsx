import React from 'react'
import {Link} from 'react-router-dom';
function About() {
    return (
    <div className="container aboutus">
        <div className="row">
            <div className="col-md-6 col-12 my-auto">
                <img src={require('../images/about.svg')} alt="about us" className="img-fluid" />
            </div>
            <div className="col-md-6 col-12 my-auto">
                <h1 className="display-4 text-center my-5">About the Project </h1>
                <p className="lead text-justify text-center">JUST A SAMPLE PROJECT</p>
                <div className="text-center col-md-6 col-12 mx-auto">
                    <Link to="/contact" className="btn btn-outline-dark btn-block btn-lg my-5">LETS CONNECT</Link>
                </div>
            </div>
        </div>
           <div className="team">
            <h1 className="display-4">Done By:</h1>
        </div>
        <div className="row mb-5">
            <div className="col-md-4 col-12 mx-auto my-2">
                <div className="card border-0 shadow-lg p-4">
                    <img src="https://i.im.ge/2022/07/11/unUtCz.jpg" className="card-img-top" alt="director" />
                    <div className="card-body">
                        <h5 className="card-title mb-0">Sahil Dange</h5>
                        <div className="card-text text-black-50">Software Developer at Infovision
                        </div>
                        <h6 className="mt-5">sahil.dange@infovision.com</h6>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    )
}
export default About;