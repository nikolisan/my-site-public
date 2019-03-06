import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { base } from '../../base';

import MainPage from '../Main/MainPage';
import AdminPanel from '../Admin/AdminPanel';
import ProjectPage from '../ProjectPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.addProject = this.addProject.bind(this);
    this.removeProject = this.removeProject.bind(this)
    this.state = {
      projects: [],
      loading: true
    }
  }

  addProject(data) {
    const randomImage = Math.floor(Math.random() * (1084 - 0 + 1)) + 0 ;
    const imgUrl = `https://picsum.photos/300/300/?image=${randomImage}`;
   
    const id = Date.now();
    const newProject = {
      id: id,
      title: data.title,
      shortDesc: data.desc,
      bgImage: imgUrl,
      body: data.body,
      source: data.source,
      download: data.download
    };
    this.setState({
      projects: [...this.state.projects, newProject]
    }); 
  }

  removeProject(id) {
    const projects = this.state.projects.filter(project => project.id !== id)
    this.setState({projects})
  }

  componentWillMount() {
    this.projectsRef = base.syncState('projects', {
      context: this,
      state: 'projects',
      asArray: true,
      then() {
        this.setState({ loading: false })
      }
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.projectsRef);
  }

  alertBox(message) {
    alert(message)
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route 
            exact 
            path="/" 
            render={(routeProps) => (<MainPage {...routeProps} projects={this.state.projects} />)} />
          <Route 
            exact 
            path="/admin" 
            render={(routeProps) => (<AdminPanel {...routeProps} projects={this.state.projects} addProject={this.addProject} removeProject={this.removeProject} />)} 
          />
          <Route path="/:id"
            render={(routeProps) => (<ProjectPage {...routeProps} projects={this.state.projects}/>)}
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
