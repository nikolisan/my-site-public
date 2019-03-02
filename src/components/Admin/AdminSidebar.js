import React, { Component } from 'react';


class AdminSidebar extends Component {
    constructor(props) {
        super(props);
    }

    selectProject = (project) => {
        this.props.selectProject(project.id);
    }

    addNewProject = () => {
        this.props.addNewProject();
    }

    showAll = () => {
        this.props.showAll();
    }

    render() {
        const projects = this.props.projects;
        return (
            <div id="sidebar-wrapper" className="bg-dark">
                <div className="sidebar-buttons">
                    <button className="btn btn-outline-light add-button" onClick={this.addNewProject}><i className="fa fa-plus-circle mr-1"></i> Add new project</button>
                    <button className="btn btn-outline-light add-button mt-1" onClick={this.showAll}><i className="fa fa-plus-circle mr-1"></i> Show All</button>
                </div>
                <div className="sidebar-nav">
                    <ul>
                        {
                            Object.keys(projects).map((key) => {
                            return <li key={key} onClick={this.selectProject.bind(this, projects[key])}>{projects[key].title}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
    
}

export default AdminSidebar;