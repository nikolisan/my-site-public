import React, { Component } from 'react';

class AdminAddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            desc: '',
            bgImg: '',
            body: '',
            source: '',
            download: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.submitForm = this.submitForm.bind(this)
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitForm(e) {
        e.preventDefault();
        const data = this.state
        this.props.submitForm(data)
    }

    render() {
        return (
            <div>
                <h1 className="text-center p-3">Add new project</h1>
                <form className="project-form" onSubmit={this.submitForm}>
                    <div className="form-group row">
                        <label className="col-lg-2 my-auto">Title</label>
                        <input type="text" className="form-control col-lg-10" id="titleInput" name="title" aria-describedby="title" placeholder="Project Title" onChange={this.handleChange} value={this.state.title}/>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 my-auto">Short Description</label>
                        <input type="text" className="form-control col-lg-10" id="titleInput" name="desc" aria-describedby="title" placeholder="Short Description" onChange={this.handleChange} value={this.state.desc}/>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 my-auto">Background Image</label>
                        <input type="url" className="form-control col-lg-10" id="titleInput" name="bgImg" aria-describedby="title" placeholder="Background Image URL" onChange={this.handleChange} value={this.state.bgImg}/>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 my-auto">Body Area</label>
                        <textarea className="form-control col-lg-10" id="titleInput" name="body" rows="5" onChange={this.handleChange} value={this.state.body}></textarea>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 my-auto">Source Code</label>
                        <input type="url" className="form-control col-lg-10" id="titleInput" name="source" aria-describedby="title" placeholder="Source code repo URL" onChange={this.handleChange} value={this.state.source}/>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 my-auto">Download Link</label>
                        <input type="url" className="form-control col-lg-10" id="titleInput" name="download" aria-describedby="title" placeholder="Download link" onChange={this.handleChange} value={this.state.download}/>
                    </div>
                    <div className="form-group row">
                        <label className="col-lg-2 my-auto"></label>
                        <button type="submit" className="btn btn-primary ml-auto">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AdminAddForm;