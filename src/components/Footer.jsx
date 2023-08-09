import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon, MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Container } from 'react-bootstrap';

export default function Footer() {
    return (
        <div className='bg-secondary' data-bs-theme="dark">
            <div class="container my-2">
                <footer class="text-center text-white">
                    <div class="container pt-4">
                        <section class="mb-2">
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-facebook-f"></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-twitter"></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-google"></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-instagram"></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-linkedin"></i
                            ></a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                            ><i class="fab fa-github"></i
                            ></a>
                        </section>
                    </div>

                    <div class="text-center text-dark p-3">
                        © 2020 Copyright:
                        <a class="text-dark" href="/">The Goan Traveller</a>
                    </div>
                </footer>

            </div>
        </div>);
}