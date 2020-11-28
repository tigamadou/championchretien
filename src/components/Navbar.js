import React from 'react';


export default function Home() {

    return (
        <div className="container">

            <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                        <img src="http://capethemes.com/demo/religionis/wp-content/uploads/2020/01/religionis-logo.png" />
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
                            Missions
                            </a>

                        <a className="navbar-item">
                            Contacts
                            </a>


                    </div>

                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary is-rounded is-outlined">
                                    <strong>Rejoindre</strong>
                                </a>
                                
                            </div>
                        </div>
                    </div>



                </div>
            </nav>
        </div>

    )
}