import React from 'react';
import Logo from '../logo.png';

export default function Home() {

    return (
        <div className="container">

            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src={Logo} alt=""/>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Accueil
                        </a>
                        <a className="navbar-item">
                            Qui sommes-nous?
                        </a>
                        <a className="navbar-item">
                            Devenir Membre
                        </a>
                        <a className="navbar-item">
                            Calendrier des Activités
                        </a>



                        <a className="navbar-item">
                            Contacts
                        </a>
                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary is-rounded is-outlined">
                                    <strong>Faire un Don</strong>
                                </a>

                            </div>
                        </div>
                    </div>



                </div>
            </nav>
        </div>

    )
}