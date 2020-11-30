import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from '../components/Navbar'
import Header from '../components/Header'
export default function Home() {

    return (
        <div className="App">
            <Navbar />
            <div className="wrapper">

                <div className="container-fluid">

                    <div className="header">
                        <div className="hero is-dark is-large">
                            <div className="hero-body" style={{ backgroundImage: 'http://capethemes.com/demo/religionis/wp-content/uploads/2019/10/people-2597796_1920.jpg' }}>
                                <div className="container">

                                    <div className="hero-content">

                                        <h1 className="title">La grâce, l'amour et le pardon inconditionnels de Dieu pour tous.</h1>
                                        <div className="divider">
                                            <div className="divider_cursor"></div>
                                        </div>
                                        <p className="subtitle">
                                        La Bible est la Parole de Dieu inspirée, infaillible, vivante et entièrement suffisante. La Parole de Dieu est le principal moyen par lequel les élus sont unis au Christ ressuscité et ensuite, en lui, nourris pour la vie éternelle.

                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container home_missions">
                        <div className="columns">
                            <div className="column">
                                <div className="mission">
                                    <div className="picture">
                                        <img src="http://capethemes.com/demo/religionis/wp-content/uploads/2020/01/006-church-b.png" />
                                    </div>
                                    <h2 className="title">Culte</h2>
                                    <div className="subtitle">
                                    À quoi s'attendre

                                    </div>
                                    <div className="divider">
                                        <div className="divider_cursor"></div>
                                    </div>
                                    <div className="content">
                                        <p>
                                        Lorsque nous parlons de «culte», nous faisons référence à la vie de notre congrégation: assister à des services de culte, créer de la musique, honorer la vie.

                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="column">
                                <div className="mission">
                                    <div className="picture">
                                        <img src="http://capethemes.com/demo/religionis/wp-content/uploads/2020/01/002-choir-b.png" />
                                    </div>
                                    <h2 className="title">Relier</h2>
                                    <div className="subtitle">
                                    Contacts et membres
                                    </div>
                                    <div className="divider">
                                        <div className="divider_cursor"></div>
                                    </div>
                                    <div className="content">
                                        <p>
                                        La vie de l'Église signifie la foi, les relations, la discipline, le service, les responsabilités des dirigeants et des membres de l'Église, et bien plus encore.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="column">
                                <div className="mission">
                                    <div className="picture">
                                        <img src="http://capethemes.com/demo/religionis/wp-content/uploads/2020/01/005-child-b.png" />
                                    </div>
                                    <h2 className="title">L'Amour de Dieu</h2>
                                    <div className="subtitle">
                                    Croyances et histoire
                                    </div>
                                    <div className="divider">
                                        <div className="divider_cursor"></div>
                                    </div>
                                    <div className="content">
                                        <p>
                                        L'amour est un attribut clé du christianisme. L'amour de Dieu est un concept répandu à la fois dans l'Ancien Testament et dans le Nouveau Testament.

                                        </p>
                                    </div>
                                </div>


                            </div>
                            <div className="column">
                                <div className="mission is-big">
                                    <h2 className="title">
                                    Nous nous rassemblons pour l'inspiration, la camaraderie et la direction dans le sens du discipulat chrétien.
                                    </h2>
                                    <p className="subtitle">
                                    Nous partageons l’amour de Dieu de diverses manières dans nos maisons, nos lieux de travail, notre communauté locale et dans le monde entier.


        
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container latest_sermon">
                        <div className="intro">read and stay calm with our</div>
                        <div className="title">Dernières Publication</div>
                        <div className="columns">
                            <div className="column">
                                <div class="card has-background-light">
                                    <div class="card-image">
                                        <figure class="image is-1by1">
                                        <img src="https://placeimg.com/500/500/people" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <h3 className="title">L'héritage que nous allons laisser derrière nous.</h3>
                                        

                                        <div class="content">
                                        Le baptême chrétien est l'immersion du croyant dans l'eau au nom du Dieu trinitaire.



                                        </div>
                                        <a className="button is-rounded is-warning">Lire plus...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                            <div class="card has-background-light">
                                    <div class="card-image">
                                        <figure class="image is-1by1">
                                        <img src="https://placeimg.com/500/500/people?id=1" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <h3 className="title">L'héritage que nous allons laisser derrière nous.</h3>
                                        

                                        <div class="content">
                                        Le baptême chrétien est l'immersion du croyant dans l'eau au nom du Dieu trinitaire.



                                        </div>
                                        <a className="button is-rounded is-warning">Lire plus...</a>
                                    </div>
                                </div>
                            </div>
                            <div className="column">
                            <div class="card has-background-light">
                                    <div class="card-image">
                                        <figure class="image is-1by1">
                                        <img src="https://placeimg.com/500/500/people?id=2" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <h3 className="title">L'héritage que nous allons laisser derrière nous.</h3>
                                        

                                        <div class="content">
                                        Le baptême chrétien est l'immersion du croyant dans l'eau au nom du Dieu trinitaire.



                                        </div>
                                        <a className="button is-rounded is-warning">Lire plus...</a>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}