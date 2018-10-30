import React from 'react';

const Footer = (props) => {
    return (
        <div>
            <div className="offset-anchor" id="footer"></div>
            <section className="footer bg-primary text-light py-5 row m-0">
                <div className="container text-center">
                    <div className="row">
                        <div className="col">
                            <p className="lead">find me on social networks</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3"></div>
                        <div className="col">
                            <a target="_blank" href="https://github.com/nikolisan" className="text-light"><i className="fa fa-github fa-2x"></i></a>
                        </div>
                        <div className="col">
                            <a target="_blank" href="#" className="text-light"><i className="fa fa-facebook-square fa-2x"></i></a>
                        </div>
                        <div className="col">
                            <a target="_blank" href="https://www.linkedin.com/in/nikolaos-andreakos/" className="text-light"><i className="fa fa-linkedin-square fa-2x"></i></a>
                        </div>
                        <div className="col">
                            <a target="_blank" href="https://www.instagram.com/photon.ick/" className="text-light"><i className="fa fa-instagram fa-2x"></i></a>
                        </div>
                        <div className="col">
                            <a target="_blank" href="https://500px.com/photon_ick" className="text-light"><i className="fa fa-500px fa-2x"></i></a>
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Footer;




