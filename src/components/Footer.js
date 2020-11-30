import React from 'react';
import Logo from '../logo.png';
export default function Footer() {

    return (
        <React.Fragment>

            <footer className="footer">
                <div className="container">

                    <nav className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <a  className="has-text-black">Facebook</a>
                            
                            </div>

                            <div className="level-item">
                            
                                <a  className="has-text-black">Instagram</a>
                            </div>
                            <div className="level-item">
                            
                                <a  className="has-text-black">Youtube</a>
                            </div>
                        </div>

                        <div className="level-right">
                            <p className="level-item "><a className="has-text-black"> Qui sommes-nous?</a></p>
                            <p className="level-item"><a className="has-text-black">Devenir Membre</a></p>
                            <p className="level-item"><a className="has-text-black">Calendrier des activités</a></p>
                            <p className="level-item"><a className="has-text-black">Contacts</a></p>
                        </div>
                    </nav>
                </div>
            </footer>
            <div className="footer_bar">
                    <div className="container has-text-centered">
                        <p>

                        <img src={Logo} alt="" width="200"/>
                        </p>
                        <p>
                        Copyright © 2020 - Champion Chretien

                        </p>
                    </div>

            </div>
        </React.Fragment>
    )
}