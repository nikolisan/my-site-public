import React from 'react';

const AdminAddForm = (props) => {
    return (
        <div>
            <h1 className="text-center p-3">Add new project</h1>
            <form className="project-form">
                <div className="form-group row">
                    <label className="col-lg-2 my-auto">Title</label>
                    <input type="text" className="form-control col-lg-10" id="titleInput" aria-describedby="title" placeholder="Project Title" />
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 my-auto">Short Description</label>
                    <input type="text" className="form-control col-lg-10" id="titleInput" aria-describedby="title" placeholder="Short Description" />
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 my-auto">Background Image</label>
                    <input type="url" className="form-control col-lg-10" id="titleInput" aria-describedby="title" placeholder="Background Image URL" />
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 my-auto">Body Area</label>
                    <textarea className="form-control col-lg-10" id="titleInput" rows="5"></textarea>
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 my-auto">Source Code</label>
                    <input type="url" className="form-control col-lg-10" id="titleInput" aria-describedby="title" placeholder="Source code repo URL" />
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 my-auto">Download Link</label>
                    <input type="url" className="form-control col-lg-10" id="titleInput" aria-describedby="title" placeholder="Download link" />
                </div>
                <div className="form-group row">
                    <label className="col-lg-2 my-auto"></label>
                    <button type="submit" className="btn btn-primary ml-auto">Submit</button>
                </div>
            </form>
        </div>
    )
}

export default AdminAddForm;