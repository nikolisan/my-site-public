import React from 'react';

const Navbar = props => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <a href="#home" className="navbar-brand">Nick K. Andreakos</a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapse-menu">
                <span className="sr-only">Toggle Menu</span>
                <span className="fa fa-bars fa"></span>
            </button>

            <div className="collapse navbar-collapse text-center menu" id="collapse-menu">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active"><a href="#home" className="nav-link text-light py-0 my-auto">Home</a></li>
                    <li className="nav-item"><a href="#about" className="nav-link text-light py-0 my-auto">About</a></li>
                    <li className="nav-item"><a href="#skills" className="nav-link text-light py-0 my-auto">Skills</a></li>
                    <li className="nav-item"><a href="#projects" className="nav-link text-light py-0 my-auto">Projects</a></li>
                    <li className="nav-item"><a href="#contact" className="nav-link text-light py-0 my-auto">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;