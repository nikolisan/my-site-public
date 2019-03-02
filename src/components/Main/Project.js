import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Project extends Component {

    render () {
        const {title, shortDesc, bgImage, id, source} = this.props.project;

        const styleLarge = {
            backgroundImage: 'url(' + bgImage + ')'
        }

        const styleSmall = {
            backgroundImage: 'url(' + bgImage + ')',
            opacity: 0.5
        }

        return (
            <div className="col-sm-12 col-md-4">
                <div id="project-card" className="card">
                    <div className="card-img allow-scale d-none d-md-block" style={styleLarge}></div>
                    <div className="card-img d-md-none my-1" style={styleSmall}></div>
                    <div className="card-img-overlay d-flex flex-column text-center">
                            <h3 className="card-title d-md-none hover-show">{title}</h3>
                            <p className="card-text mt-auto d-md-none hover-show">{shortDesc}</p>
                            <a href={source} target="_blank" className="btn btn-outline-dark d-md-none hover-show">See more</a>
                    </div>
                </div>
            </div>
        )
    };
};

export default Project;