import React from 'react';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <div className="bg-body-tertiary" data-bs-theme='dark'>
            <div className="container my-2">
                <footer className="text-center text-white">
                    <div className="container pt-4">
                        <section className="mb-2">
                            <i className="fa-brands fa-facebook fa-2xl" style={{ color: "#ffffff" }}></i>
                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-twitter"></i
                            ></a>

                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-google"></i
                            ></a>

                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-instagram"></i
                            ></a>

                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-linkedin"></i
                            ></a>
                            <a
                                className="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i className="fab fa-github"></i
                            ></a>
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