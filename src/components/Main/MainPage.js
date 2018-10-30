import React, { Component } from 'react';
import PulseLoader from 'react-spinners/PulseLoader';
import Navbar from './Navbar';
import Hero from './Hero';
import Preview from './Preview';
import Project from './Project';
import ContactSection from './Contact';
import Footer from './Footer';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    getProjects = async () => {
        var projects = [];
        for (var id = 1; id <= 6; id++) {
            const img = await fetch('https://picsum.photos/300/?random');
            const newProject = {
            'id': id,
            'title': `Project #${id} Title`,
            'shortDesc': `This is a short desc for Project ${id}`,
            'bgImage': img.url
            }
            projects.push(newProject);
        };
        return projects;
    }
    
    componentDidMount() {
        this.getProjects().then((projects) => this.setState({projects}));
    };

    render() {
        return(
            <div>
                <Navbar />
                <Hero />
                <Preview />
                <div className="offset-anchor" id="projects"></div>
                <section className="projects">
                    <div className="text-center m-0 pb-2 pt-4">
                        <h2 className="display-4">Projects</h2>
                    </div>
                    <div className="row no-gutters">
                    {this.state.projects.length > 0
                        ?
                        this.state.projects.map((project) => {
                            return (
                            <Project project={project} key={project.id}/>
                            );
                        })
                        : <div className="my-2 mx-auto">
                            <PulseLoader sizeUnit={'px'} size={40} color={"#323B3C"}/>
                        </div>
                    }
                    </div>
                </section>
                <ContactSection />
                <Footer />
            </div>
        );
    };
};

export default MainPage;