import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom';

import './project-page.css'
import Navbar from '../Main/Navbar';

class ProjectPage extends Component {
    constructor(props) {
        super(props)
        const { id } = this.props.match.params
        this.project = this.props.projects.filter(project => project.id == id)
    }

    componentWillMount() {
    }
    componentDidMount() {
        // console.log(this.project.title)
    }

  render() {
    return (
        <div>
            
            {this.project.length > 0 
            ?   <div className="project-page">
                    <div className="hero-img-project">
                        <img src={this.project[0].bgImage}></img>
                    </div>
                    <div className="container">
                        <h1>{this.project[0].title}</h1>
                        <p className="lead">{this.project[0].desc}</p>
                        <ul className="project-links">
                            <li><a href={this.project[0].download}>Download</a></li>
                            <li><a href={this.project[0].source}>Github</a></li>
                        </ul>
                        <div className="project-body">{this.project[0].body}</div>
                    </div>
                </div>
            :   <div className="text-center mt-4">
                    <h1>Page Not Found</h1>
                    <Link to='/'>Go Back</Link>
                </div>
            }
        </div>
    )
  }
}

export default withRouter(ProjectPage)