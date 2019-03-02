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
        this.submitForm = this.submitForm.bind(this)
        this.removeProject = this.removeProject.bind(this)
    }

    selectProject(id) {
        const selectedProject = this.props.projects.filter((project) => {
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

    submitForm(data) {
        this.props.addProject(data)
    }

    removeProject(id) {
        this.props.removeProject(id)
        this.setState({selectProject: null, selectedId: null})
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
                                ? <AdminProjectDetails project={this.state.selectedProject} removeProject={this.removeProject}/>
                                : this.state.addNewProject === true
                                    ? <AdminAddForm submitForm={this.submitForm}/>
                                    : <AdminProjectTiles  projects={projects} removeProject={this.removeProject}/>
                            }   
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AdminPanel;

