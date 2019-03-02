import React from 'react';

const Hero = props => {
    return (
        <div>
            <div className="offset-anchor" id="home"></div>
            <div className="hero m-0 parallax--bg">
                <div className="container">
                    <div className="hero-section row">
                        <div className="col-12 text-center">
                            <h1 className="display-4">Nick Andreakos</h1>
                        </div> 
                        <div className="col-12 text-center">
                            <p className="lead">civil engineer and tech hobbyist passionate for programming</p>
                            <p className="lead">
                                <a href="#projects" className="btn btn-outline-dark btn-lg" role="button">See my work</a>
                            </p>
                        </div>
                        <div className="bottom-align-text">
                            <a href="#about"><h1 className=""><i className="fa fa-chevron-circle-down 2x"></i></h1></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;