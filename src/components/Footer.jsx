import React from 'react';

export default function Footer() {
    return (
        <div className="bg-body-tertiary" data-bs-theme='dark'>
            <div className="container">
                <footer className="text-center text-white">
                    <div className="container pt-4">
                        <section className="mb-2">

                            <h6>
                                <i className="fa-brands fa-facebook fa-2xl mx-2" style={{ color: "#ffffff" }}></i>

                                <i className="fa-brands fa-twitter fa-2xl mx-2" style={{ color: "#ffffff" }}></i>

                                <i className="fa-brands fa-google fa-2xl mx-2" style={{ color: "#ffffff" }}></i>

                                <i className="fa-brands fa-instagram fa-2xl mx-2" style={{ color: "#ffffff" }}></i>

                                <i className="fa-brands fa-linkedin fa-2xl mx-2" style={{ color: "#ffffff" }}></i>

                                <i className="fa-brands fa-github fa-2xl mx-2" style={{ color: "#ffffff" }}></i>
                            </h6>
                        </section>
                    </div>

                    <div className="text-center text-lg text-white p-3">
                        © 2020 Copyright:
                        <a className="text-lg text-white m-1" href="/">The Goan Traveller</a>
                    </div>
                </footer>

            </div>
        </div>);
}