import React from 'react';

export default function Footer() {
    return (
        <div className="bg-body-tertiary" data-bs-theme='dark'>
            <div className="container">
                <footer className="text-center text-white">
                    <div className="container pt-4">
                        <section className="mb-2">

                            <h6>
                                <a href='https://www.facebook.com/jonathan.mascarenhas.37/'>
                                    <i className="fa-brands fa-facebook fa-2xl mx-2" style={{ color: "#ffffff" }}></i>
                                </a>
                                <a href='https://twitter.com/BusinessJon'>
                                    <i className="fa-brands fa-twitter fa-2xl mx-2" style={{ color: "#ffffff" }}></i>
                                </a>
                                {/* <a>
                                    <i className="fa-brands fa-google fa-2xl mx-2" style={{ color: "#ffffff" }}></i>
                                </a> */}
                                <a href='https://www.instagram.com/jonathan_mascarenhas/'>
                                    <i className="fa-brands fa-instagram fa-2xl mx-2" style={{ color: "#ffffff" }}></i>
                                </a>
                                <a href='https://www.linkedin.com/in/jonathanmascarenhas/'>
                                    <i className="fa-brands fa-linkedin fa-2xl mx-2" style={{ color: "#ffffff" }}></i>
                                </a>
                                <a href='https://github.com/JonathanAlexMasc'>
                                    <i className="fa-brands fa-github fa-2xl mx-2" style={{ color: "#ffffff" }}></i>
                                </a>
                            </h6>
                        </section>
                    </div>

                    <div className="text-center text-lg text-white p-3">
                        © 2023 Copyright:
                        <a className="text-lg text-white m-1" href="/">The Goan Traveller</a>
                    </div>
                </footer>

            </div>
        </div>);
}