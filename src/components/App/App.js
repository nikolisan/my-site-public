import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { base } from '../../base';

import MainPage from '../Main/MainPage';
import AdminPanel from '../Admin/AdminPanel';

class App extends Component {
  constructor(props) {
    super(props);
    this.addProject = this.addProject.bind(this);
    this.state = {
      projects: {}
    }
  }

  addProject(title, shortDesc, bgImage, body) {
    const randomImage = Math.floor(Math.random() * (1084 - 0 + 1)) + 0 ;
    const imgUrl = `https://picsum.photos/300/300/?image=${randomImage}`;
    
    const projects = {...this.state.projects};
    const id = Date.now();
    projects[id] = {
      id: id,
      title: title,
      shortDesc: shortDesc,
      bgImage: imgUrl,
      body: body
    };
    this.setState({projects});
  }

  componentWillMount() {
    this.projectsRef = base.syncState('projects', {
      context: this,
      state: 'projects'
    })
  }

  componentWillUnmount() {
    base.removeBinding(this.projectsRef);
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
            render={(routeProps) => (<AdminPanel {...routeProps} projects={this.state.projects} />)} 
          />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
