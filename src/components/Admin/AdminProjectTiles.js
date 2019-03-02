import React from 'react';
import ProjectCard from './ProjectCard';

const AdminProjectTiles = (props) => {
    const projects = props.projects;
    return (
        <div className="card-columns">
            {
                projects.map((project) => {
                    return(
                        <ProjectCard key={project.id} project={project} removeProject={props.removeProject}/>
                    )
                })
            }
        </div>
    )
}

export default AdminProjectTiles;