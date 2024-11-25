import React from 'react';
import Image from 'next/image';

import styles from './navigation.module.css';
import NavLink from '../nav-link/NavLink';

const Navigation = () => {
    return (
        <nav className={`${styles.nav} navbar navbar-expand-sm bg-primary navbar-dark fixed-top`}>
            <div className="container-fluid">
                <NavLink href="/" className="navbar-brand d-flex flex-column align-items-center">
                    <Image src="/next-js.svg" alt="NextJS" width="70" height="28" className="d-inline-block align-text-top" />
                    Next JS
                </NavLink>
                {/* <Link href="/" legacyBehavior>
                    <a className="navbar-brand d-flex flex-column align-items-center">
                        <img src="/next-js.svg" alt="NextJS" width="70" height="28" className="d-inline-block align-text-top" />
                        Next JS
                    </a>
                </Link> */}

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#myNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item px-3">
                            <NavLink exact href="/" className="nav-link d-flex flex-column align-items-center" activeClassName={styles.active}>
                                <i className="bi bi-house-fill"></i>
                                <span>Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink href="/about" className="nav-link d-flex flex-column align-items-center" activeClassName={styles.active}>
                                <i className="bi bi-house-fill"></i>
                                <span>About</span>
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink href="/imperative" className="nav-link d-flex flex-column align-items-center" activeClassName={styles.active}>
                                <i className="bi bi-house-fill"></i>
                                <span>Imperative</span>
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink href="/dynamicimport" className="nav-link d-flex flex-column align-items-center" activeClassName={styles.active}>
                                <i className="bi bi-house-fill"></i>
                                <span>Dynamic Imports</span>
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink href="/dynamicmodule" className="nav-link d-flex flex-column align-items-center" activeClassName={styles.active}>
                                <i className="bi bi-house-fill"></i>
                                <span>Dynamic Module Imports</span>
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink href="/employees" className="nav-link d-flex flex-column align-items-center" activeClassName={styles.active}>
                                <i className="bi bi-house-fill"></i>
                                <span>Employees</span>
                            </NavLink>
                        </li>
                        <li className="nav-item px-3">
                            <NavLink href="/users" className="nav-link d-flex flex-column align-items-center" activeClassName={styles.active}>
                                <i className="bi bi-house-fill"></i>
                                <span>Users</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;