import React, { Component } from 'react';

class AdminPanel extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const projects = this.props.projects;
        return (
            <div className="">
                <nav className="navbar navbar-dark bg-primary shadow">
                    <span class="navbar-brand">Nick Andreakos</span>
                    <button className="btn btn-outline-light my-2 my-sm-0 text-center"><i className="fa fa-sign-out align-middle" /> Logout</button>
                </nav>
                <div className="row">
                    <nav className="col-2 sidebar">
                        <ul className="list">
                            {
                                Object.keys(projects).map((key) => {
                                    return(
                                        <li key={key}>{projects[key].title}</li>
                                    )
                                })
                            }
                        </ul>
                    </nav>

                    <div class="col-10">
                        <div className="border-bottom">
                            <h1>Add new project</h1>
                        </div>
                        <form>
                                <label>
                                    Title: 
                                    <input type="text" />
                                </label>
                                <label>
                                    Short Description: 
                                    <input type="text" />
                                </label>
                                <label>
                                    Background Image: 
                                    <input type="text" />
                                </label>
                                <label>
                                    Body: 
                                    <input type="text-area" />
                                </label>
                            </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default AdminPanel;