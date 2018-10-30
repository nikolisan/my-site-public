import React from 'react';

const Preview = props => {
    return (
        <div>
            <div className="offset-anchor" id="about"></div>
            <section className="about-me">
                <div id="about-me-section" className="row align-items-center p-2 m-0">
                    <div className="col-md-7"></div>
                    <div className="col-sm-12 col-md-5">
                        <div className="card textbox bg-primary p-4 text-center">
                            <div className="card-body text-textColor">
                                <h3 className="bg-primary text-box-head">About Me</h3>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="offset-anchor" id="skills"></div>
            <section className="skills">
                <div id="skills-section" className="row align-items-center p-2 m-0">
                    <div className="col-sm-12 col-md-5">
                        <div className="card textbox bg-primary p-4">
                            <div className="card-body text-textColor text-center">
                                <h3 className="bg-primary text-box-head">My Skills</h3>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                                <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7"></div>
                </div>
            </section>
        </div>
    );
}

export default Preview;