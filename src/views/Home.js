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

                                        <h1 className="title">God's unconditional grace, love, and forgiveness for all.</h1>
                                        <div className="divider">
                                            <div className="divider_cursor"></div>
                                        </div>
                                        <p className="subtitle">
                                            The Bible is the inspired, inerrant, living, and all-sufficient Word of God. God’s Word is the primary means by which the elect are united to the risen Christ and thereafter, in Him, nourished unto eternal life.

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
                                    <h2 className="title">Worship</h2>
                                    <div className="subtitle">
                                        What to Expect
                                    </div>
                                    <div className="divider">
                                        <div className="divider_cursor"></div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            When we speak of “worship,” we are referring to the life of our congregation: attending worship services, creating music, honoring life.

                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="column">
                                <div className="mission">
                                    <div className="picture">
                                        <img src="http://capethemes.com/demo/religionis/wp-content/uploads/2020/01/002-choir-b.png" />
                                    </div>
                                    <h2 className="title">Connect</h2>
                                    <div className="subtitle">
                                        Contacts & Members
                                    </div>
                                    <div className="divider">
                                        <div className="divider_cursor"></div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Church life means faith, relationship, discipline, service, responsibilities of church leaders and members, and much more.
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="column">
                                <div className="mission">
                                    <div className="picture">
                                        <img src="http://capethemes.com/demo/religionis/wp-content/uploads/2020/01/005-child-b.png" />
                                    </div>
                                    <h2 className="title">God’s Love</h2>
                                    <div className="subtitle">
                                        Beliefs and History
                                    </div>
                                    <div className="divider">
                                        <div className="divider_cursor"></div>
                                    </div>
                                    <div className="content">
                                        <p>
                                            Love is a key attribute in Christianity. The love of God is a prevalent concept both in the Old Testament and the New Testament.
                                        </p>
                                    </div>
                                </div>


                            </div>
                            <div className="column">
                                <div className="mission is-big">
                                    <h2 className="title">
                                    We gather for inspiration, fellowship, and guidance in the meaning of Christian discipleship.
                                    </h2>
                                    <p className="subtitle">
                                    We share God’s love in various ways in our homes, places of work, local community, and throughout the world.

        
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className="container latest_sermon">
                        <div className="intro">read and stay calm with our</div>
                        <div className="title">Latest Sermons</div>
                        <div className="columns">
                            <div className="column">
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        

                                        <div class="content">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                                        <a href="#">#css</a> <a href="#">#responsive</a>
                                        <br/>
                                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="column">

                            </div>
                            <div className="column">

</div>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}