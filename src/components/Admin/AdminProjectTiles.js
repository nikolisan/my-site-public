import React from 'react';
import ProjectCard from './ProjectCard';

const AdminProjectTiles = (props) => {
    const projects = props.projects;
    return (
        <div className="card-columns">
            {
                Object.keys(projects).map((key) => {
                    return(
                        <ProjectCard key={key} project={projects[key]}/>
                    )
                })
            }
        </div>
    )
}

export default AdminProjectTiles;