import React, { Component } from 'react';
import './admin.css';

import AdminNav from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import AdminProjectTiles from './AdminProjectTiles';
import AdminProjectDetails from './AdminProjectDetails';
import AdminAddForm from './AdminAddForm';


class AdminPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedId: null,
            selectedProject: null,
            addNewProject: false
        };
        this.selectProject = this.selectProject.bind(this);
        this.addNewProject = this.addNewProject.bind(this);
        this.showAll = this.showAll.bind(this);
    }

    selectProject(id) {
        const selectedProject = Object.values(this.props.projects).filter((project) => {
            return project.id === id
        })
        this.setState({
            selectedId: id,
            selectedProject: selectedProject[0],
            addNewProject: false
        });
    }

    addNewProject() {
        this.setState({addNewProject: true});
    }

    showAll() {
        this.setState({
            addNewProject: false,
            selectedId: null,
            selectedProject: null,
        });
    }

    render() {
        const projects = this.props.projects;
        return (
            <div className="admin-panel">
                <AdminNav />
                <div id="wrapper" className="menuDisplayed">
                    <AdminSidebar projects={projects} selectProject={this.selectProject} addNewProject={this.addNewProject} showAll={this.showAll}/>
                    <div id="page-content-wrapper">
                        <div className="container-fluid pt-3">
                            {this.state.selectedId && !this.state.addNewProject
                                ? <AdminProjectDetails project={this.state.selectedProject}/>
                                : this.state.addNewProject === true
                                    ? <AdminAddForm />
                                    : <AdminProjectTiles  projects={projects}/>
                            }   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPanel;

