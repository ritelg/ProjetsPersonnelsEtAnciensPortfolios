import React, {Component} from 'react';
import './About.scss';
import {Container} from "reactstrap"




export class About extends Component {


    render() {

        return (
            <section className="about section" id="moi">
                <Container className={"container"}>
                    <section className="about-content">
                        <h2 className="section-title">A Propos</h2>
                        <p className="about-content-name">
                            <span>Gaetan ritel</span> Développeur Web
                        </p>
                        <p className="about-content-description">
                            Passionné de dévelopement Web depuis longtemps
                        </p>

                        <section className="about-contact">
                            <p>
                                <span className="parts">Nom</span> : <span className="about-contact-name"><span>Gaetan</span> Ritel</span>
                                <br/>
                                <span className="parts">Mail</span> : ritelg@yahoo.fr <br/>
                                <span className="parts">Tél</span> : 06 51 85 49 48 <br/>
                            </p>
                        </section>
                        <section className="about-content-icons">
                            <a href="https://github.com/ritelg" alt="Github" title="Github" className="icons-item">
                                <img src="./icons/icon-github.png" alt="Github" title="Github"/>
                            </a>
                            <a href="https://twitter.com/ritelg" alt="Twitter" title="Twitter" className="icons-item">
                                <img src="./icons/icon-twitter.png" alt="Twitter" title="Twitter"/>
                            </a>
                            <a href="https://www.facebook.com/ritelg" alt="Facebook" title="Facebook" className="icons-item">
                                <img src="./icons/icon-facebook.png" alt="Facebook" title="Facebook"/>
                            </a>
                            <a href="https://www.codeur.com/-ritelg" alt="Codeur" title="Codeur" className="icons-item">
                                <img src="./icons/icon-codeur.png" alt="Codeur" title="Codeur"/>
                            </a>
                            <a href="https://www.malt.fr/profile/gaetanritel" alt="Malt" title="Malt" className="icons-item">
                                <img src="./icons/icon-malt.png" alt="Malt" title="Malt"/>
                            </a>
                        </section>
                    </section>
                    <section className="about-img"/>
                </Container>
            </section>
        );
    }
}
