import React from 'react';

const AdminNavbar = (props) => {
    return(
        <nav className="navbar navbar-dark bg-dark justify-content-between fixed-top">
            <button id="menu-toggle" className="btn btn-dark"><i className="fa fa-bars"></i></button>
            <span className="navbar-brand mb-0 h1 mr-auto ml-3">Admin Panel</span>
            <button className="btn btn-outline-light ml-1"><i className="fa fa-sign-out mr-1"></i> Logout</button>
        </nav>
    )
}

export default AdminNavbar;