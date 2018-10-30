import React from 'react';

const ContactSection = (props) => {
    return (
        <div>
            <div className="offset-anchor" id="contact"></div>
            <section className="contact row m-0">
                <div className="col contact-area text-center text-light mb-0 p-4">
                    <h1> Do you have any questions?</h1>
                    <h3 className="font-weight-light">feel free to contact me</h3>
                    <a href="#" className="btn btn-outline-light btn-lg mt-5 px-5" role="button" data-toggle="modal" data-target="#ContactModal">Contact</a>
                </div>
            </section>
        </div>
    );
};

export default ContactSection;