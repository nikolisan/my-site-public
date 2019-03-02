import React from 'react';

const removeProject = (callback, id) => {
    callback(id)
}

const ProjectCard = (props) => {
    const project = props.project;

    return(
        <div className="card">
        <img className="card-img card-img-tile responsive-img " src={project.bgImage} alt="Card image"/>
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.shortDesc}</p>
            </div>
            <div className="card-footer align-middle d-flex flex-row justify-content-end">
                <button className="btn btn-light"><i className="fa fa-cog mr-1"></i> Edit</button>
                <button className="btn btn-danger ml-1" onClick={() => { removeProject(props.removeProject, project.id) }}><i className="fa fa-trash mr-1"></i> Delete</button>
            </div>
        </div>
    )
}

export default ProjectCard;