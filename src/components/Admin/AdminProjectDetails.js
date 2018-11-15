import React from 'react';

const AdminProjectDetails = (props) => {
    return(
        <div className="card project-details mt-2">
            <div className="card-header align-middle d-flex flex-row justify-content-between">
                <h5 className="float-left my-auto">{props.project.title}</h5>
                <div>
                    <button className="btn edit-btn btn-sm btn-light"><i className="fa fa-cog"></i></button>
                    <button className="btn btn-sm btn-danger"><i className="fa fa-trash mr-1"></i></button>
                </div>
            </div>
            <div className="card-header text-muted small">{props.project.shortDesc}</div>
            <div className="row no-gutters p-2">
                <div className="col-lg-4">
                    <img className="card-img responsive-img " src={props.project.bgImage} alt="Card image"/>
                </div>
                <div className="col-lg-8">
                    <p className="card-text p-2 text-justify">{props.project.body}</p>
                </div>
            </div>
            <div className="card-footer align-middle d-flex flex-row justify-content-end">
                <a href="#" className="btn btn-light">Download <i className="fa fa-download ml-1"></i></a>
                <a href="#" className="btn btn-light">Github <i className="fa fa-github-square ml-1"></i></a>
            </div>
        </div>
    )
}

export default AdminProjectDetails;