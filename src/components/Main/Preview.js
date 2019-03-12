import React from 'react';

const Preview = props => {
    return (
        <div>
            <div className="offset-anchor" id="about"></div>
            <section className="about-me">
                <div id="about-me-section" className="row align-items-center p-2 m-0 preview-card">
                    <div className="col-lg-7"></div>
                    <div className="col-sm-12 col-lg-5">
                        <div className="card textbox bg-primary p-4 text-center">
                            <div className="card-body text-textColor">
                                <h3 className="bg-primary text-box-head">About Me</h3>
                                <p className="card-text">I'm Nick Andreakos and I'm a Civil Engineer.</p>
                                <p className="card-text">I studied at University of Patras, where I graduated and recieved my diploma at 2019. My field of expertise is Hydraulics with emphasis at coastal flows. To recieve my diploma I had to complete a Diploma Thesis. My thesis was about flow modelling of Patraikos Gulf. I researched advanced math flow models and programmed using Python a computational method to estimate the flow velocity and the water surface level, in a flow driven by tidal forces.</p>
                                <p className="card-text">I always loved programming and over the past years I taught myself how to code, mostly with resources over the web. I started with making simple applications for Windows, but soon after I found myself learning about the web development. Lately, I enjoy developing the front-end and sometimes also the backend for web apps and websites, although I never stop coding scientific applications, mostly on my field of study.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="offset-anchor" id="skills"></div>
            <section className="skills">
                <div id="skills-section" className="row align-items-center p-2 m-0 preview-card">
                    <div className="col-sm-12 col-lg-5">
                        <div className="card textbox bg-primary p-4">
                            <div className="card-body text-textColor">
                                <h3 className="bg-primary text-box-head text-center">My Skills</h3>
                                <p className="card-text col">Through the years at University I gained valuable skills regarding my field of studies and interpersonal relations.</p>
                                <div className="row">
                                    <p className="col">The most notable of those skills</p>
                                    <ul className="col">
                                        <li>2D/3D AutoCAD</li>
                                        <li>SAP2000</li>
                                        <li>Autodesk Revit</li>
                                        <li>3D modelling with SketchUp</li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <p className="card-text col">Programming Skills</p>
                                    <ul className="col">
                                        <li>Python, Matlab, Fortran</li>
                                        <li>HTML5, CSS3, SCSS, Bootstrap</li>
                                        <li>React.JS, Node.JS, Express</li>
                                    </ul>
                                </div>
                                <div className="row">
                                    <p className="card-text col">Other Skills</p>
                                    <ul  className="col">
                                        <li>Git</li>
                                        <li>Unix</li>
                                        <li>Wordpress</li>
                                        <li>Photoshop</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7"></div>
                </div>
            </section>
        </div>
    );
}

export default Preview;